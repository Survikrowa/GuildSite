import type { RequestHandler } from 'express';
import type { ZodError } from 'zod';
import passport from 'passport';
import { hasErrors } from '../../helpers/zodErrorChecker';
import {
  registerUser,
  generateCrypto,
  findUserBy,
  parseUserRegisterCredentials,
  sendConfirmationMail,
  insertActivationCode,
  updateUserAuthStatus,
  findCodeInDb,
} from './user.service';
import { isUserNotAuthenticated } from '../../helpers/isUserAuthenticated';

export const userRegisterController: RequestHandler = async (req, res, _next) => {
  const { username, password, email } = req.body;
  const parseResult = await parseUserRegisterCredentials({
    username,
    password,
    email,
  });
  if (hasErrors(parseResult)) {
    const { errors } = parseResult;
    const errorMessage = errors.map((error: ZodError) => error.message);
    res.status(403).json({ errorMessage });
  } else {
    const { data } = parseResult;
    if (data) {
      const { username, password, email } = data;
      const user = await findUserBy({ username, email });
      if (user) {
        res.status(401).json({ message: 'Username or email already taken' });
      } else {
        const authCode = generateCrypto();
        const instanceOfInsert = await insertActivationCode(authCode);
        if (instanceOfInsert) {
          const authCodeId = instanceOfInsert.get('authCodeId');
          const { message } = await registerUser({ username, password, email }, authCodeId);
          await sendConfirmationMail(email, authCode);
          res.status(201).json({ message });
        }
      }
    }
  }
};
export const userLogoutController: RequestHandler = (req, res, _next) => {
  req.logout();
  res.clearCookie('connect.sid', { path: '/' });
  res.status(200).send();
};

export const localPassportController: RequestHandler = (req, res, next) => {
  return new Promise((_resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return reject(err);
      if (!user) return res.status(401).json({ message: info.message });
      req.logIn(user, (err) => {
        if (err) return reject(err);
        return res.status(200).json({ Status: 200, Redirect: true, user });
      });
    })(req, res, next);
  });
};

export const codeValidationController: RequestHandler = async (req, res, _next) => {
  const { activationCode } = req.params;
  const foundCode = await findCodeInDb(activationCode);
  if (foundCode) {
    const authCodeId = foundCode.get('authCodeId');
    if (authCodeId) {
      const instance = await updateUserAuthStatus(authCodeId);
      console.log(isUserNotAuthenticated(instance));
      if (isUserNotAuthenticated(instance)) {
        res.status(200).json({
          message: 'User authenticated successfully. You can now log in!',
        });
      } else {
        res.status(409).json({ message: 'User is actually authenticated.' });
      }
    }
  } else {
    res.status(400).json({ message: 'Provided auth code is wrong.' });
  }
};

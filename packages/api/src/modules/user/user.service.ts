import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { config } from 'dotenv';
import { createTransport } from 'nodemailer';
import { Op } from 'sequelize';
import { SALT_ROUNDS } from '../../constants/bcrypt';
import { User } from './user.model';
import { registerSchema, loginSchema } from './user.schema';
import { myAccessToken } from '../../index';
import { ActivationCodes } from './user.model';

config();

export const findUserBy = (conditions: Record<string, string>) => {
  const findBy = Object.entries(conditions).map(([key, item]) => {
    return { [key]: item };
  });
  return User.findOne({
    where: {
      [Op.or]: findBy,
    },
  });
};

export const parseUserRegisterCredentials = async ({ username, password, email }: registerData) => {
  try {
    return {
      data: registerSchema.parse({ username, password, email }),
    };
  } catch (e) {
    return { errors: e.errors };
  }
};

export const parseUserLoginCredentials = async ({ username, password }: loginData) => {
  try {
    return {
      data: loginSchema.parse({ username, password }),
    };
  } catch (e) {
    return { errors: e.errors };
  }
};

export const generateCrypto = () => {
  return crypto.randomBytes(16).toString('hex');
};

export const createUser = ({ username, password, email }: Partial<User>, authCodeId?: number) => {
  return User.create({
    username,
    password,
    email,
    authCodeId,
  });
};

export const registerUser = async (
  { username, password, email }: userCredentials,
  authCodeId: number,
) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  await createUser(
    {
      username,
      password: hashedPassword,
      email,
    },
    authCodeId,
  );
  return {
    message: 'Account has been created!',
  };
};

export const insertActivationCode = (activationCode: string) => {
  return ActivationCodes.create({
    activationCode,
  });
};

const MAIL_SUBJECT = 'Please confirm your registration process';

const transporter = createTransport({
  //@ts-ignore
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    type: 'OAuth2',
    user: 'muzykancizgruzji@gmail.com',
    clientId: process.env.GOOGLE_OAUTH_ID,
    clientSecret: process.env.GOOGLE_OAUTH_SECRET,
    refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
    accessToken: myAccessToken,
  },
});

const prepareTextForMail = (activationCode: string) => {
  return `To activate your account: <a href="${process.env.MAIL_SITE_TARGET}/confirmaccount/${activationCode}">Click here</a>`;
};

export const sendConfirmationMail = async (to: string, activationCode: string) => {
  return transporter.sendMail(
    {
      from: process.env.MAIL_FROM,
      to,
      subject: MAIL_SUBJECT,
      html: prepareTextForMail(activationCode),
    },
    (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    },
  );
};

export const updateUserAuthStatus = (authCodeId: number) => {
  return User.update(
    {
      authenticated: true,
    },
    {
      where: {
        authCodeId,
        [Op.and]: {
          authenticated: false,
        },
      },
    },
  );
};

export const findCodeInDb = (activationCode: string) => {
  return ActivationCodes.findOne({
    where: {
      activationCode,
    },
  });
};

type userCredentials = {
  username: string;
  password: string;
  email: string;
};

type registerData = {
  username: string;
  password: string;
  email: string;
};

type loginData = {
  username: string;
  password: string;
};

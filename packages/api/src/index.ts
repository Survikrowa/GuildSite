import express, { json, urlencoded } from 'express';
import Session from 'express-session';
import CookieParser from 'cookie-parser';
import { google } from 'googleapis';
import passport from 'passport';
import Cors from 'cors';
import { appRouter } from './routes';
import { strategy as LocalStrategy } from './services/passportStrategies/passportLocalStrategy';
import { User } from './modules/user/user.model';
import { findUserBy } from './modules/user/user.service';
const memoryStore = require('memorystore')(Session);
const OAuth2 = google.auth.OAuth2;

const app = express();
const port = process.env.PORT;

passport.use(LocalStrategy);

app.use(
  Cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true,
  }),
);
app.use(json());
app.use(urlencoded({ extended: true }));
export const myOAuth2Client = new OAuth2(
  process.env.GOOGLE_OAUTH_ID,
  process.env.GOOGLE_OAUTH_SECRET,
);
myOAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN,
});
export const myAccessToken = myOAuth2Client.getAccessToken();
app.use(
  Session({
    secret: <string>process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      domain: process.env.SESSION_DOMAIN,
      httpOnly: true,
      secure: true,
    },
    store: new memoryStore({ checkPeriod: 86400000 }),
  }),
);
app.use(CookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser<User, string>((user, done) => {
  done(null, user.username);
});

passport.deserializeUser<User, string>(async (username, done) => {
  try {
    const user = await findUserBy({ username });
    if (!user) {
      return done(new Error('User not found'));
    }
    done(null, user);
  } catch (e) {
    done(e);
  }
});

app.use('/api', appRouter);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));

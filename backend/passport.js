const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacbebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
	"182212111020-07ke3ha4p75q9eaqh8thautq3khbf9in.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "399191648760165";
const FACEBOOK_APP_SECRET = "2edca89c1ebde5993150b7ec2aa629b1";

const TWITTER_API_KEY = "OYkzvxTEhjZdrgxeQ2JElnieY";
const TWITTER_API_SECRET = "fMxjiXcGNhN3UFvOKvyKVzE9qSa3oXeg5uBkjTpQzT2QZMWTwJ";
const TWITTER_BEARER_TOKEN =
	"AAAAAAAAAAAAAAAAAAAAAAfsdAEAAAAAMcU5G8TNyOFm08fy64T0faaProw%3D17DPncGWh4XLDZdQF0kANgMH3qJbEpKmXYOHvCESCuIdDr3QTs";

const TWITTER_OAUTH2_ID = "Vm9VWjVkREZjaGEySE4xV19ua3E6MTpjaQ";
const TWITTER_OAUTH2_SECRET =
	"jRSP-mUeQxaKchjj1kTH6u_ne__TdKqx_UYsezhXzFufuXjpqI";

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.use(
	new FacbebookStrategy(
		{
			clientID: FACEBOOK_APP_ID,
			clientSecret: FACEBOOK_APP_SECRET,
			callbackURL: "/auth/facebook/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

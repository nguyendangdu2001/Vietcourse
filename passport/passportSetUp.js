import * as authConstants from "../authKey/authKey.js";
import passport from "passport";
import User from "../models/userModel.js";
import FacebookTokenStrategy from "passport-facebook-token";
import GoogleStrategy from "passport-google-token";
const GoogleTokenStrategy = GoogleStrategy.Strategy
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleTokenStrategy(
        {
            clientID: authConstants.googleKey.googleClientId,
            clientSecret: authConstants.googleKey.googleClientSecretKey,
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ "google.id": profile.id }, (err, currentUser) => {
                if (currentUser) {
                    (currentUser.name = profile.displayName),
                        (currentUser.google.name = profile.displayName),
                        (currentUser.google.token = accessToken);
                    currentUser.save();
                    done(null, currentUser);
                } else {
                    new User({
                        userName: "google" + profile.emails[0].value,
                        name: profile.displayName,
                        userPic: profile.photos[0].value,
                        google: {
                            id: profile.id,
                            name: profile.displayName,
                            token: accessToken,
                            email: profile.emails[0].value,
                        },
                    })
                        .save()
                        .then((user) => {
                            done(null, user);
                        });
                }
            });
        }
    )
);

passport.use(
    new FacebookTokenStrategy(
        {
            clientID: authConstants.facebookKey.facebookClientId,
            clientSecret: authConstants.facebookKey.facebookClientSecretKey,
            fbGraphVersion: "v3.0",
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({ "facebook.id": profile.id }, (err, currentUser) => {
                if (currentUser) {
                    (currentUser.name = profile.displayName),
                        (currentUser.facebook.name = profile.displayName),
                        (currentUser.facebook.token = accessToken);
                    currentUser.save();
                    done(null, currentUser);
                } else {
                    new User({
                        userName: "facebook" + profile.emails[0].value,
                        name: profile.displayName,
                        userPic: profile.photos[0].value,
                        facebook: {
                            id: profile.id,
                            name: profile.displayName,
                            token: accessToken,
                            email: profile.emails[0].value,
                        },
                    })
                        .save()
                        .then((user) => {
                            done(null, user);
                        });
                }
            });
        }
    )
);

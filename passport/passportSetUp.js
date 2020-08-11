import * as authConstants from "../authKey/authKey.js";
import passport from "passport";
import User from "../models/userModel.js";
import FacebookTokenStrategy from "passport-facebook-token";
import GoogleToken from "passport-google-token";
import GoogleIdTokenStrategy from "passport-google-id-token";
const GoogleTokenStrategy = GoogleToken.Strategy;
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .exec((err, user) => {
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
            User.findOne({ "google.id": profile.id })
                .populate("cart")
                .exec((err, currentUser) => {
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
                            userPic: profile._json.picture,
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
    new GoogleIdTokenStrategy(
        {
            clientID: authConstants.googleKey.googleClientId,
        },
        (profile, googleId, done) => {
            User.findOne({ "google.id": profile.payload.id })
                .populate("cart")
                .exec((err, currentUser) => {
                    if (currentUser) {
                        (currentUser.name = profile.payload.name),
                            (currentUser.google.name = profile.payload.name),
                            (currentUser.userPic = profile.payload.picture);
                        currentUser.save();
                        done(null, currentUser);
                    } else {
                        new User({
                            userName: "google" + profile.payload.email,
                            name: profile.payload.name,
                            userPic: profile.payload.picture,
                            google: {
                                id: googleId,
                                name: profile.payload.name,
                                email: profile.payload.email,
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
            User.findOne({ "facebook.id": profile.id })
                .populate("cart")
                .exec((err, currentUser) => {
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

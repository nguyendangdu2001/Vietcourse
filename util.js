import jwt from "jsonwebtoken";
import config from "./config.js";
const getToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            userName: user.userName,
            google: { id: user.google.id, email: user.google.email },
        },
        config.JWT_SECRET,
        {
            expiresIn: "48h",
        }
    );
};
export { getToken };

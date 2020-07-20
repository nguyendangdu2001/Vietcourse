import dotenv from 'dotenv'
dotenv.config()
export const googleKey ={
    googleClientId : process.env.googleClientId,
    googleClientSecretKey: process.env.googleClientSecretKey
}
export const facebookKey = {
    facebookClientId: process.env.facebookClientId,
    facebookClientSecretKey: process.env.facebookClientSecretKey
}
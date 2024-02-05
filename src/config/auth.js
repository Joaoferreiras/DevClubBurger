import dotenv from 'dotenv'

dotenv.config()

export default{
    secret: process.env.AUTHSECRET,
    expiresIn: '5d'
}
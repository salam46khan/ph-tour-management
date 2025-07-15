import dotenv from 'dotenv'

dotenv.config()

interface IenvVars {
    PORT: string,
    DB_URL: string,
    NODE_ENV: string
}

export const envVars: IenvVars = {
    PORT: process.env.PORT!,
    DB_URL: process.env.DB_URL!,
    NODE_ENV: process.env.NODE_ENV!
}
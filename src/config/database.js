import dotenv from 'dotenv'

dotenv.config()

export default{
    dialect: 'postgres',
    username: process.env.PGUSERNAME,
    password: process.env.PGUPASSWORD,
    database: process.env.PGDATABASE,
    url: 'postgresql://postgres:b1b51E5d41BG1*1*bC4-cFF1AEDFBC6-@viaduct.proxy.rlwy.net:19691/railway',
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true, 
    },
}
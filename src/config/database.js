import dotenv from 'dotenv'

dotenv.config()

module.exports = {
    dialect: 'postgres',
    url: process.env.PGDATABASE_URL,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true, 
    },
}
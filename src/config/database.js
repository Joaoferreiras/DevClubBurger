import dotenv from 'dotenv'

dotenv.config()

export default{
    dialect: 'postgres',
    url: process.env.PGDATABASE_URL,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true, 
    },
}
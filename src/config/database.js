module.exports = {
    dialect: 'postgres',
    host:'localhost',
    username: process.env.PGUSERNAME,
    password: process.env.PGUPASSWORD,
    database: process.env.PGDATABASE,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true, 
    },
}
import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'

import configDatabase from '../config/database.js'


const models = [User, Product, Category]

class Database {
constructor(){
    this.init()
    this.mongo()

}
init(){
    this.connection = new Sequelize(process.env.PGDATABASE_URL)
    models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))

}

mongo(){
    this.mongoConnection = mongoose.connect(process.env.DBDATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedToPology: true,
    })
}
}

export default new Database()
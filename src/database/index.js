import Sequelize from 'sequelize'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

import User from '../app/models/User.js'
import Product from '../app/models/Product.js'
import Category from '../app/models/Category.js'

import configDatabase from '../config/database.js'

const urlMongo = `${process.env.DBDATABASE_URL}`


const models = [User, Product, Category]

class Database {
constructor(){
    this.init()
    this.mongo()

}
init(){
    this.connection = new Sequelize(configDatabase)
    models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))

}

mongo(){
    this.mongoConnection = mongoose.connect('mongodb://mongo:d1C5Hfeh2beb-gd1BeG33f-f35b-He-H@monorail.proxy.rlwy.net:42709',{})
}
}

export default new Database()
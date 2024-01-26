import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

import configDatabase from '../config/database'


const models = [User, Product, Category]

class Database {
constructor(){
    this.init()
    this.mongo()

}
init(){
    this.connection = new Sequelize('postgresql://postgres:b1b51E5d41BG1*1*bC4-cFF1AEDFBC6-@viaduct.proxy.rlwy.net:19691/railway')
    models.map((model) => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))

}

mongo(){
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/codeburger',{
        useNewUrlParser: true,
        useUnifiedToPology: true,
    })
}
}

export default new Database()
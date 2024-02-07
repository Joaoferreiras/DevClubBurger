import express from 'express'
import routes from './routes.js'
import cors from 'cors'
import {resolve} from 'path'
import './database/index.js'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
  origin: 'https://codeburger-front.vercel.app',
  Credential: true
}





class App {
  constructor() {
    this.app = express()
    this.app.use(cors(corsOptions))

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use('/product-file',
     express.static(resolve(__dirname, '..', 'uploads')) )

     this.app.use('/category-file',
     express.static(resolve(__dirname, '..', 'uploads')) )
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app

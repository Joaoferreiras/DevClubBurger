import { Router } from 'express'

import multer from 'multer'
import multerConfig from './config/multer.js'

import UserControllers from './app/controllers/UserControllers.js'
import SessionController from './app/controllers/SessionController.js'
import ProductController from './app/controllers/ProductController.js'
import CategoryController from './app/controllers/CategoryController.js'
import OrderController from './app/controllers/OrderController.js'

const routes = new Router()
const upload = multer(multerConfig)
import authMiddlewares from './app/middlewares/auth.js'

routes.get('/', (req, res)=> {
return res.json({message:"Welcome to my first API"})
})

routes.post('/users', UserControllers.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)


routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

export default routes

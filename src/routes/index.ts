import { Router } from 'express'
import user from './user'

const routes  = Router()

const path = require('path')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Express+TypeORM+Swagger API", version: "1.0.0" },
    servers: [ { url: "http://localhost:3000" } ]
  },
  apis: [ `${path.join(__dirname, './*.ts')}`],
}
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerSpec), { explorer: true }));

routes.use('/user', user)

export default routes
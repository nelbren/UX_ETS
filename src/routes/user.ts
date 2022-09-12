import { Router } from 'express'
import { UserController } from '../controllers'

const router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *        Type: object
 *        properties:
 *          firstName: 
 *            type: string
 *            description: Nombre
 *          lastname:
 *            type: string
 *            description: Apellido
 *          age:
 *            type: number
 *            description: Edad
 */

/**
 * @swagger
 * /user:
 *   get:
 *      summary: Obtiene todos los usuarios
 *      tag: [User]
 *      responses:
 *         200:
 *           description: Lista de usuarios
 *           content:
 *             application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/User'
 */
router.get('', UserController.GetAll)

export default router
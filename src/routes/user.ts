import { Router } from 'express'
import { UserController } from '../controllers'

const router = Router()

router.get('', UserController.GetAll)

export default router
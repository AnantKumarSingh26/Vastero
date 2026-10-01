import { Router } from 'express'


const router = Router()

router.post('/register',validRegisterUser)

export default router
import { Router } from 'express'
import serversRoutes from './servers.js'
import deploymentsRoutes from './deployments.js'
import backupsRoutes from './backups.js'
import dashboardRoutes from './dashboard.js'

const router = Router()

router.use('/servers', serversRoutes)
router.use('/deployments', deploymentsRoutes)
router.use('/backups', backupsRoutes)
router.use('/dashboard', dashboardRoutes)

export default router

import { Router } from 'express'
import axios from 'axios'
import { GeoNamesRouter } from './geonames.routes'
const router = Router()

router.use('/api/v1/geonames', new GeoNamesRouter().routes())


export { router }
import { Router, Request, Response} from 'express'
import axios from 'axios'
export class GeoNamesRouter {
    private router: Router
    constructor() {
        this.router = Router()
    }
    routes(): Router {

        this.router.get('/search-city/:searchCity', async (req: Request, res: Response): Promise<Response | void> => {
            try {
                let searchText = req.params.searchCity
                let maxResult = req.query.maxResult || 5
                let userName = process.env.GEONAME_USER
                let url = `http://api.geonames.org/searchJSON?name_startsWith=${searchText}&maxRows=${maxResult}&username=${userName}`
                const result = await axios.get(url)
                // console.log(result)
                res.status(200).json(result.data)

            } catch (error: any) {
                res.status(500).json({err: error.message})
            }
            

        })

        this.router.get('/reversed', async (req: Request, res: Response): Promise<Response | void> => {
            try {
                let lat = req.query.lat || 0
                let lng = req.query.lng || 0
                let userName = process.env.GEONAME_USER
                const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&cities=cities1000&username=${userName}`
        const result = await axios.get(url)
                // console.log(result)
                res.status(200).json(result.data)

            } catch (error: any) {
                res.status(500).json({err: error.message})
            }
            

        })


        return this.router
    }
}
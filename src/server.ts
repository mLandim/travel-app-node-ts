import { app as server } from './app'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3333
server.listen(port, () => {
    console.log(`Server on at port ${port}`)
})
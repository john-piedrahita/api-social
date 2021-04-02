import {MongoHelper} from "../infrastructure/driver-adapters/helpers/mongo-helper";
import {MONGODB_URI, PORT} from './config/config'

MongoHelper.connect(MONGODB_URI)
    .then(async () => {
        console.log("Connected DB")
        const app = (await import('./config/app')).default
        app.listen(PORT, () => console.log(`Server an running on port: ${PORT}`))
    }).catch(error => {
    console.log(error)
})
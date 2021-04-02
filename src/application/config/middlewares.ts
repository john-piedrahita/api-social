import {Express} from "express";
import {bodyParser} from "../middlewares/body-parser";
import {contentType} from "../middlewares/content-type";

export default (app: Express): void => {
    app.use(bodyParser)
    app.use(contentType)
}
import {HttpRequest, HttpResponse} from "../../helpers/http";

export interface IController {
    handle: (request: HttpRequest) => Promise<HttpResponse>
}
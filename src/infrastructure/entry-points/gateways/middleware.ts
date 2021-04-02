import {HttpResponse} from "../../helpers/http";

export interface IMiddleware<T = any>  {
    handle: (httpRequest: T) => Promise<HttpResponse>
}
import * as http from "http";
import type HttpMethod from "./http-method.type";

/** More strictly typed analog of `http.METHODS` */
export const methods: ReadonlySet<HttpMethod> = new Set(http.METHODS as HttpMethod[]);

export default methods;

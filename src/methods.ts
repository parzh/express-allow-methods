import * as http from "http";
import type HttpMethod from "./http-method.type";

/** More strictly typed analog of `http.METHODS` */
export const METHODS = http.METHODS as readonly HttpMethod[];

export default METHODS;

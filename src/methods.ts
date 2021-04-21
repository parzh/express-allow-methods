import * as http from "http";
import type HttpMethod from "./http-method.type";

/** @public */
const methods: ReadonlySet<HttpMethod> = new Set(http.METHODS as HttpMethod[]);

export default methods;

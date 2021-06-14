import type { RequestHandler } from "express";
import type HttpMethod from "./http-method.type";
import knownMethods from "./methods";
import hint from "./hint.impl";

export { default as HttpMethod } from "./http-method.type";

/** @deprecated Use `HttpMethod` instead */
export type NodeHttpMethod = HttpMethod;

export { default as ExpressHttpMethod } from "./express-http-method.type";

// TODO: export default function allowMethods(...methods: HttpMethod[]): RequestHandler;
// TODO: export default function allowMethods(config: AllowMethodsConfig): RequestHandler;

export default function allowMethods(...methods: HttpMethod[]): RequestHandler {
	const set = new Set(methods);

	for (const method of set)
		if (!knownMethods.has(method))
			throw new Error(`Unknown HTTP method encountered: "${method}"` + hint(method));

	const headers = {
		Allow: Array.from(set).join(", "),
	} as const;

	return (req, res, next) => {
		if (set.has(req.method as HttpMethod))
			return next();

		res.header(headers).sendStatus(405);
	};
}

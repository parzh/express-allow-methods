import type { RequestHandler } from "express";
import type HttpMethod from "./http-method.type";
import methods from "./methods";

/** @private */
const knownMethods = new Set(methods);

// TODO: export default function allowMethods(...methods: HttpMethod[]): RequestHandler;

// TODO: export default function allowMethods(config: AllowMethodsConfig): RequestHandler;

export default function allowMethods(...methods: HttpMethod[]): RequestHandler {
	const set = new Set(methods);

	for (const method of set)
		if (!knownMethods.has(method))
			throw new Error(`Unknown HTTP method encountered: "${method}"`);

	const headers = {
		Allow: Array.from(set),
	} as const;

	return (req, res, next) => {
		if (set.has(req.method as HttpMethod))
			return next();

		res.header(headers).sendStatus(405);
	};
}

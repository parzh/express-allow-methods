/**
 * @public
 * All the methods that are listed in Node.JS's `require("http").METHODS` (as of Node.JS v16.0.0).
 * See [Node.JS's source code](https://github.com/nodejs/node/blob/bfee9daaa59d8b7598e588ac3e75b690378d3dfb/deps/llhttp/include/llhttp.h#L121-L168) and a [unit test file](https://github.com/nodejs/node/blob/bfee9daaa59d8b7598e588ac3e75b690378d3dfb/test/parallel/test-http-methods.js#L30-L66) on GitHub for reference.
 */
namespace HttpMethod {
	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) */
	export type GET = "GET";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) */
	export type POST = "POST";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) */
	export type PUT = "PUT";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) */
	export type PATCH = "PATCH";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE) */
	export type DELETE = "DELETE";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) */
	export type HEAD = "HEAD";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) */
	export type OPTIONS = "OPTIONS";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT) */
	export type CONNECT = "CONNECT";

	/** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE) */
	export type TRACE = "TRACE";

	// ***

	export type ACL = "ACL";
	export type BIND = "BIND";
	export type CHECKOUT = "CHECKOUT";
	export type COPY = "COPY";
	export type LINK = "LINK";
	export type LOCK = "LOCK";
	export type MERGE = "MERGE";
	export type MKACTIVITY = "MKACTIVITY";
	export type MKCALENDAR = "MKCALENDAR";
	export type MKCOL = "MKCOL";
	export type MOVE = "MOVE";
	export type NOTIFY = "NOTIFY";
	export type PRI = "PRI";
	export type PROPFIND = "PROPFIND";
	export type PROPPATCH = "PROPPATCH";
	export type PURGE = "PURGE";
	export type REBIND = "REBIND";
	export type REPORT = "REPORT";
	export type SEARCH = "SEARCH";
	export type SOURCE = "SOURCE";
	export type SUBSCRIBE = "SUBSCRIBE";
	export type UNBIND = "UNBIND";
	export type UNLINK = "UNLINK";
	export type UNLOCK = "UNLOCK";
	export type UNSUBSCRIBE = "UNSUBSCRIBE";
}

type HttpMethod =
	| HttpMethod.GET
	| HttpMethod.POST
	| HttpMethod.PUT
	| HttpMethod.PATCH
	| HttpMethod.DELETE
	| HttpMethod.HEAD
	| HttpMethod.OPTIONS
	| HttpMethod.CONNECT
	| HttpMethod.TRACE

	// ***

	| HttpMethod.ACL
	| HttpMethod.BIND
	| HttpMethod.CHECKOUT
	| HttpMethod.COPY
	| HttpMethod.LINK
	| HttpMethod.LOCK
	| HttpMethod.MERGE
	| HttpMethod.MKACTIVITY
	| HttpMethod.MKCALENDAR
	| HttpMethod.MKCOL
	| HttpMethod.MOVE
	| HttpMethod.NOTIFY
	| HttpMethod.PRI
	| HttpMethod.PROPFIND
	| HttpMethod.PROPPATCH
	| HttpMethod.PURGE
	| HttpMethod.REBIND
	| HttpMethod.REPORT
	| HttpMethod.SEARCH
	| HttpMethod.SOURCE
	| HttpMethod.SUBSCRIBE
	| HttpMethod.UNBIND
	| HttpMethod.UNLINK
	| HttpMethod.UNLOCK
	| HttpMethod.UNSUBSCRIBE
	;

export default HttpMethod;

import type HttpMethod from "./http-method.type";
import knownMethods from "./methods";

/** @internal */
export default function hint(method: string): string {
	let hint = "";

	if_wrong_case: {
		const uppercase = method.toUpperCase() as HttpMethod;

		if (knownMethods.has(uppercase))
			hint = `Did you mean "${uppercase}"?`;
	}

	return hint && (" " + hint);
}

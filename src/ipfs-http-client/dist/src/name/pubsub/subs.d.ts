/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>} NamePubsubAPI
 */
export const createSubs: import("../../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<string[]>>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type NamePubsubAPI = import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>;
//# sourceMappingURL=subs.d.ts.map
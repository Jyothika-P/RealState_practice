/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>} PubsubAPI
 */
export const createLs: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string[]>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type PubsubAPI = import('ipfs-core-types/src/pubsub').API<HTTPClientExtraOptions>;
//# sourceMappingURL=ls.d.ts.map
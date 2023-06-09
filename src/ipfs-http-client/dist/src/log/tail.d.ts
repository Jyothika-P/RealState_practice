/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>} LogAPI
 */
export const createTail: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<any>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type LogAPI = import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>;
//# sourceMappingURL=tail.d.ts.map
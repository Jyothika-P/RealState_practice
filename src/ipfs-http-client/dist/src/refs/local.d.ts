/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/refs').API<HTTPClientExtraOptions>} RefsAPI
 */
export const createLocal: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type RefsAPI = import('ipfs-core-types/src/refs').API<HTTPClientExtraOptions>;
//# sourceMappingURL=local.d.ts.map
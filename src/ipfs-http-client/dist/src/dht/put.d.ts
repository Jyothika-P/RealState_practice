/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 */
export const createPut: import("../lib/configure.js").Factory<(key: string | Uint8Array, value: Uint8Array, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DHTAPI = import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>;
//# sourceMappingURL=put.d.ts.map
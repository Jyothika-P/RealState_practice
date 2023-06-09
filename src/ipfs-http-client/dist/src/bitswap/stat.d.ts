/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>} BitswapAPI
 */
export const createStat: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/bitswap").Stats>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type BitswapAPI = import('ipfs-core-types/src/bitswap').API<HTTPClientExtraOptions>;
//# sourceMappingURL=stat.d.ts.map
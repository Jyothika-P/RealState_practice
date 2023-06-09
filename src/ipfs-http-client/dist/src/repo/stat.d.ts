/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>} RepoAPI
 */
export const createStat: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/repo").StatResult>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type RepoAPI = import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>;
//# sourceMappingURL=stat.d.ts.map
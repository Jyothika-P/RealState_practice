/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>} RepoAPI
 */
export const createVersion: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<number>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type RepoAPI = import('ipfs-core-types/src/repo').API<HTTPClientExtraOptions>;
//# sourceMappingURL=version.d.ts.map
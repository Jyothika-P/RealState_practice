/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>} KeyAPI
 */
export const createList: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/key").Key[]>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type KeyAPI = import('ipfs-core-types/src/key').API<HTTPClientExtraOptions>;
//# sourceMappingURL=list.d.ts.map
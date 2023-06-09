/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */
export const createGetAll: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config").Config>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type ConfigAPI = import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>;
//# sourceMappingURL=get-all.d.ts.map
/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */
export const createGet: import("../lib/configure.js").Factory<(key: string, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<string | object>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type ConfigAPI = import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>;
//# sourceMappingURL=get.d.ts.map
/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */
export const createSet: import("../lib/configure.js").Factory<(key: string, value: any, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type ConfigAPI = import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>;
//# sourceMappingURL=set.d.ts.map
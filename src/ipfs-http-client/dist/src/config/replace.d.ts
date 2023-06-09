/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>} ConfigAPI
 */
export const createReplace: import("../lib/configure.js").Factory<(config: import("ipfs-core-types/src/config").Config, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type ConfigAPI = import('ipfs-core-types/src/config').API<HTTPClientExtraOptions>;
//# sourceMappingURL=replace.d.ts.map
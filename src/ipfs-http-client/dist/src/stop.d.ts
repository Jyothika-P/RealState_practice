/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */
export const createStop: import("./lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("./types").HTTPClientExtraOptions) | undefined) => Promise<void>>;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=stop.d.ts.map
/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */
export const createVersion: import("./lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("./types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/root").VersionResult>>;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=version.d.ts.map
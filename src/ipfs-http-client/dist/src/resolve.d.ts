/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */
export const createResolve: import("./lib/configure.js").Factory<(name: string, options?: (import("ipfs-core-types/src/root").ResolveOptions & import("./types").HTTPClientExtraOptions) | undefined) => Promise<string>>;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=resolve.d.ts.map
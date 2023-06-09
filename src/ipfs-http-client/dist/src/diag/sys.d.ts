/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>} DiagAPI
 */
export const createSys: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<any>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DiagAPI = import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>;
//# sourceMappingURL=sys.d.ts.map
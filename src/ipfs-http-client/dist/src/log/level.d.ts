/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>} LogAPI
 */
export const createLevel: import("../lib/configure.js").Factory<(subsystem: string, level: string, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<any>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type LogAPI = import('ipfs-core-types/src/log').API<HTTPClientExtraOptions>;
//# sourceMappingURL=level.d.ts.map
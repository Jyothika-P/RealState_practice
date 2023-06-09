/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>} DAGAPI
 */
export const createExport: import("../lib/configure.js").Factory<(root: import("multiformats").CID<unknown, number, number, import("multiformats").Version>, options?: (import("ipfs-core-types/src/dag").ExportOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<Uint8Array>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DAGAPI = import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>;
//# sourceMappingURL=export.d.ts.map
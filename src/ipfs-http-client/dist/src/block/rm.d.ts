/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>} BlockAPI
 * @typedef {import('ipfs-core-types/src/block').RmResult} RmResult
 */
export const createRm: import("../lib/configure.js").Factory<(cid: CID<unknown, number, number, import("multiformats/cid").Version> | CID<unknown, number, number, import("multiformats/cid").Version>[], options?: (import("ipfs-core-types/src/block").RmOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/block").RmResult>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type BlockAPI = import('ipfs-core-types/src/block').API<HTTPClientExtraOptions>;
export type RmResult = import('ipfs-core-types/src/block').RmResult;
//# sourceMappingURL=rm.d.ts.map
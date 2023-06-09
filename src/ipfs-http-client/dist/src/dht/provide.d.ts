/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>} DHTAPI
 * @typedef {import('multiformats/cid').CID} CID
 */
export const createProvide: import("../lib/configure.js").Factory<(cid: import("multiformats/cid").CID<unknown, number, number, import("multiformats/cid").Version>, options?: (import("ipfs-core-types/src/dht").DHTProvideOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DHTAPI = import('ipfs-core-types/src/dht').API<HTTPClientExtraOptions>;
export type CID = import('multiformats/cid').CID;
//# sourceMappingURL=provide.d.ts.map
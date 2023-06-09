export function createGet(codecs: import('ipfs-core-utils/multicodecs').Multicodecs, options: import('../types').Options): (cid: import("multiformats").CID<unknown, number, number, import("multiformats").Version>, options?: (import("ipfs-core-types/src/dag").GetOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/dag").GetResult>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DAGAPI = import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>;
//# sourceMappingURL=get.d.ts.map
export function createPut(codecs: import('ipfs-core-utils/multicodecs').Multicodecs, options: import('../types').Options): (node: any, options?: (import("ipfs-core-types/src/dag").PutOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<CID<unknown, number, number, import("multiformats/cid").Version>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DAGAPI = import('ipfs-core-types/src/dag').API<HTTPClientExtraOptions>;
//# sourceMappingURL=put.d.ts.map
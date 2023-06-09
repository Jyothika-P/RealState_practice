export function createPut(codecs: import('ipfs-core-utils/multicodecs').Multicodecs, options: import('../types').Options): (obj: import("@ipld/dag-pb/dist/src/interface.js").PBNode, options?: (import("ipfs-core-types/src/object").PutOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("multiformats").CID<unknown, number, number, import("multiformats").Version>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type ObjectAPI = import('ipfs-core-types/src/object').API<HTTPClientExtraOptions>;
//# sourceMappingURL=put.d.ts.map
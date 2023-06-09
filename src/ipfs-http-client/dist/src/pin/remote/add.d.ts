/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */
/**
 * @param {import('../../lib/core').Client} client
 */
export function createAdd(client: import('../../lib/core').Client): (cid: import("multiformats").CID<unknown, number, number, import("multiformats").Version>, options: import("ipfs-core-types/src/pin/remote").AddOptions & import("ipfs-core-types").AbortOptions & import("../../types").HTTPClientExtraOptions) => Promise<import("ipfs-core-types/src/pin/remote").Pin>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type RemotePiningAPI = import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>;
//# sourceMappingURL=add.d.ts.map
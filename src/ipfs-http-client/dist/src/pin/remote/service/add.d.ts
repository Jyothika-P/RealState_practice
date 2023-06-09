/**
 * @typedef {import('../../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>} RemotePiningServiceAPI
 */
/**
 * @param {import('../../../lib/core').Client} client
 */
export function createAdd(client: import('../../../lib/core').Client): (name: string, credentials: import("ipfs-core-types/src/pin/remote/service").Credentials & import("ipfs-core-types").AbortOptions & import("../../../types").HTTPClientExtraOptions) => Promise<void>;
export type HTTPClientExtraOptions = import('../../../types').HTTPClientExtraOptions;
export type RemotePiningServiceAPI = import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>;
//# sourceMappingURL=add.d.ts.map
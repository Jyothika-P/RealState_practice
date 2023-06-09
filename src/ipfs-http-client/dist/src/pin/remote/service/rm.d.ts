/**
 * @typedef {import('../../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>} RemotePiningServiceAPI
 */
/**
 * @param {import('../../../lib/core').Client} client
 */
export function createRm(client: import('../../../lib/core').Client): (name: string, options?: (import("ipfs-core-types").AbortOptions & import("../../../types").HTTPClientExtraOptions) | undefined) => Promise<void>;
export type HTTPClientExtraOptions = import('../../../types').HTTPClientExtraOptions;
export type RemotePiningServiceAPI = import('ipfs-core-types/src/pin/remote/service').API<HTTPClientExtraOptions>;
//# sourceMappingURL=rm.d.ts.map
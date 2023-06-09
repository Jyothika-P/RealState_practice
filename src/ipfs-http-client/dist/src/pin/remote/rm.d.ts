/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>} RemotePiningAPI
 */
/**
 * @param {import('../../lib/core').Client} client
 */
export function createRm(client: import('../../lib/core').Client): (query: import("ipfs-core-types/src/pin/remote").Query & import("ipfs-core-types").AbortOptions & import("../../types").HTTPClientExtraOptions) => Promise<void>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type RemotePiningAPI = import('ipfs-core-types/src/pin/remote').API<HTTPClientExtraOptions>;
//# sourceMappingURL=rm.d.ts.map
/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */
export const createAddrs: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/swarm").AddrsResult[]>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type SwarmAPI = import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>;
//# sourceMappingURL=addrs.d.ts.map
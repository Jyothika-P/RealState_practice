/**
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 */
export const createPing: import("./lib/configure.js").Factory<(peerId: import("@libp2p/interface-peer-id").PeerId, options?: (import("ipfs-core-types/src/root").PingOptions & import("./types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/root").PingResult>>;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
//# sourceMappingURL=ping.d.ts.map
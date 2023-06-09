/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>} NamePubsubAPI
 */
export const createCancel: import("../../lib/configure.js").Factory<(name: string, options?: (import("ipfs-core-types").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/name/pubsub").PubsubCancelResult>>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type NamePubsubAPI = import('ipfs-core-types/src/name/pubsub').API<HTTPClientExtraOptions>;
//# sourceMappingURL=cancel.d.ts.map
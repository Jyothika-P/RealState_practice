/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>} ConfigProfilesAPI
 */
export const createList: import("../../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config/profiles").Profile[]>>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type ConfigProfilesAPI = import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>;
//# sourceMappingURL=list.d.ts.map
/**
 * @typedef {import('../../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>} ConfigProfilesAPI
 */
export const createApply: import("../../lib/configure.js").Factory<(name: string, options?: (import("ipfs-core-types/src/config/profiles").ProfilesApplyOptions & import("../../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/config/profiles").ProfilesApplyResult>>;
export type HTTPClientExtraOptions = import('../../types').HTTPClientExtraOptions;
export type ConfigProfilesAPI = import('ipfs-core-types/src/config/profiles').API<HTTPClientExtraOptions>;
//# sourceMappingURL=apply.d.ts.map
/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>} DiagAPI
 */
export const createCmds: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<import("ipfs-core-types/src/diag").CmdsResult[]>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type DiagAPI = import('ipfs-core-types/src/diag').API<HTTPClientExtraOptions>;
//# sourceMappingURL=cmds.d.ts.map
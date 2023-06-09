/**
 * @typedef {import('ipfs-utils/src/types').ProgressFn} IPFSUtilsHttpUploadProgressFn
 * @typedef {import('ipfs-core-types/src/root').AddProgressFn} IPFSCoreAddProgressFn
 * @typedef {import('./types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>} RootAPI
 * @typedef {import('ipfs-core-types/src/root').AddResult} AddResult
 */
export const createAddAll: import("./lib/configure.js").Factory<(source: import("ipfs-core-types/src/utils.js").ImportCandidateStream, options?: (import("ipfs-core-types/src/root").AddAllOptions & import("ipfs-core-types").AbortOptions & import("./types").HTTPClientExtraOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>>;
export type IPFSUtilsHttpUploadProgressFn = import('ipfs-utils/src/types').ProgressFn;
export type IPFSCoreAddProgressFn = import('ipfs-core-types/src/root').AddProgressFn;
export type HTTPClientExtraOptions = import('./types').HTTPClientExtraOptions;
export type RootAPI = import('ipfs-core-types/src/root').API<HTTPClientExtraOptions>;
export type AddResult = import('ipfs-core-types/src/root').AddResult;
//# sourceMappingURL=add-all.d.ts.map
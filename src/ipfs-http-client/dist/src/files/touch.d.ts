/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>} FilesAPI
 */
export const createTouch: import("../lib/configure.js").Factory<(ipfsPath: string, options?: (import("ipfs-core-types/src/files").TouchOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<void>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type FilesAPI = import('ipfs-core-types/src/files').API<HTTPClientExtraOptions>;
//# sourceMappingURL=touch.d.ts.map
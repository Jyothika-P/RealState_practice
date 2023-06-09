/**
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
/**
 * Retrieves IPLD Nodes along the `path` that is rooted at `cid`.
 *
 * @param {CID} cid - the CID where the resolving starts
 * @param {string} path - the path that should be resolved
 * @param {import('ipfs-core-utils/multicodecs').Multicodecs} codecs
 * @param {(cid: CID, options?: AbortOptions) => Promise<Uint8Array>} getBlock
 * @param {AbortOptions} [options]
 */
export function resolve(cid: CID, path: string, codecs: import('ipfs-core-utils/multicodecs').Multicodecs, getBlock: (cid: CID, options?: AbortOptions) => Promise<Uint8Array>, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): AsyncGenerator<{
    value: any;
    remainderPath: string;
}, void, unknown>;
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
import { CID } from "multiformats/cid";
//# sourceMappingURL=resolve.d.ts.map
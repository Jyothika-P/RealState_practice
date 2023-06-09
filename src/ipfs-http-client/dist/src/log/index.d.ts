/**
 * @param {import('../types').Options} config
 */
export function createLog(config: import('../types').Options): {
    level: (subsystem: string, level: string, options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<any>;
    ls: (options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<any>;
    tail: (options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => AsyncIterable<any>;
};
//# sourceMappingURL=index.d.ts.map
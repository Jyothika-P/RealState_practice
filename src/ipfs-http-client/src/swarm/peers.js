import { multiaddr } from '@multiformats/multiaddr'
import { configure } from '../lib/configure.js'
import { toUrlSearchParams } from '../lib/to-url-search-params.js'
import { peerIdFromString } from '@libp2p/peer-id'

/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/swarm').API<HTTPClientExtraOptions>} SwarmAPI
 */

export const createPeers = configure(api => {
  /**
   * @type {SwarmAPI["peers"]}
   */
  async function peers (options = {}) {
    const res = await api.post('swarm/peers', {
      signal: options.signal,
      searchParams: toUrlSearchParams(options),
      headers: options.headers
    })

    /** @type {{ Peers: { Peer: string, Addr: string, Muxer?: string, Latency?: string, Streams?: string[], Direction?: 0 | 1 }[] }} */
    const { Peers } = await res.json()

    return (Peers || []).map(peer => {
      return {
        addr: multiaddr(peer.Addr),
        peer: peerIdFromString(peer.Peer),
        muxer: peer.Muxer,
        latency: peer.Latency,
        streams: peer.Streams,
        direction: peer.Direction == null ? undefined : peer.Direction === 0 ? 'inbound' : 'outbound'
      }
    })
  }
  return peers
})

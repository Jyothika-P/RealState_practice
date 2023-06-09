/**
 * @typedef {import('@libp2p/interface-pubsub').Message} Message
 * @typedef {import('@libp2p/interfaces/events').EventHandler<Message>} MessageHandlerFn
 *
 * @typedef {object} Subscription
 * @property {MessageHandlerFn} handler
 * @property {AbortController} controller
 */
export class SubscriptionTracker {
    /** @type {Map<string, Subscription[]>} */
    _subs: Map<string, Subscription[]>;
    /**
     * @param {string} topic
     * @param {MessageHandlerFn} handler
     * @param {AbortSignal} [signal]
     */
    subscribe(topic: string, handler: MessageHandlerFn, signal?: AbortSignal | undefined): AbortSignal;
    /**
     * @param {string} topic
     * @param {MessageHandlerFn} [handler]
     */
    unsubscribe(topic: string, handler?: MessageHandlerFn | undefined): void;
}
export type Message = import('@libp2p/interface-pubsub').Message;
export type MessageHandlerFn = import('@libp2p/interfaces/events').EventHandler<Message>;
export type Subscription = {
    handler: MessageHandlerFn;
    controller: AbortController;
};
//# sourceMappingURL=subscription-tracker.d.ts.map
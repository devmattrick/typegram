/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the
 * user has selected the bot‘s message and tapped ’Reply&#x27;). This can be extremely useful if you want to create
 * user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 */
export default interface ForceReply {
  /**
   * Shows reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply&#x27;
   */
  force_reply: true;

  /**
   * Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are
   * @mentioned in the text of the Message object; 2) if the bot&#x27;s message is a reply (has reply_to_message_id),
   * sender of the original message.
   */
  selective?: boolean;

}

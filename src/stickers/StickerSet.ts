import Sticker from "./Sticker";

/**
 * This object represents a sticker set.
 */
export default interface StickerSet {
  /**
   * Sticker set name
   */
  name: string;

  /**
   * Sticker set title
   */
  title: string;

  /**
   * true, if the sticker set contains masks
   */
  contains_masks: boolean;

  /**
   * List of all set stickers
   */
  stickers: Sticker[];

}

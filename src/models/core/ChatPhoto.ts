import * as JT from '@mojotech/json-type-validation';

/**
 * This object represents a chat photo.
 */
export default interface ChatPhoto {
    /**
     * Unique file identifier of small (160x160) chat photo. This file_id can be used only for photo download.
     */
    small_file_id: string;

    /**
     * Unique file identifier of big (640x640) chat photo. This file_id can be used only for photo download.
     */
    big_file_id: string;
}

export const ChatPhotoDecoder: JT.Decoder<ChatPhoto> = JT.object({
    small_file_id: JT.string(),
    big_file_id: JT.string(),
});

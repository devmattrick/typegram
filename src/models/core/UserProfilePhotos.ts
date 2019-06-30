import * as JT from '@mojotech/json-type-validation';

import PhotoSize, { PhotoSizeDecoder } from './PhotoSize';

/**
 * This object represent a user's profile pictures.
 */
export default interface UserProfilePhotos {
    /**
     * Total number of profile pictures the target user has
     */
    total_count: number;

    /**
     * Requested profile pictures (in up to 4 sizes each)
     */
    photos: PhotoSize[][];
}

export const UserProfilePhotosDecoder: JT.Decoder<
    UserProfilePhotos
> = JT.object({
    total_count: JT.number(),
    photos: JT.array(JT.array(PhotoSizeDecoder)),
});

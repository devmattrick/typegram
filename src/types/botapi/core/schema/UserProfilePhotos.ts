/* Generated for Telegram Bot API 4.6 */

import { Schema } from '../../utils';
import PhotoSize from './PhotoSize';

/**
 * This object represent a user's profile pictures.
 */
export default interface UserProfilePhotos extends Schema {
    /**
     * Total number of profile pictures the target user has
     */
    total_count: number;

    /**
     * Requested profile pictures (in up to 4 sizes each)
     */
    photos: PhotoSize[][];
}

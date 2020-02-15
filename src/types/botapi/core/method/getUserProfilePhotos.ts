/* Generated for Telegram Bot API 4.6 */

import { Method } from '../../utils';

/**
 * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
 */
type GetUserProfilePhotos = Method<
    'getUserProfilePhotos',
    {
        /**
         * Unique identifier of the target user
         */
        user_id: number;
        /**
         * Sequential number of the first photo to be returned. By default, all photos are returned.
         */
        offset?: number;
        /**
         * Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
         */
        limit?: number;
    },
    unknown
>;

export default GetUserProfilePhotos;

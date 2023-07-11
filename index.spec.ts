import { createTweetStorm } from './index';

describe('createTweetStorm', () => {
    it('should split the text into tweets with correct pagination', () => {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat arcu, non interdum massa consequat id.';
        const expectedTweets = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consequat arcu, non interdum massa consequat id. 1/1"
        ];

        const tweets = createTweetStorm(text);

        expect(tweets).toEqual(expectedTweets);
    });

    it('should handle text shorter than maxLength', () => {
        const text = 'Short text.';
        const expectedTweets = ["Short text. 1/1"];

        const tweets = createTweetStorm(text);

        expect(tweets).toEqual(expectedTweets);
    });

    it('should handle empty text', () => {
        const text = '';
        const expectedTweets = [];

        const tweets = createTweetStorm(text);

        expect(tweets).toEqual(expectedTweets);
    });

    it('should calculate the correct pagination', () => {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        const expectedTweets = [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1/1',
        ];

        const tweets = createTweetStorm(text);

        expect(tweets).toEqual(expectedTweets);
    });

    it('should handle text that fits in a single tweet', () => {
        const text = 'Short text that fits in a single tweet.';
        const expectedTweets = ['Short text that fits in a single tweet. 1/1'];

        const tweets = createTweetStorm(text);

        expect(tweets).toEqual(expectedTweets);
    });

});





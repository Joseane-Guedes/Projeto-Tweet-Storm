import { createTweetStorm } from './index';

describe('createTweetStorm', () => {
    it('should split a long text into multiple tweets', () => {
        const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis orci sit amet magna lacinia, sed congue libero ultrices.';
        const expectedTweets = [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis orci sit amet magna lacinia, sed congue libero ultrices. [1/1]"
        ];
        const tweets = createTweetStorm(text);
        expect(tweets).toEqual(expectedTweets);
    });

    it('should split a text shorter than the maximum length into a single tweet', () => {
        const text = 'Short text that fits in a single tweet.';
        const expectedTweets = ['Short text that fits in a single tweet. [1/1]'];
        const tweets = createTweetStorm(text);
        expect(tweets).toEqual(expectedTweets);
    });

    it('should handle empty text', () => {
        const text = '';
        const expectedTweets: string[] = [];
        const tweets = createTweetStorm(text);
        expect(tweets).toEqual(expectedTweets);
    });
});






export function createTweetStorm(text: string): string[] {
    const maxLength = 136; // Considerando o espaço para [PAG]/[TOT]
    const tweets: string[] = [];

    for (let i = 0; i < text.length; i += maxLength) {
        const tweet = text.substring(i, i + maxLength);
        tweets.push(tweet);
    }

    const totalPages = tweets.length;
    const numberedTweets = tweets.map((tweet, index) => `${tweet} [${index + 1}/${totalPages}]`);

    return numberedTweets;
}





export function createTweetStorm(text: string): string[] {
    const maxLength = 140 - 4; // Considerando o espaço para [PAG]/[TOT]
    const tweets: string[] = [];

    while (text.length > maxLength) {
        const tweet = text.substring(0, maxLength);
        text = text.substring(maxLength);

        const pagination = `${tweets.length + 1}/${Math.ceil(text.length / maxLength) + 1}`;
        tweets.push(`${tweet} ${pagination}`);
    }

    if (text.length > 0) {
        const pagination = `${tweets.length + 1}/${tweets.length + 1}`;
        const tweetWithPagination = `${text} ${pagination}`;
        tweets.push(tweetWithPagination);
    }

    return tweets;
}



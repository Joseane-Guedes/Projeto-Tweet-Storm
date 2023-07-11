export function createTweetStorm(text: string): string[] {
    const maxLength = 140 - 4; // Considerando o espaço para [PAG]/[TOT]
    const tweets: string[] = [];

    // Loop para dividir o texto em tweets
    while (text.length > maxLength) {
        const tweet = text.substring(0, maxLength); // Extrai o tweet do início do texto
        text = text.substring(maxLength); // Remove o tweet do texto original

        // Cálculo da paginação do tweet
        const pagination = `${tweets.length + 1}/${Math.ceil(text.length / maxLength) + 1}`;
        tweets.push(`${tweet} ${pagination}`); // Adiciona o tweet com a paginação ao array de tweets
    }

    // Último tweet, caso o texto não caiba completamente em um tweet
    if (text.length > 0) {
        const pagination = `${tweets.length + 1}/${tweets.length + 1}`; // Páginação para o último tweet
        const tweetWithPagination = `${text} ${pagination}`; // Último tweet com a páginação
        tweets.push(tweetWithPagination); // Adiciona o último tweet ao array de tweets
    }

    return tweets; // Retorna o array de tweets
}



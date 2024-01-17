const WORDLIST_API_URL =
    'http://localhost:3000/words/es?complexity=medium&howMany=20'

export type WordElement = {
    word: string
    correct?: boolean
}

export type WordListRepsonse = {
    wordList: WordElement[]
}

// fetch("https://...", { cache: "no-store" });
export const fetchWordlist = async (url?: string) => {
    const wordList: WordListRepsonse = await fetch(url ?? WORDLIST_API_URL, {
        next: { tags: ['wordlist'] },
    }).then((response) => response.json())

    console.log('Data fetch is done', wordList)

    return wordList
}

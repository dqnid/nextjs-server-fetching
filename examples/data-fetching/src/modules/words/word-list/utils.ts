import { WordListRepsonse } from './word-list.types'

const dataURL = 'http://localhost:3000/words/es?complexity=easy&howMany=10'

export async function getStaticProps() {
    const randomWordList = await getRandomWordList();
    return {
        props: { randomWordList }, // will be passed to the page component as props
    }
}

export async function getRandomWordList() {
  const wordList: WordListRepsonse = await fetch(dataURL).then((response) => response.json());
  return wordList;
}

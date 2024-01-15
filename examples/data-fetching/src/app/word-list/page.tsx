import { getRandomWordList } from "@/words/word-list/utils";

const getServerSideProps = async () => {
    const wordList = await getRandomWordList();
    console.log("Data is being fetch...", wordList)
    return { props: { wordList:wordList } }
}

export default async function WordList(){
    const wordList = await getServerSideProps();
    return (
        <div data-testid="word-list-view">
            WordList server props: {JSON.stringify(wordList)}
        </div>
    )
}

import RevalidateButton from './revalidate-button'
import { fetchWordlist } from '../utils'
import { useEffect } from 'react'

export default async function ServerWordList() {
    const response = await fetchWordlist()

    useEffect(() => {
        console.log('Peta?')
    }, [])

    return (
        <div data-testid="word-list-view" className="data-fetching-server">
            <h3>
                Wordlist fetched in the <span>server</span>
            </h3>
            <div>
                {response?.wordList.map((word) => (
                    <span>{word.word}</span>
                ))}
            </div>
            <div>
                <RevalidateButton />
            </div>
        </div>
    )
}

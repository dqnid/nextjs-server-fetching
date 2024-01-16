'use client'

import { useEffect, useState } from 'react'
import { WordListRepsonse, fetchWordlist } from '../utils'

export default function ClientWordList() {
    const [data, setData] = useState<WordListRepsonse>()

    const fetchData = () =>
        fetchWordlist().then((response) => setData(response))

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="data-fetching-client">
            <h3>
                Wordlist fetched in the <span>client</span>
            </h3>
            <div>
                {data?.wordList.map((word) => (
                    <span>{word.word}</span>
                ))}
            </div>
            <div>
                <button onClick={fetchData}>Revalidate!</button>
            </div>
        </div>
    )
}

'use client'

import { useEffect, useState } from 'react'
import { WordListRepsonse, fetchWordlist } from '../utils'

export default function NextAPIWordList() {
    const [data, setData] = useState<WordListRepsonse>()

    const fetchData = () =>
        fetchWordlist('http://localhost:3001/api/wordlist').then((response) =>
            setData(response)
        )

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="data-fetching-client">
            <h3>
                Wordlist fetched in the <span>API</span>
            </h3>
            <div>
                {data?.wordList.map((word) => (
                    <span>{word.word}</span>
                ))}
            </div>
            <div>
                <button onClick={fetchData}>Refetch!</button>
            </div>
        </div>
    )
}

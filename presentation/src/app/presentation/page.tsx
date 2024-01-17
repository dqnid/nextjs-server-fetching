'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Presentation() {
    const [current, setCurrent] = useState<number>(0)

    const stages = [
        <Introduction />,
        <Benefits />,
        <Rendering />,
        <Strategies />,
        <DataFetching />,
    ]

    return (
        <div className="main-presentation">
            {stages[current]}
            <button
                onClick={() =>
                    setCurrent(current + 1 < stages.length ? current + 1 : 0)
                }
            >
                Siguiente
            </button>
        </div>
    )
}

// 1. Introduction
// 2. Rendering strategies.
// 3. Benefits.
// 4. Actual process and why its important to know it.
// 5. Serverside data fetching

function Introduction() {
    return (
        <div className="main-presentation-comparation">
            <h1>
                NEXT<span>.JS</span>
            </h1>
        </div>
    )
}

function Rendering() {
    return (
        <div className="main-presentation-comparation">
            <h3>Rendering</h3>
            <div>
                The rendering works is split into chunks:
                <ul>
                    <li>- By individual route segments </li>
                    <li>- By React with Suspense boundaries </li>
                </ul>
                Each chunk is rendered in the server, then, on the client:
                <ul>
                    <li>
                        1. The HTML is used to immediately show fast preview
                    </li>
                    <li>2. The components are inserted to update the DOM</li>
                    <li>
                        3. JS instructions are used to hydrate client components
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Strategies() {
    return (
        <div className="main-presentation-strategies">
            <h3>Strategies</h3>
            <div>
                <ul>
                    <li>- Static rendering (default)</li>
                    <li>- Dynamic rendering: rendered per user request</li>
                    <li>- Streaming: work is split into chunks and streamed</li>
                </ul>
            </div>
        </div>
    )
}

function Benefits() {
    return (
        <div className="main-presentation-benefits">
            <h3>Benefits</h3>
            <div>
                <ul>
                    <li>- Fetch data directly on the server</li>
                    <li>- Security: sensitive data is kept int the server</li>
                    <li>- Caching</li>
                    <li>- Bundle size reduced</li>
                    <li>- SEO </li>
                    <li>- Streaming</li>
                </ul>
            </div>
        </div>
    )
}

function DataFetching() {
    const router = useRouter()
    router.push('/word-list')
    return <>Redirecting...</>
}

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
            <h3>Next</h3>
            <div>
                <p>Nos da la posibilidad de renderizar desde el servidor</p>
            </div>
        </div>
    )
}

function Rendering() {
    return (
        <div className="main-presentation-comparation">
            <h3>Rendering</h3>
            <div>
                The rendering works is split into chunks: - By individual route
                segments - By React [Suspense
                boundaries](https://react.dev/reference/react/Suspense) (react
                way of having a fallback while a components has finished
                loading) Each chunk is rendered in the server, then, on the
                client: 1. The HTML is used to immediately show fast preview. 2.
                The server components rendered are inserted to update the DOM
                (components rendered in server with placeholders for client
                components and props). 3. `JS` instructions are used to
                [hydrate?](https://react.dev/reference/react-dom/client/hydrateRoot)
                Client Components and make the application interactive.
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
                    <li>
                        - Static rendering (default): Good for static pages:
                        Rendered in build time or in the background after data
                        revalidation
                    </li>
                    <li>
                        - Security: sensitive data is kept int the server (API
                        keys and tokens)
                    </li>
                    <li>
                        - Dynamic rendering: rendered per user request, Next
                        uses this type of rendering automatically when discovers
                        a dynamic function (`cookies()`, `headers()`,
                        `userSearchParams()`).
                    </li>
                    <li>
                        - Streaming: work is split into chunks and streamed as
                        they become ready so the load is progressive.
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Benefits() {
    return (
        <div className="main-presentation-benefits">
            <h3>Beneficios</h3>
            <div>
                <ul>
                    <li>
                        - Fetch data directly on the server, performance and
                        load benefits.
                    </li>
                    <li>
                        - Security: sensitive data is kept int the server (API
                        keys and tokens)
                    </li>
                    <li>
                        - Caching: results can be cached to improve performance
                        between users.
                    </li>
                    <li>
                        - Bundle size: will be reduced as part of the
                        application will reside in the server.
                    </li>
                    <li>
                        - SEO: because the pages will be rendered the search
                        engine bots will make good use of it.
                    </li>
                    <li>
                        - Streaming: to split the rendering into chunks and
                        stream them as they become ready.
                    </li>
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

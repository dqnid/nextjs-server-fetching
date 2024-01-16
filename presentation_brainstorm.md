## Server components [Nextjs docs](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## Presentation flow

0. Comparation between NextJS and React
1. Introduction without strategies.
2. Benefits.
3. Actual process and why its important to know it.
4. Brief introduction to strategies.
5. Serverside data fetching

### Introduction

UI rendered in the server and optionally cached. Split by route segments and 3
strategies:

- Static Rendering (default)
- Dynamic Rendering
- Streaming

### Benefits

- Fetch data directly on the server, performance and load benefits.
- Security: sensitive data is kept int the server (API keys and tokens)
- Caching: results can be cached to improve performance between users.
- Bundle size: will be reduced as part of the application will reside in the
  server.
- SEO: because the pages will be rendered the search engine bots will make good
  use of it.
- Streaming: to split the rendering into chunks and stream them as they become
  ready.

### Process of rendering

The rendering works is split into chunks:

- By individual route segments
- By React [Suspense boundaries](https://react.dev/reference/react/Suspense) (react way of having a fallback while a
  components has finished loading) Each chunk is rendered in the server, then,
  on the client:

1. The HTML is used to immediately show fast preview.
2. The server components rendered are inserted to update the DOM (components
   rendered in server with placeholders for client components and props).
3. `JS` instructions are used to [hydrate?](https://react.dev/reference/react-dom/client/hydrateRoot) Client Components and make the
   application interactive.

### Strategies

- Static rendering (default) -> Good for static pages: Rendered in build time or in the background after data revalidation
- Dynamic rendering: rendered per user request, Next uses this type of rendering automatically when discovers a dynamic function (`cookies()`, `headers()`, `userSearchParams()`).
- Streaming: work is split into chunks and streamed as they become ready so the load is progressive.

### [Fetching data from the server](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#revalidating-data)

To fetch data from the server you only need an `async` component. The data is automatically cached by Next to avoid constant calls to the data source. This means you can omit the cache configuration in your fetch call:

```js
// not needed
fetch("https:...", { cache: "force-cache" });
```

But you can also revalidate on every request:

```js
fetch("https://...", { cache: "no-store" });
```

#### Revalidation

Revalidation is not directly managed but you can force it with:

- A timer:

```js
fetch("https://...", { next: { revalidate: 3600 } });
```

- Manually:

```js
// page.tsx file
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } })
  const data = await res.json()
  // ...
}

// action.ts file
'use server' // cause of the .ts
import { revalidateTag } from 'next/cache'

export default async function action() {
  revalidateTag('collection')
}

```

## Serverside fetching

[Different types](https://wallis.dev/blog/nextjs-serverside-data-fetching)

### GerServerSideProps (async function)

- Automatic cache
- Revalidated either by timeout or forced with tags

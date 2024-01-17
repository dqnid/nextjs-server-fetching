## Next

- Es mas opinionado, es un arquetipo
  - Facilita enrutado, usuarios, etc
- Usado en la empresa como arquetipo
- Objetivo de uso es grandes proyectos JS
- Beneficio por renderizar en servidor
  - En inditex sale siempre como solución
  - Cuidado, hay que saber usarlo

## Benefits

- Fetch data directly on the server: performance and load benefits.
- Security (API keys and tokens)
- Caching: results can be cached to improve performance between users.
- Bundle size: (send to user) will be reduced as part of the application will reside in the
  server.
- SEO: because the pages will be rendered the search engine bots will make good
  use of it.
- Streaming: to split the rendering into chunks and stream them as they become
  ready.

### Process of rendering

The rendering works is split into chunks:

- By individual route segments
- By React [Suspense boundaries] (react way of having a fallback while a
  components has finished loading)

Each chunk is rendered in the server, then, on the client:

1. The HTML is used to immediately show fast preview.
2. The server components rendered are inserted to update the DOM (components
   rendered in server with placeholders for client components and props).
3. `JS` instructions are used to [hydrate?](https://react.dev/reference/react-dom/client/hydrateRoot) Client Components and make the
   application interactive.

### Strategies

- Static rendering (default) -> Good for static pages: Rendered in build time or in the background after data revalidation
- Dynamic rendering: rendered per user request, Next uses this type of rendering automatically when discovers a dynamic function (`cookies()`, `headers()`, `userSearchParams()`).
- Streaming: work is split into chunks and streamed as they become ready so the load is progressive.

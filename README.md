# [Surreal Solid Template](https://github.com/metruzanca/surreal-solid-template)
> Bootstrapped from [Surreal-Solid-Template](https://github.com/metruzanca/surreal-solid-template). More docs included in the repo. This readme is just the TLDR.

## Getting Started

Get the frontend up and running:
```
pnpm install
pnpm dev
```

Get surreal running locally by either:
- [installing it](https://surrealdb.com/install)
- Using the docker compose file included via `docker compose up -d`

## Deploying
- [Frontend via Vercel](https://github.com/metruzanca/surreal-solid-template/blob/main/.github/vercel.md)
- [Surreal via Railway](https://github.com/metruzanca/surreal-solid-template/blob/main/.github/railway.md)

## Common Tasks

- Access the surrealdb shell: `docker compose exec db /surreal sql --db dev --ns dev`
- Seed the database with a surql file: `surreal import --conn http://localhost:8000 --ns dev --db dev db/seed.surql`
- Stop DB without clearing data: `docker compose stop`
- Tear down container, wiping data: `docker compose down`
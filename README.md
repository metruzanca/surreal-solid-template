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

- `pnpm sql`: gives you access to the surrealdb shell for running surql queries
- `pnpm surreal-import`: seeds the database with the contents of `db/seed.surql`
- `docker compose stop`: Stops DB without clearing data
- `docker compose down`: Tears down container, wiping data
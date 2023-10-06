# SolidStart-SurrealDB

Everything you need to build your next project, powered by [`solid-start`](https://start.solidjs.com) & [`surreal-db`](https://surrealdb.com).

This template leans into Surreal's Live queries, with a public read-write db, which is similar to firebase's realtimedb/firestore set to test mode.

Solid is a perfect match for Surreal, since we can easily wrap up surreal inside of a series of signals to be able to consume surreal as if it were a native feature of Solid.

## Creating a project

```bash
# pnpx or npx
pnpx degit metruzanca/surreal-solid-template ss-app
```

### Alternatively, use Github
This is a template repo, you can click "Use this repo" where the "<> Code" button normally sits. Alternatively you can use the github-cli

```
gh repo create my-new-project --public --template metruzanca/surreal-solid-template
```

## Developing

To get started with this template, you'll need to get surreal running. We'd recommend using Docker, but you can also [install it](https://surrealdb.com/install) directly to your machine.

This will setup a docker container.
```bash
docker compose up -d
```

Common tasks are scripts in the `package.json`:
- `pnpm sql`: gives you access to the surrealdb shell for running surql queries
- `pnpm surreal-import`: seeds the database with the contents of `db/seed.surql`

Remember to shutdown your database with:
```bash
docker compose stop # to pause the container
docker compose down # will tear down the container, wiping data
```
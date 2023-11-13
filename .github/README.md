# SolidStart-SurrealDB

Everything you need to build your next project, powered by [`solid-start`](https://start.solidjs.com) & [`surreal-db`](https://surrealdb.com).

This template leans into Surreal's Live queries, with a public read-write db, which is similar to firebase's realtimedb/firestore set to test mode.

Solid is a perfect match for Surreal, since we can easily wrap up surreal inside of a series of signals to be able to consume surreal as if it were a native feature of Solid.

![](.github/example.gif)

## Creating a project

```bash
# pnpx or npx
pnpx degit metruzanca/surreal-solid-template ss-app
```

## Developing

Proceed as normal by running `pnpm install`.

Next up, you'll need to get surreal running. We'd recommend using Docker, but you can also [install it](https://surrealdb.com/install) directly to your machine.

This will setup a docker container.
```bash
docker compose up -d
```

Finally, you can start coding with `pnpm dev`

Common DB tasks are scripts in the `package.json`:
- `pnpm sql`: gives you access to the surrealdb shell for running surql queries
- `pnpm surreal-import`: seeds the database with the contents of `db/seed.surql`

> **Note**
> Remember to shutdown your database with:
> ```bash
> docker compose stop # to pause the container
> docker compose down # will tear down the container, wiping data
> ```

## Resources
- Deploying:


## Contributing
This is a project built for Hacktoberfest 2023. Any is free to contribute or make suggestions on how we can make this template the best for solidstart.

Feel free to open PRs/Issues and I'll have a look at them when I can.

The two main priorities I want to maintain in this template are:
- Solid's signals offer an incredibly powerful API and they're perfect for integrating with the realtime nature of Live Queries. Any opportunity we have to lean into that, and really showcase the pairing the better.
- Simplicity. I don't want to introduce any other libraries. I made this repo to be similar to how `pnpm create solid` gives you templates like "with-tailwind" that has just solid and tailwind. Though I'm think it would be helpful to add some instructions for how to integrate those.
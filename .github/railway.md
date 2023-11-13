# Running a SurrealDB instance on [Railway](https://railway.app)

Running a SurrealDB on Railway is pretty simple, heres what you'll need:

```toml
# railway.toml
[build]
dockerfilePath = "Dockerfile" # case-sensitive
```

```dockerfile
# dockerfile
FROM surrealdb/surrealdb:latest
EXPOSE 8000
CMD ["start", "--bind", "0.0.0.0:8000"]
```

Via the railway control panel for the deployed service, add an ENV var: `PORT` set to `8000`. This tells railway we need to expose the 8000 port.

> Even if you use port 80 or 443, aka default port for http/https, you still need to use the PORT env var to tell railway which port is being used.

If your frontend isn't deployed to railway, you can make your surrealDB publicly accessible under Settings>Networking>Public Networking: Click on "Generate Domain". (Note, that you'll want to enable password authentication)

> You can test that the public domain is working by clicking on it, which should redirect to `https://surrealdb.com/app`.

To get the frontend connected, you'll need to update the surreal URL in [`src/lib/surreal.ts`](../src/lib/surreal.ts)
# Deploying the frontend to Vercel

Install the required dependencies
```
pnpm i solid-start-vercel
```

Setup the Adapter
```diff
// vite.config.ts
+ import vercel from "solid-start-vercel"

export default defineConfig({
  plugins: [
-   solid(),   
+   solid({
+     adapter: vercel()
+   })
  ],
});
```
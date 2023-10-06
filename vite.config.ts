import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  server: {
    // https://vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      "/rpc": {
        target: "ws://localhost:8000",
        ws: true
      }
    }
  }
});

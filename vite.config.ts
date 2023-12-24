
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
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

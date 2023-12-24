import { mount, StartClient } from "@solidjs/start/client";
import { connect } from "~/lib/surreal";
await connect();

mount(() => <StartClient />, document.getElementById("app"));

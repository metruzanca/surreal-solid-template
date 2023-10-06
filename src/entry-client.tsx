import { mount, StartClient } from "solid-start/entry-client";
import { connect } from "~/lib/surreal";
await connect();

mount(() => <StartClient />, document);

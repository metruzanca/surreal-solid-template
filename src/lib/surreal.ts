import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { Surreal } from 'surrealdb.js';
export const db = new Surreal();

const RAILWAY = 'https://YOUR_PUBLIC_URL/rpc'
const DOCKER_LOCAL = 'http://localhost:8000/rpc'

// https://surrealdb.com/docs/integration/sdks/javascript#connect
export const connect = async () => db.connect(DOCKER_LOCAL, {
  namespace: 'dev',
  database: 'dev',
});

type PartialKey<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export function useLiveQuery<T extends Record<string, unknown>>(
  thing: string,
) {
  const [things, setThings] = createSignal<T[]>([]);
  const [queryUuid, setQueryUuid] = createSignal<string>();

  onMount(async () => {
    // https://surrealdb.com/docs/integration/sdks/javascript#select
    const things = await db.select<T>(thing);
    setThings(things)
  })

  createEffect(async () => {
    // https://surrealdb.com/docs/integration/sdks/javascript#live
    const queryId = await db.live<T>(thing, ({ action, result }) => {
      console.log(`New ${action} for ${thing}`, result);

      switch (action) {
        case "CLOSE": return;
        case "CREATE": return setThings(items => [...items, result as T]);
        case "DELETE": return setThings(items => items.filter(
          item => item.id !== result // result for DELETE is a string
        ));
        case "UPDATE": return setThings(items => items.map(
          item => item.id === result.id ? result as T : item
        ));
      }
    })
    setQueryUuid(queryId)
  })

  onCleanup(async () => {
    const uuid = queryUuid()
    if (uuid) {
      // https://surrealdb.com/docs/integration/sdks/javascript#kill
      await db.kill(uuid)
    }
  })

  const create = async (item: PartialKey<T, 'id'>) => {
    // https://surrealdb.com/docs/integration/sdks/javascript#create
    await db.create(thing, item);
  }

  const merge = async (thing: string, item: Partial<T>) => {
    // https://surrealdb.com/docs/integration/sdks/javascript#merge
    await db.merge(thing, item);
  }

  const remove = async (thing: string) => {
    // https://surrealdb.com/docs/integration/sdks/javascript#delete
    await db.delete(thing);
  }

  return [things, { merge, create, remove }] as const;
}

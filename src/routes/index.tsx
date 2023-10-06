import { For } from "solid-js";
import { Title } from "solid-start";
import { TodoForm, TodoItem } from "~/lib/components";
import { Todo } from "~/lib/types";
import { useLiveQuery } from "~/lib/surreal";

export default function Home() {
  const [todos, { create, merge, remove }] = useLiveQuery<Todo>('todo');

  return (
    <main>
      <Title>Hello World</Title>
      <h1>
        <span>Solid</span>
        &nbsp;
        <span style={{ color: '#fc00a0' }}>Surreal</span>
      </h1>

      <p>
        Visit the documentation to learn how to get started:
        <a
          href="https://start.solidjs.com"
          target="_blank"
          textContent={'start.solidjs.com'}
        />,&nbsp;
        <a
          href="https://surrealDB.com"
          target="_blank"
          textContent={'SurrealDB'}
        />
      </p>

      <div>
        <TodoForm
          // disabled={ready()}
          onSubmit={todo => create({
            name: todo.name,
            completed: false
          })}
        />

        <For each={todos()}>
          {item => (
            <TodoItem
              item={item}
              onToggle={id => merge(id, { completed: !item.completed })}
              onRemove={id => remove(id)}
            />
          )}
        </For>
      </div>
    </main>
  );
}

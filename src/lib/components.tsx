import { Component } from "solid-js";
import { Todo } from "./types";

export const TodoItem: Component<{
  item: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}> = (props) => (
  <div>
    <input
      type="checkbox"
      checked={props.item.completed}
      onChange={() => props.onToggle(props.item.id)}
    />
    <span>{props.item.name}</span>
    {props.item.completed && (
      <span
        style={{ color: 'red', cursor: 'pointer', 'margin-left': '.5em' }}
        onClick={() => props.onRemove(props.item.id)}
      >
        X
      </span>
    )}
  </div>
)

export const TodoForm: Component<{
  onSubmit: (todo: Pick<Todo, 'name'>) => void;
  disabled?: boolean;
}> = (props) => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const input = form.elements.namedItem('todo') as HTMLInputElement;
    if (!input.value) return

    props.onSubmit({
      name: input.value,
    })
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Buy Milk"
          disabled={props.disabled}
        />
      </label>
      <button type="submit" disabled={props.disabled}>Add</button>
    </form>
  )
}
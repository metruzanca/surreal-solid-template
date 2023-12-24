import { Component } from "solid-js";
import { Todo } from "./TodoItem";

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
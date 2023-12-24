import { Component } from "solid-js";

export type Todo = {
  id: string
  name: string
  completed?: boolean
}

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


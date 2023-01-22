import { createSignal } from "solid-js";
import { customElement } from "solid-element";

customElement("my-counter", () => {
  const [count, setCount] = createSignal(0);
  const minus = () => setCount(count() - 1)
  const plus = () => setCount(count() + 1)
  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </div>
  );
});

import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: 12 }}>
      <h3>{props.cno ?? 'Redux'} : Global State (Redux) Count: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })} style={{ marginRight: 8 }}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease
      </button>
    </div>
  );
}

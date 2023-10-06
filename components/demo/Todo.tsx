import { memo } from "react";

const Todos = ({ todos, addTodo }: {todos: any, addTodo: any}) => {
  console.log("Todos rendered");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo: any, index: number) => {
        return <p key={index}>{todo}</p>;
      })}
      <button className="btn" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default memo(Todos);
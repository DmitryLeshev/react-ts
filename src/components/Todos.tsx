import React, { useRef } from "react";
import { useActions } from "../hooks/useActions";
import useScroll from "../hooks/useScroll";
import { useTypedSelector } from "../hooks/useTypesSelector";

export const Todos: React.FC = () => {
  // eslint-disable-next-line
  const { error, loading, todos } = useTypedSelector((state) => state.todos);
  const { fetchTodos } = useActions();
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line
  const intersected = useScroll({
    parentRef,
    childRef,
    callback: fetchTodos,
  });

  // if (loading) return <h2>Идёт загрузка... </h2>;
  if (error) return <h2>Ошибка</h2>;

  return (
    <div
      ref={parentRef}
      style={{ height: "80vh", overflow: "auto", minWidth: 400 }}
    >
      {todos &&
        todos.map((el: { id: number; title: string }) => (
          <div
            key={el.id}
            style={{ margin: 8, padding: 24, border: `1px solid black` }}
          >
            #{el.id} - {el.title}
          </div>
        ))}
      <div ref={childRef} style={{ border: `2px solid green` }} />
    </div>
  );
};

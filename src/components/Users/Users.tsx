import React, { useEffect } from "react";
import { useActions, useTypedSelector } from "../../hooks";

export const Users: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) return <h2>Идёт загрузка... </h2>;
  if (error) return <h2>Ошибка</h2>;

  return (
    <div style={{ height: "80vh", overflow: "auto", minWidth: 400 }}>
      {users &&
        users.map((el) => (
          <div
            key={el.id}
            style={{ margin: 8, padding: 24, border: `1px solid black` }}
          >
            #{el.id} - {el.name}
          </div>
        ))}
    </div>
  );
};

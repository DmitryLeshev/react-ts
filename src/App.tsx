import React from "react";
import { Users } from "./shared/Users";
import { Todos } from "./shared/Todos";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Users />
      <Todos />
    </div>
  );
};

export default App;

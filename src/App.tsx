import React from "react";
import { Users } from "./components/Users";
import { Todos } from "./components/Todos";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Users />
      <Todos />
    </div>
  );
};

export default App;

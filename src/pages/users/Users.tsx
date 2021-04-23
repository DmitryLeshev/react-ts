import React, { useEffect } from "react";
import api from "../../services/api/buildAPI";
// import axios from "axios";

export default () => {
  const show = async () => {
    const svg = await api.render("Rect1");
    const output: any = document.getElementById("output");
    output.innerHTML = svg;
  };

  const scenario = async () => {
    await api.rect("Rect1", -10, 10, 10, -10);
    await api.move("Rect1", 5, 5);
    await api.rotate("Rect1", 5);
    const data = await api.read("Rect1");
    console.dir({ data });
    await show();
  };

  useEffect(() => {
    // axios.get("/api/method2").then((res) => console.log(res.data));
    scenario();
  }, [scenario]);

  return (
    <div>
      <button onClick={scenario}>Move</button>
      <div id="output"></div>
    </div>
  );
};

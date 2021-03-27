import React, { ChangeEvent, useEffect, useRef } from "react";
import { Button } from "../../ui";
import "./Card.css";

export default () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  function handlerClick(e: Event) {
    inputRef.current?.click();
  }

  function handlerChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("handlerChange");
    const files = e.target.files;
    console.log(files);

    const reader = new FileReader();
    console.log(reader);

    // reader.readAsDataURL()
  }
  return (
    <div className="card">
      <input
        ref={inputRef}
        id="file"
        type="file"
        accept="image/*"
        multiple
        onChange={handlerChange}
      />
      <Button onClick={handlerClick}>Открыть</Button>
      <Button classes="primary">Загрузить</Button>
    </div>
  );
};

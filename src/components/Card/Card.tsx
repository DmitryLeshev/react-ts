import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { bytesToSize } from "../../lib";
import { Button } from "../../ui";
import "./Card.css";

import api from "../../api";

export default () => {
  const [imgs, setImgs] = useState<Array<string>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, []);

  function handlerClick(e: Event) {
    inputRef.current?.click();
  }

  function handlerChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return;

    const files = e.target.files;

    setImgs([]);

    Array.from(files).forEach((file) => {
      if (!file.type.match("image")) return;

      const reader = new FileReader();

      console.log(bytesToSize(file.size));

      reader.onload = (e: any) => {
        setImgs((prev) => [...prev, e.target.result]);
      };

      reader.readAsDataURL(file);
    });
  }

  async function downloadFile() {
    const response = await api.users.getAll();
    console.log(response);
  }

  async function getAllFile() {
    const response = await api.files.getAll();
    console.log(response);
  }

  async function getOneFile() {
    const response = await api.files.getOne({ id: 5 });
    setImgs((prev) => [...prev, response]);
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
      <Button classes="primary" onClick={downloadFile}>
        Загрузить
      </Button>

      <Button classes="primary" onClick={getAllFile}>
        getAllFile
      </Button>

      <Button classes="primary" onClick={getOneFile}>
        getOneFile
      </Button>

      <br />

      {imgs.length ? (
        <div className="preview">
          {imgs.map((src, idx) => (
            <div key={idx} className="preview__image">
              <span className="preview__remove" />
              <img src={`data:image/png;base64, ${src}`} alt="img" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

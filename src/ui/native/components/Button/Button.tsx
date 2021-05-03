import React, { MouseEvent } from "react";

interface Props {
  children: React.ReactNode;
  classes?: string;
  onClick?: any;
}

// eslint-disable-next-line
export default (props: Props) => {
  const { children, classes, onClick } = props;
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    onClick(event);
  }
  return (
    <button className={`btn ${classes || null}`} onClick={handleClick}>
      {children}
    </button>
  );
};

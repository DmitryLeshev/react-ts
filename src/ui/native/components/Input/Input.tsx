import React from "react";

// eslint-disable-next-line
export default (props: any) => {
  const { ...args } = props;
  return <input {...args} />;
};

import React from "react";
import { Color, ColorChangeHandler, SketchPicker } from "react-color";

interface Props {
  onChangeComplete: ColorChangeHandler;
  color: Color;
}

export default (props: Props) => {
  const { onChangeComplete, color } = props;
  return <SketchPicker color={color} onChange={onChangeComplete} />;
};

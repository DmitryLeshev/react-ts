import { Mode, Modes } from "../types/Theme";

export default (mode: Mode) => {
  return mode === Modes.LIGHT ? Modes.DARK : Modes.LIGHT;
};

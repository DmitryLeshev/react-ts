import { Dispatch } from "react";
import { CountAction } from "../types/count";
import { RootState } from "../reducers";

import actions from "../actions";

const { decrementCreator, incrementCreator } = actions.count;

export const incrementCountAsync = ({ ms }: { ms: number }) => async (
  dispatch: Dispatch<CountAction>,
  getState: () => RootState
) => {
  setTimeout(() => {
    dispatch(incrementCreator());
  }, ms);
};

export const decrementCountAsync = ({ ms }: { ms: number }) => async (
  dispatch: Dispatch<CountAction>,
  getState: () => RootState
) => {
  setTimeout(() => {
    dispatch(decrementCreator());
  }, ms);
};

export const incrementCount = incrementCreator;

export const decrementCount = decrementCreator;

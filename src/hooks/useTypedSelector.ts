import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../stores/redux/reducers";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useTypedSelector;

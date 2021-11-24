import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

// получаем типизированный хук-селектор
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

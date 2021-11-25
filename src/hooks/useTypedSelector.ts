import { TypedUseSelectorHook, useSelector } from "react-redux";
// import { RootState } from "../store/reducers";
import { TasksState } from "../types/types";

// получаем типизированный хук-селектор
export const useTypedSelector: TypedUseSelectorHook<{
  tasks: TasksState;
}> = useSelector;

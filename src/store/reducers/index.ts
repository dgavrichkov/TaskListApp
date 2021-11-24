import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer
});

// экспортируем тип корневого редусера, полученый от непосредственно от него
export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from "redux";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers({
  tasks: tasksReducer
});

// экспортируем тип корневого редусера, полученый от непосредственно от него
// пока его не использую, по какой-то причине тип там не такой, как надо
export type RootState = ReturnType<typeof rootReducer>;

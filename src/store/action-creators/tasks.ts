import { Dispatch } from "redux";
import { tasksMock } from "../../mock/tasks";

import { TNewTask, TasksAction, TasksActionTypes } from "../../types/types";

export function toggleTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.TOGGLE_TASK, payload: id };
}

export function delTaskAction(id: string): TasksAction {
  return { type: TasksActionTypes.DEL_TASK, payload: id };
}

export function addTaskAction(task: TNewTask): TasksAction {
  return { type: TasksActionTypes.ADD_TASK, payload: task };
}

export function fetchTasks() {
  return (dispatch: Dispatch<TasksAction>) => {
    try {
      // имитация запроса, начинаем крутить прелоадер
      dispatch({ type: TasksActionTypes.FETCH_TASKS });
      // имитация запроса, просто немного подождем перед тем как вернуть массив с тасками
      setTimeout(() => {
        dispatch({
          type: TasksActionTypes.FETCH_TASKS_SUCCESS,
          payload: tasksMock
        });
      }, 3000);
    } catch (e) {
      dispatch({
        type: TasksActionTypes.FETCH_TASKS_ERROR,
        payload: "Произошла ошибка при загрузке тасков"
      });
    }
  };
}

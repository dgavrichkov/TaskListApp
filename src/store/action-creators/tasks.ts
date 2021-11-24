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

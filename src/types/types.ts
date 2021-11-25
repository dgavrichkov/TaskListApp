interface Colors {
  primary: string;
  accent: string;
  text: string;
}
interface Shadows {
  button: string;
  input: string;
  buttonInset: string;
}
export interface ITheme {
  colors: Colors;
  shadows: Shadows;
}

export interface IThemes {
  [key: string]: ITheme;
  light: ITheme;
  dark: ITheme;
}

export interface ITask {
  id: string;
  name: string;
  tag: string;
  done: boolean;
}

export type TNewTask = Pick<ITask, "name" | "tag">;

export interface TasksState {
  tasks: ITask[];
  isLoading: boolean;
  error: string | null;
}

export enum TasksActionTypes {
  FETCH_TASKS = "FETCH_TASKS",
  FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
  FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
  ADD_TASK = "ADD_TASK",
  DEL_TASK = "DEL_TASK",
  TOGGLE_TASK = "TOGGLE_TASK"
}

interface FetchTasksAction {
  type: TasksActionTypes.FETCH_TASKS;
}
interface FetchTasksSuccessAction {
  type: TasksActionTypes.FETCH_TASKS_SUCCESS;
  payload: ITask[];
}
interface FetchTasksErrorAction {
  type: TasksActionTypes.FETCH_TASKS_ERROR;
  payload: string;
}
interface AddTaskAction {
  type: TasksActionTypes.ADD_TASK;
  payload: TNewTask;
}
interface DelTaskAction {
  type: TasksActionTypes.DEL_TASK;
  payload: string;
}
interface ToggleTaskAction {
  type: TasksActionTypes.TOGGLE_TASK;
  payload: string;
}

export type TasksAction =
  | FetchTasksAction
  | FetchTasksSuccessAction
  | FetchTasksErrorAction
  | AddTaskAction
  | DelTaskAction
  | ToggleTaskAction;

import nextId from "react-id-generator";
import { TasksState, TasksAction, TasksActionTypes } from "../../types/types";

const initialTasksState: TasksState = {
  tasks: [
    {
      id: nextId(),
      name: "1",
      tag: "regular",
      done: false
    },
    {
      id: nextId(),
      name: "2",
      tag: "daily",
      done: true
    },
    {
      id: nextId(),
      name: "3",
      tag: "daily",
      done: true
    }
  ],
  isLoading: false,
  error: null
};

export const tasksReducer = (
  state = initialTasksState,
  action: TasksAction
) => {
  switch (action.type) {
    case TasksActionTypes.FETCH_TASKS:
      return { ...state, isLoading: true };
    case TasksActionTypes.FETCH_TASKS_SUCCESS:
      return state;
    case TasksActionTypes.FETCH_TASKS_ERROR:
      return state;
    case TasksActionTypes.ADD_TASK:
      const newTask = { ...action.payload, done: false, id: nextId() };
      return { ...state, tasks: [newTask, ...state.tasks] };
    case TasksActionTypes.DEL_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      };
    case TasksActionTypes.TOGGLE_TASK:
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.done = !task.done;
        }
        return task;
      });
      return {
        ...state,
        tasks: newTasks
      };
    default:
      return state;
  }
};

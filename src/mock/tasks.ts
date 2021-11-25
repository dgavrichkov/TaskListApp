import nextId from "react-id-generator";
import { ITask } from "../types/types";

export const tasksMock: ITask[] = [
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
];

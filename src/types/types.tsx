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

import React, { FC } from "react";
import { Button } from "./components/Button";

interface SwitcherProps {
  onThemeClick: () => void;
}

const ThemeSwitcher: FC<SwitcherProps> = ({ onThemeClick }) => {
  return (
    <Button
      onClick={() => {
        onThemeClick();
      }}
    >
      Switch Theme
    </Button>
  );
};

export { ThemeSwitcher };

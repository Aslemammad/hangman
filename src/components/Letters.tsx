import React from "react";
import { createUseStyles } from "react-jss";
import { useStore } from "../store";
import { Store } from "../interfaces";
import { DeniedSVG } from "./assets";
import ToolTip from "./ToolTip";
const useStyles = createUseStyles({
  letters: {
    "font-family": "Ubuntu, sans-serif",
    "font-size": "1.5rem",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-between",
    width: "12rem",
  },
  letter: {
    "margin-right": ".5rem",
    border: "none",
    background: "none",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    position: "relative",
    "& svg": {
      position: "absolute",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const Letters: React.FC = () => {
  const classes = useStyles();
  const alphabetical = "ABCDEFGHIJKLMNORPSTUVWXYZ".split("");
  const [state, setState] = useStore();
  const handleClick = (letter: string) =>
    setState((prevState: Store) => {
      const isRight = prevState.word?.includes(letter);
      const strCorrectLetters = prevState.correctLetters || "";
      const strDeniedLetters = prevState.denied || "";
      return ({
        ...prevState,
        denied: strDeniedLetters + letter,
        lastGuess: isRight,
        correctLetters: strCorrectLetters + (isRight ? letter : ""),
      });
    });
  return (
    <div className={classes.letters}>
      {alphabetical.map((letter) => {
        const isDenied = state.denied?.split("")?.includes(letter);
        return (
          <button
            className={classes.letter}
            key={letter}
            onClick={isDenied ? undefined : handleClick.bind(null, letter)}
          >
            {letter}
            {isDenied ? <DeniedSVG /> : null}
          </button>
        );
      })}
    </div>
  );
};

export default ToolTip(Letters);

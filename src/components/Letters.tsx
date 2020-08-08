import React from "react";
import { createUseStyles } from "react-jss";
import { useStore } from "../store";
import { Store } from "../interfaces";
import { DeniedSVG } from "./SVG";
const useStyles = createUseStyles({
  letters: {
    "font-family": "Ubuntu, sans-serif",
    "font-size": "28px",
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "space-between",
    width: "240px",
  },
  letter: {
    "margin-right": "1rem",
    border: "none",
    background: "none",
    "& svg": {
      position: "relative",
      left: "-20px",
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
      console.log(prevState.denied, letter);
      return ({
        ...prevState,
        denied: strCorrectLetters + letter,
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

export default Letters;

import React from "react";
import { createUseStyles } from "react-jss";
import { useStore } from "../store";
const useStyles = createUseStyles({
  words: {
    "font-family": "Ubuntu, sans-serif",
    "font-size": "45px",
    margin: "2rem",
    display: "flex",
    "align-items": "flex-end",
  },
  letter: {
    display: "flex",
    "justify-content": "center",
    "flex-direction": "column",
    "align-items": "center",
    "margin-right": "1rem",
    "& div": {
      width: "40px",
      height: "10px",
    },
  },
});

const Word: React.FC = () => {
  const classes = useStyles();
  const [state] = useStore();
  return (
    <div className={classes.words}>
      {state.word?.split("").map((letter, index) => {
        const isCorrect = state.correctLetters?.includes(letter);
        return (<div key={index} className={classes.letter}>
          <span>{isCorrect ? letter : " "}</span>
          <div style={{ background: isCorrect ? "#FAD22E" : "#000000" }} />
        </div>);
      })}
    </div>
  );
};

export default Word;

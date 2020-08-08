import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import randomWords from "random-words";
import { useStore } from "../store";
import { Header, Letters, Word ,EmojiContainer} from "../components/";
import { Store } from "../interfaces";
import { navigate } from "hookrouter";

const useStyles = createUseStyles({
  game: {
    width: "100%",
    height: "100%",
    display: "flex",
    "align-items": "center",
    "flex-wrap": "wrap",
    "flex-direction": "column",
    "justify-content": "center",
  },
});
const Game:React.FC<any> = ({morph}:{morph:any}) => {
  const classes = useStyles();
  const [state, setState] = useStore();
  const getWord = () => {
    let word: string = randomWords();
    for (let i = 0; i < 50; i++) {
      word = randomWords();
      if (word.length <= (state.difficulty * 3)) return word.toUpperCase();
    }
    return word.toUpperCase();
  };
  const handleRightGuess = () => {
    const word = getWord();
    const helpLetter = "" + word[Math.floor(Math.random() * word.length)];
    setState((prevState: Store) => ({
      ...prevState,
      word: word,
      round: prevState.round + 1,
      timeEnd: false,
      denied: helpLetter,
      correctLetters: helpLetter,
    }));
  };
  useEffect(() => {
    console.log("I know you'r trying to cheat, but be loyal please.");
    const word = getWord();
    const helpLetter = "" + word[Math.floor(Math.random() * word.length)];

    setState((prevState: Store) => ({
      ...prevState,
      word: word,
      correctLetters: helpLetter,
      denied: helpLetter,
    }));
  }, []);

  useEffect(() => {
    const equal = (new Set(state.word?.split(""))).size ==
      state.correctLetters?.split("")?.length;
    if (state.timeEnd) {
      equal ? handleRightGuess() : navigate("/");
    }
  }, [state.timeEnd, state.correctLetters]);
  return (
    <div className={classes.game} {...morph}>
      <Header />
      <EmojiContainer />
      <Word />
      <Letters />
    </div>
  );
};

export default Game;

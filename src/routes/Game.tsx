import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import randomWords from "random-words";
import { useStore } from "../store";
import {
  Header,
  Letters,
  Word,
  EmojiContainer,
  Description,
} from "../components/";
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
    "justify-content": "space-between",
  },
});
const Game: React.FC<any> = () => {
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

    setState((prevState: Store) => {
      let playersGame = {};
      if (prevState.players) {
        playersGame = {
          players: [
            {
              points: prevState.players[0].active
                ? prevState.players[0].points + 1
                : prevState.players[0].points,
              active: !prevState.players[0].active,
            },
            {
              points: prevState.players[1].active
                ? prevState.players[1].points + 1
                : prevState.players[1].points,
              active: !prevState.players[1].active,
            },
          ],
        };
      }
      return ({
        ...prevState,
        ...playersGame,
        word: word,
        round: prevState.round + 1,
        timeEnd: prevState.timeEnd ? true : false,
        denied: helpLetter,
        correctLetters: helpLetter,
        lastRound: true,
        remainGuesses: 5,
      });
    });
  };
  useEffect(() => {
    const word = getWord();
    const helpLetter = "" + word[Math.floor(Math.random() * word.length)];

    setState((prevState: Store) => ({
      ...prevState,
      word: word,
      correctLetters: helpLetter,
      denied: helpLetter,
    }));
  }, []);

  useEffect(
    () => {
      const equal = (new Set(state.word?.split(""))).size ==
        state.correctLetters?.split("")?.length;
      if (state.timeEnd || state.remainGuesses == 0 || equal) {
        equal ? handleRightGuess() : navigate("/");
      }
    },
    [state.timeEnd, state.correctLetters, state.remainGuesses, state.lastRound],
  );
  return (
    <div className={classes.game}>
      <Header />
      <EmojiContainer />
      <Description title="Relative words" />
      <Word />
      <Letters title="Select the right letter to guess" />
    </div>
  );
};

export default Game;

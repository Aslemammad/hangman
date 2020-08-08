import React from "react";
import Smile from "./emoji/Smile";
import Correct from './emoji/Correct';
import Wrong from './emoji/Wrong'
import { useStore } from "../store";
import { useMorph } from 'react-morph';
const EmojiContainer: React.FC<any> = ({primary}:{primary?:boolean}) => {
  const [state] = useStore();
  const morph = useMorph({animationDelay: 3000});
  if (primary) {
  return <Smile />;
  }
  return (
    state.lastGuess ? <Correct morph={morph} />: <Wrong morph={morph} />
  );

};

export default EmojiContainer;

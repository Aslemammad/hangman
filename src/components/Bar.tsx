import React from "react";
import { useStore } from "../store";
import BarItem from "./BarItem";

const Bar: React.FC<any> = (
  { children }: { children: React.ReactNode },
) => {
  const [state, setState] = useStore();
  return (
    <React.Fragment>
      <BarItem
        visible={state.players}
        primary={state.players ? state.players[0].active : false}
        title="Player 1"
        points={state.players ? state.players[0].points : 0}
      />
      {children}
      <BarItem
        visible={state.players}
        primary={state.players ? state.players[1].active : false}
        title="Player 2"
        points={state.players ? state.players[1].points : 0}
      />
    </React.Fragment>
  );
};
export default Bar;

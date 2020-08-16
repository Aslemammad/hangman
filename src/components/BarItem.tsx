import React from "react";
import { createUseStyles } from "react-jss";
import { Coin } from "./assets";
const useStyles = createUseStyles({
  bar: {
    background: "#000000",
    padding: ".5rem",
    "width": "8rem",
    "border-radius": ".4rem",
    "display": "flex",
    "align-items": "center",
    "justify-content": "space-between",
  },
  primary: {
    background: "#FDE030",
    "& span": {
      color: "#000000",
    },
  },
});

const BarItem: React.FC<any> = (
  { title, points, primary, visible }: {
    title: string;
    points: number;
    primary: boolean;
    visible: boolean;
  },
) => {
  const classes = useStyles();
  return (visible
    ? (<div
      className={[classes.bar, primary ? classes.primary : " "].join(" ")}
    >
      <span>{title}{"  "}</span>
      <Coin />
      <span>{"  "}{points}</span>
    </div>)
    : null);
};
export default BarItem;

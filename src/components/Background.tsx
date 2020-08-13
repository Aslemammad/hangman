import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
//Todo: Not responsive when animation is active (Mobile)
const useStyles = createUseStyles({
  "@keyframes animation": {
    "25%": {
      transform: "translateX(1rem)",
    },
    "50%": {
      transform: "translateX(-1rem)",
    },
    "75%": {
      transform: "translateX(0)",
    },
  },
  background: {
    "z-index": -10,
    width: "100%",
    height: "100%",
    position: "relative",
    animation: "$animation 2s infinite ",
  },
  span: {
    position: "absolute",
    opacity: 0.6,
  },
});
const Background: React.FC = () => {
  const classes = useStyles();
  const alphabetical = "ABCDEFGHIJKLMNORPSTUVWXYZ".split("");
  return (
    <div className={classes.background}>
      {alphabetical.map((letter, index) => {
        const constRandom = Math.random();

        return (<span
          key={letter}
          className={classes.span}
          style={{
            position: "relative",
            top: `${constRandom * window.innerHeight / 18 + 1}rem`,
            left: `${Math.random() * (window.innerWidth / 18) + 1}rem`,

            fontFamily: "Ubuntu, sans-serif",
            color: Math.random() > 0.5
              ? "rgba(250, 210, 46, 1)"
              : "rgba(0, 0, 0, 1)",
          }}
        >
          {letter}
        </span>);
      })}
    </div>
  );
};
export default React.memo(Background);

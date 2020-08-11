import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  "@keyframes animation": {
    "33%": {
      transform: "translateX(50px)",
    },
    "40%": {
      opacity: "100%",
      transform: "translateX(0)",
    },
    "50%": {
      transform: "skewX(30deg)",
    },
    "60%": {
      transform: "skew(0,0)",
    },
  },
  background: {
    "z-index": -10,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
    animation: "$fade .5s infinite",
  },
  svg: {
    position: "absolute",
    opacity: 0.6,
    // animation: "$animation 6.5s infinite",
  },
});
const Background: React.FC = () => {
  const classes = useStyles();
  const svgElements = [];
  const alphabetical = "ABCDEFGHIJKLMNORPSTUVWXYZ".split("");

  //   for (let index = 0; index < 15; index++) {
  //     const randomStyle = Math.random();
  //     svgElements[svgElements.length] = (
  //       <svg
  //         key={index}
  //         style={{
  //           position: "relative",
  //           top: `${Math.random() * window.innerHeight + 1}px`,
  //           left: `${index * 9}rem`,
  //           transform: `rotate(${Math.random() * 180 +
  //             1}deg) matrix(-0.15, 0.99, 0.99, 0.15, 0, 0)`,
  //           stroke: randomStyle > 0.5
  //             ? "rgba(250, 210, 46, 1)"
  //             : "rgba(0, 0, 0, 1)",
  //           filter: `drop-shadow( 0px 5px 5px rgba(${
  //             randomStyle > 0.5 ? "250, 210, 46, 0.75" : "0, 0, 0, 0.55"
  //           }))`,
  //         }}
  //         xmlns="http://www.w3.org/2000/svg"
  //         width="42"
  //         height="48"
  //         viewBox="0 0 39 48"
  //         fill="none"
  //       >
  //         <path
  //           d="M1.00903 7.60134C34.0727 0.601402 38.8627 44.2047 34.0727 41.5695"
  //           strokeWidth="4"
  //         />
  //       </svg>
  //     );
  //   }
  return (
    <div className={classes.background}>
      {alphabetical.map((letter, index) => {
        const constRandom = Math.random();

        return (<span
          key={letter}
          className={classes.svg}
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

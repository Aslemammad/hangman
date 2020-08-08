import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  button: {
    "font-family": "Ubuntu, sans-serif",
    "font-size": "27px",
    width: "178px",
    height: "46px",
    background: "#FAD22E",
    border: "none",
    "border-radius": "10px",
    margin: "15px",
    transition: "all .2s",
    "&:hover": {
      filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.15))",
    },
    "&:focus": {
      outline: "none",
    },
  },
});

const Button: React.FC<any> = ({
  onClick,
  primary,
}: {
  onClick: any;
  primary: boolean;
}) => {
  const classes = useStyles();
  return (
    <button
      className={classes.button}
      style={!primary
        ? {
          background: "#000000",
          color: "#FAD22E",
          fontSize: "20px",
          width: "140px",
          height: "40px",
        }
        : {}}
      onClick={onClick}
    >
      {!primary ? "2 Players" : "Play"}
    </button>
  );
};

export default Button;

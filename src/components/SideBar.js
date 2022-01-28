import React from "react";

//Material UI
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sidebar__container: {
    position: "fixed",
    width: "17.8vw",
    height: "20vh",
    paddingTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "5px",
  },
}));

const SideBar = ({ category, setSearchVal }) => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar__container}>
      {category.map((cat) => {
        return (
          <Button
            key={cat}
            sx={{ borderBottom: "1px solid #000", margin: "10px 0" }}
            variant="secondary"
            className={classes.btn}
            onClick={() => setSearchVal(cat)}
          >
            {cat}
          </Button>
        );
      })}
      <Button
        sx={{ borderBottom: "1px solid #000", margin: "10px 0" }}
        variant="secondary"
        className={classes.btn}
        onClick={() => setSearchVal("All")}
      >
        All
      </Button>
    </div>
  );
};

export default SideBar;

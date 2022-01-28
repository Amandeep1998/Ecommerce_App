import React from "react";
import Products from "./Products";
import SideBar from "./SideBar";

//Material UI
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({});

const Home = ({ products, category, searchVal, setSearchVal }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <SideBar category={category} setSearchVal={setSearchVal} />
        </Grid>
        <Grid item sm={10} xs={10} className={classes.products__container}>
          <Products searchVal={searchVal} products={products} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

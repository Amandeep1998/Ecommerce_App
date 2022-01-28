import * as React from "react";
import Product from "./Product";

//Material UI
import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  products__container: {
    paddingTop: theme.spacing(10),
  },
  product: {
    padding: theme.spacing(2),
  },
}));

const Products = ({ products, searchVal }) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.products__container}>
        {products
          .filter((prod) => {
            if (searchVal === null) {
              return prod;
            } else if (searchVal === "T-shirt") {
              return prod.label.includes(searchVal);
            } else if (searchVal === "Mobile") {
              return prod.label.includes(searchVal);
            } else if (searchVal === "All") {
              return prod;
            }
          })
          .map((prod) => {
            return (
              <Grid key={prod.id} item className={classes.product}>
                <Product
                  id={prod.id}
                  label={prod.label}
                  price={prod.price}
                  img={prod.img}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};
export default Products;

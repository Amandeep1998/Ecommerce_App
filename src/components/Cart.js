import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cart.action";

//Material UI
import { Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  cart__container: {
    paddingTop: theme.spacing(10),
  },
}));

const Cart = () => {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = cartData.reduce((sum, product) => {
      return sum + product.price;
    }, 0);
    setTotalPrice(total);
  }, [cartData]);

  return (
    <Container>
      <Grid container className={classes.cart__container}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartData.map((product, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Box
                      component="img"
                      sx={{
                        height: { xs: 70, sm: 233 },
                        width: { xs: 70, sm: 233 },
                      }}
                      alt="No Image."
                      src={product.img}
                    />
                  </TableCell>
                  <TableCell align="right">{product.label}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => dispatch(removeFromCart(product.id))}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalPrice} Rs</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};
export default Cart;

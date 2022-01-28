import React from "react";
import { addToCart } from "../redux/actions/cart.action";
import { useDispatch } from "react-redux";

//Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = ({ id, label, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price} Rs <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={(e) => {
              dispatch(
                addToCart({
                  id,
                  label,
                  price,
                  img,
                })
              );
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;

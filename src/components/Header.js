import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
  },
  brand: {
    flex: 1,
    color: "#fff",
  },
  links: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },
  link: {
    padding: theme.spacing(1),
    color: "#fff",
  },
  profile: {
    marginLeft: theme.spacing(1),
  },
  cartLogoLg: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  cartLogoSm: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const cartData = useSelector((state) => state.cartReducer.cart);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.brand}
            variant="h6"
            sx={{ letterSpacing: "0.2rem" }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              MaterialUI
            </Link>
          </Typography>
          <div className={classes.links}>
            <div>
              <Link to="/">
                <span className={classes.link}>Products</span>
              </Link>
            </div>
            <div className={classes.cartLogoLg}>
              <Link to="/cart">
                <span className={classes.link}>Cart ({cartData.length})</span>
              </Link>
            </div>
            <div className={classes.cartLogoSm}>
              <Link to="/cart">
                <span className={classes.link}>
                  <ShoppingCartIcon />
                </span>
              </Link>
            </div>
          </div>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src="/images/dp.jpg"
              sx={{ width: 32, height: 32 }}
            ></Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

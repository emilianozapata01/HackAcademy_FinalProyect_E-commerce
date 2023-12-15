import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import CartDrawer from "./CartDrawer";
import NavbarStyle from "../styles/components/Navbar.module.css";
import MuiNavbarStyle from "../styles/components/MuiNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import ProfileIcon from "./icons/ProfileIcon";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/buyerSlice";
import axios from "axios";

function MuiNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buyer = useSelector((state) => state.buyer);
  const cartItemCount = useSelector((state) => state.cart.cartItemCount);
  const [growBurguer, setGrowBurguer] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [categories, setCategories] = React.useState(null);
  const getCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE_API}/category`
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);

  const handleResetDB = async () => {
    dispatch(logout());
    navigate("/");
    axios({
      method: "get",
      url: `${import.meta.env.VITE_URL_BASE_API}/resetdb`,
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              className={growBurguer && MuiNavbarStyle.growBurguer}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={() => navigate("/all-products")}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
              <MenuItem>
                {/* <Typography textAlign="center">Categories</Typography> */}
                <DropdownButton
                  className={`${MuiNavbarStyle.dropdownBurguer} ${
                    growBurguer && MuiNavbarStyle.growBurguer
                  }`}
                  align="end"
                  title="Categories"
                  id="dropdown-menu-align-end"
                  onClick={() => setGrowBurguer(!growBurguer)}
                >
                  {categories &&
                    categories.map((category) => (
                      <Dropdown.Item
                        className="textUppercase"
                        key={category._id}
                        onClick={() => navigate(`category/${category._id}`)}
                      >
                        {category.name}
                      </Dropdown.Item>
                    ))}
                </DropdownButton>
              </MenuItem>
            </Menu>
          </Box>
          <div
            style={{ flexGrow: "1", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img
              src="nav-logo.png"
              alt=""
              style={{
                marginRight: "2",
                width: "3.2rem",
              }}
            />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>

            <DropdownButton
              className={MuiNavbarStyle.dropdown}
              align="end"
              title="CATEGORIES"
              id="dropdown-menu-align-end"
            >
              {categories &&
                categories.map((category) => (
                  <Dropdown.Item
                    className="textUppercase"
                    key={category._id}
                    onClick={() => navigate(`category/${category._id}`)}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
            </DropdownButton>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ProfileIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!buyer && (
                <MenuItem onClick={() => navigate("/login")}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
              {!buyer && (
                <MenuItem onClick={() => navigate("/register")}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              )}
              {buyer && (
                <MenuItem
                  onClick={(() => navigate("/profile"), handleCloseUserMenu)}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              )}
              {buyer && (
                <MenuItem
                  onClick={
                    (() => navigate("/"), handleLogout, handleCloseUserMenu)
                  }
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
              <MenuItem href="https://juiceshopadmin-ha.vercel.app/">
                <Typography textAlign="center">
                  <a href="https://juiceshopadmin-ha.vercel.app/">
                    Admin Login
                  </a>
                </Typography>
              </MenuItem>
              <MenuItem onClick={(handleResetDB, handleCloseUserMenu)}>
                <Typography textAlign="center">Reset DB</Typography>
              </MenuItem>
            </Menu>
            <div className={`${NavbarStyle.correctColorNavbar}`}>
              <CartDrawer cartItemCount={cartItemCount} />
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MuiNavbar;

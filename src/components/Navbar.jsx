import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import logo from "../assets/JG-logo.png";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 200;
const navItems = ["Home", "About", "MyWork", "CV", "Contact"];

export default function Navbar(props) {
  const { setMobileOpen } = props; // Destructure setMobileOpen from props
  const navigate = useNavigate();

  const handleMenuItemClick = (item) => {
    if (item === "CV") {
      window.open(
        "https://drive.google.com/file/d/1zArwtvcqBpw4BxBU8inoGKKOlyRPFjiO/view?usp=sharing",
        "_blank"
      );
    } else {
      navigate(item === "Home" ? "/" : `/${item}`);
    }
    setMobileOpen(false); // Close the drawer after clicking a link
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: (theme) => theme.palette.background.default }}
      >
        <Container>
          <Toolbar
            sx={{
              padding: "0px !important",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo" width={"35px"} />
            </Link>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { sm: "none", xs: "none", md: "block" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={
                    item === "CV"
                      ? "https://drive.google.com/file/d/1zArwtvcqBpw4BxBU8inoGKKOlyRPFjiO/view?usp=sharing"
                      : item === "Contact"
                      ? "mailto:jonny.grandt@gmail.com"
                      : `/${item === "Home" ? "" : item}`
                  }
                  color="inherit"
                  variant={item === "Contact" ? "contained" : "text"}
                  sx={{
                    borderRadius: "50px",
                    ...(item === "Contact" && {
                      backgroundColor: "rgba(29, 149, 73, 1)",
                      color: "#fff", // Vit text för bättre kontrast
                      "&:hover": {
                        backgroundColor: "rgb(25, 104, 54)", // Lite mörkare grön vid hover
                      },
                    }),
                  }}
                  onClick={() => handleMenuItemClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

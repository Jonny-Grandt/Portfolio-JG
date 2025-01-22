import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import logo from '../assets/JG-logo.png'
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'CV', 'Contact'];

export default function Navbar(props) {
  const nav = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} 
      alt="logo" 
      width={"35px"} 
      style={{ margin: "8px 0px" }} />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding> 
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
  window !== undefined ? () => window().document.body : undefined;


  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ backgroundColor: (theme) => theme.palette.background.default }}
      >
        <Container>
          <Toolbar sx={{ padding: "0px !important", display: 'flex', justifyContent: 'space-between'}}>

            <Link to="/">
              <img src={logo} alt="logo" width={'35px'} />

            </Link>
            
            <Stack direction="row" spacing={1} sx={{ display: { sm: "none",  xs: 'none', md: 'block' } }}>

            {/* <Button onClick={() => nav('/about')} color="inherit">
              About
              </Button> */}
            <Button  onClick={() => nav('/mywork')} color="inherit">
              Projects
              </Button>
            <Button onClick ={() => {}} variant="outlined" color="text"
              sx={{ borderRadius:"50px"}}>
              CV
              </Button>
            <Button onClick={() => {}} variant="contained" color="primary"
              component="a"
              href="mailto:jonny.grandt@gmail.com"
              sx={{ borderRadius:"50px"}}>

              Contact
              </Button>
              </Stack>
              <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block", md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
            
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: 'none' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     </Box>
   );
}

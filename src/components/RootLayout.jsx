import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DrawerAppBar from "./DrawerAppBar";
import Footer from "./Footer";
import React, { useState } from "react"; // Import useState

const RootLayout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false); // Define state here

  return (
    <Box>
      {isSmallScreen ? (
        <DrawerAppBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      ) : (
        <Navbar setMobileOpen={setMobileOpen} />
      )}
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Box>
  );
};

export default RootLayout;

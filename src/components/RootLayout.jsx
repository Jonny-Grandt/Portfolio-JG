import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import AboutPage from "./AboutPage";
import DrawerAppBar from "./DrawerAppBar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <Box>
      <Navbar />

      <main>
        <Container>
          <Outlet />
        </Container>
        <AboutPage />
      </main>

      <Footer />
    </Box>
  );
};

export default RootLayout;

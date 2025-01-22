import React, { useState, useEffect } from "react";
import jghero from "../assets/hero3.png";
import { Box, Stack, Button, Typography } from "@mui/material";
import "./Hero.css"; // Importera CSS-filen
import BallLeft from "../assets/ball-left.png";

export default function Hero() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    // Starta animationen efter 2 sekunder
    const timer = setTimeout(() => setHighlight(true), 2000);
    return () => clearTimeout(timer); // Rensa timeout vid unmount
  }, []);

  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: { xs: "calc(110vh - 56px)", md: "calc(80vh - 64px)" } }}
      spacing={{ sx: 4, md: 0 }}
    >
      <Stack sx={{ width: { sm: "100%", md: "50%" } }} spacing={2}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          className={highlight ? "highlight" : ""} // Dynamisk klass
        >
          Hi! Im <span className="name">Jonny Grandt</span> <br />
          and im a...{" "}
        </Typography>
        <Typography variant="h4">FullStack Junior webbdeveloper </Typography>
        <Typography variant="body1">
          A web development student, passionate about building beautiful and
          functional websites. I’m currently learning the MERN stack. Check out
          my projects below or connect with me to chat about web development!
        </Typography>
        <Stack direction={"row"} spacing={2} sx={{ position: "relative" }}>
          {/* <Button variant="outlined">Learn More</Button> */}
          <Button
            className="contactMe"
            variant="contained"
            component="a"
            href="mailto:jonny.grandt@gmail.com"
          >
            Contact Me
          </Button>
          <img src={BallLeft} alt="" className="ball-left" />
        </Stack>
      </Stack>
      <Box sx={{ width: { sm: "100%", md: "50%" } }}>
        <img src={jghero} alt="Jonny Grandt" width={"100%"} />
      </Box>
    </Stack>
  );
}

import React from "react";
import "./Card.css";
import JGpro from "../assets/JGhead2.png";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      className="AboutPage"
      sx={{
        position: "relative",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "20px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Typography sx={{ padding: "50px" }} variant="h4" component="h2">
        So, who am i?
      </Typography>

      <Box
        className="card-container"
        sx={{
          height: "400px",
          padding: "23px",
          background: "rgba(255, 255, 255, 0.19)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(6.7px)",
          WebkitBackdropFilter: "blur(6.7px)",
          border: "1px solid rgba(182, 9, 9, 0.07)",
          
        }}
      >
        <div className="card">
          <div className="card-front" >
            <img src={JGpro} alt="Mitt foto" width="80%" />
            <div className="card-text"></div>
          </div>
          <div className="card-back">
            <p className="card-text2">
              I am 43 years old, blessed with a wonderful family - Two teenage
              daughters and a fantastic wife who has been an incredible support
              throughout my journey to becoming a web developer. <br/><br/>
            
              I've always been fascinated by technology, but the last time I was
              in school, the internet was just a fly 😅<br/><br/> Anyway, I decided to
              pursue my passion last year and embarked on my web development
              journey. That's where I discovered the fantastic community at
              Techover.
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import LinkedIn from "../assets/LinkedIn.gif";
import Phone from "../assets/Phone.gif";
import github from "../assets/github.gif";
import Location from "../assets/Location.gif";
import ballLeft from "../assets/ball-work-left.png";

export default function Footer() {
  return (
    <Box
      className="Footer"
      sx={{
        height: {
          xs: "calc(50vh - 56px)",
          md: "calc(40vh - 64px)",
        },
        position: "relative",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "left", zIndex: 0 }}>
        <img src={ballLeft} alt="" className="ballLeft" />
      </Box>
      <Box sx={{ width: { sm: "100%", md: "50%" } }}>
        <Typography
          className="Contact"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // Two columns
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Contact Information */}
          <a
            href="https://www.linkedin.com/in/jonny-grandt-ba533b123/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-effect"
          >
            <img className="Linkedin" src={LinkedIn} alt="LinkedIn" />
            <span className="hover-text">LinkedIn</span>
          </a>

          <a href="tel:+46 725755306" className="hover-effect">
            <img className="Phone" src={Phone} alt="Phone" />
            <span className="hover-text">+46 725755306</span>
          </a>

          <a
            href="https://github.com/Jonny-Grandt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-effect"
          >
            <img className="github" src={github} alt="Github" />
            <span className="hover-text">Github</span>
          </a>

          <a href="https://www.google.com/maps?q=Jönköping">
            <img className="Location" src={Location} alt="Location" />
            <span className="hover-text">Jönköping</span>
          </a>
        </Typography>

        <Typography
          className="name-text"
          sx={{
            fontSize: { xs: "1.5rem", md: "1rem" },
            alignSelf: "flex-end",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          © 2025 - Jonny Grandt
        </Typography>
      </Box>
    </Box>
  );
}
import { Box } from "@mui/material";
import React from "react";
import ballLeft from '../assets/ball-left.png';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "50px",
        padding: "20px",
        background: "rgba(255, 255, 255, 0.19)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.7px)",
        WebkitBackdropFilter: "blur(6.7px)",
        border: "1px solid rgba(182, 9, 9, 0.07)",
        height: "30vh",
        position: "relative",
        minHeight: "200px",
        width: "100%",
        zIndex: 0
      
      }}
    >
      <img
        src={ballLeft}
        alt=""
        style={{
          position: "absolute",
          zIndex: -1, // Places the image behind the Box content
          top: "100px",
          
          width: "300px", // Adjusts the image size
        }}
      />
      <h1
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          textAlign: "center",
          color: "#f2f2f2",
          fontWeight: "bold",
        }}
      >
        Click on the icons below to get in touch with me!
      </h1>
    </Box>
  );
}

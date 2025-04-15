import React from "react";
import "./Card.css";
import JGpro from "../assets/JGhead2.png";
import { Box, Typography } from "@mui/material";
import scatterdBalls from "../assets/ball-work-right.png";
import { motion } from "framer-motion";
import { keyframes, styled } from "@mui/system";

// Keyframes for typing effect
const typing = keyframes`
  from { width: 0; }
  to { width: 345px; }
`;

const blink = keyframes`
  from { border-right-color: rgb(138, 238, 138); }
  to { border-right-color: transparent; }
`;

const AnimatedText = styled(Typography)`
  border-right: solid 3px rgb(127, 190, 127);
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: rgb(255, 255, 255);
  
  animation: ${typing} 2s steps(29, end) 1s 1 normal both,
             ${blink} 800ms steps(29, end) infinite;
`;

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
      {/* Animated typing effect */}
      <AnimatedText variant="h4" component="h2">
        So, who am I ?
      </AnimatedText>

      <img 
        src={scatterdBalls} 
        alt="" 
        style={{ 
          position: 'relative',
          bottom: '0px',
          display: 'block',
          zIndex: '-1'
        }} 
      />

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
          <div className="card-front">
            <img src={JGpro} alt="Mitt foto" width="80%" />
            <div className="card-text"></div>
          </div>
          <div className="card-back">
            <p className="card-text2">
              I am 43 years old, blessed with a wonderful family - Two teenage
              daughters and a fantastic wife who has been an incredible support
              throughout my journey to becoming a web developer. <br/><br/>
              I've always been fascinated by technology, but the last time I was
              in school, the internet was just a fly 😅<br/><br/>
              Anyway, I decided to pursue my passion last year and embarked on my web development
              journey. That's where I discovered the fantastic community at Techover.
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
}

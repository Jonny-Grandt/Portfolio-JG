import React from "react";
import { Box, Stack, Typography, Avatar, Container } from "@mui/material";
import headshot from "../assets/doe.png";
import leftImg from "../assets/ball-right.png";
import rightImg from "../assets/ball-left.png";


export default function ReviewSection() {
  return (
    <Box sx={{ 
      position: "relative", 
      minHeight: "600px",
      justifyContent: 'center',
      display: 'flex', 
      alignItems: 'center'

      }}>
        
      <img
        src={leftImg}
        alt=""
        style={{ 
          position: "absolute", 
          left: "-30px", 
          top: "-140px" }}
      />
      <img
        src={rightImg}
        alt=""
        style={{ 
          position: "absolute", 
          right: "-45px", 
          bottom: "10px" }}
      />
      <Container maxWidth="sm">
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
            "Jonny transformed our vision into a stunning website that exceeded
            our expectations. His attention to detail and creativity made the
            entire process enjoyable and stress-free."
          </Typography>

          <Avatar alt="John Doe" src={headshot} />

          <Typography variant="h6" gutterBottom>
            John Doe
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            Head of cool stuff
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

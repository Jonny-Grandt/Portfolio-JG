import { Box } from "@mui/material";
import React from "react";
import ballLeft from '../assets/ball-left.png'


export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center", // Centrerar vertikalt
        justifyContent: "center", // Centrerar horisontellt

        textAlign: "center", // Säkerställer att texten centreras
        px: 2, // Lite padding på sidorna för bättre mobilvy

        
      }}
    >
      <h1>Click on the icons below to get in touch with me!</h1>
      <img src={ballLeft} alt="" style={{     
         position: "absolute", /* Placera bilden relativt till föräldern */
         zIndex: -1, /* Placera bilden bakom andra element */
         top: "130px", /* Justera bildens position (kan justeras) */
         left: "80px", /* Justera bildens position (kan justeras) */
         width: "300px", /* Justera bildens storlek */
      }}

      
      />
    </Box>
  );
}

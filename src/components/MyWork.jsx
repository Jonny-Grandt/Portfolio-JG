import React from "react";
import { Box, Stack, Typography, Container, Chip } from "@mui/material";
import project1 from "../assets/pro1.png";
import project2 from "../assets/pro2.png";
import project3 from "../assets/pro3.png";
import project4 from "../assets/pro4.png";
import project5 from "../assets/pro5.jpg";
import ballRight from "../assets/ball-work-right.png";
import './MyWork.css';


export default function MyWork() {
  return (
    <Box
      className="Projects"
      sx={{
        position: "relative",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        padding: "20px",
      }}
    >
      {/* Text Section */}
      <Stack
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          marginBottom: "40px",
          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, 
          fontWeight: "bold", gap:"200px" }}
        >
          Here you can see what I’ve been building. Each project represents a
          step forward in my journey as a web developer.
        </Typography>
       
      </Stack>
      

      {/* Projects Section */}
      
      <Stack
        spacing={4}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          flexDirection: "column",
          position: "relative", // För att kortens z-index ska fungera korrekt
          zIndex: 1, // Högre än bilden
        }}
      >

        {/* Card 1 */}
        <ProjectCard
          image={project5}
          title="The Spotify Clone"
          description={`I have developed a Spotify clone, a full-scale web application built with React, Material UI, and Spotify's API. The project is carefully designed to replicate the authentic Spotify experience, both in terms of user interface and functionality. The application includes advanced features such as music playback, playlist management, as well as dynamic interaction with Spotify’s API to provide a seamless user experience. Additionally, I have implemented a responsive design and optimized performance to ensure smooth and intuitive navigation across different devices.`}
          technologies={["React", "MUI", "SpotifyAPI", "React Router"]}
        />


        <ProjectCard
          image={project4}
          title="The flag app"
          description={`The most advanced project in my programming journey so far. It is built with React and leverages a REST API to display diverse data about countries in an interactive and engaging way. I designed a modern, responsive UI, which I believe highlights my competence as a frontend developer and my skills in React development. `}
          technologies={["React", "CSS", "JavaScript", "React Router"]}
        />

        <ProjectCard
          image={project1}
          title="Apps that I did early in my progress"
          description={`The left one is a password generator that demonstrates how I can contribute as a Frontend, UX/UI, or Software Developer, with a focus on prioritizing user-friendliness.

On the right is a mockup of a summary card. I used multiple “active states” to show how buttons and elements react when they are clicked or hovered.`}
          technologies={["HTML", "CSS", "DOM manipulation", "DEV Tools"]}
        />

        {/* Card 2 */}
        <ProjectCard
          image={project2}
          className="project-card"
          title="Some of the smaller apps that I built"
          description={`A motivation generator that randomizes a motivational quote via an API request, and a To-Do app that lets you keep track of what you're supposed to do!

This demonstrates my ability to interact with third-party APIs to build dynamic and data-driven applications.`}
          technologies={["HTML", "CSS", "DOM manipulation", "JavaScript"]}
        />

            <Box
            sx={{
              display:"flex",
              justifyContent:"right",
              zIndex: 0
            }}>
               <img src={ballRight} alt="" className="ballRight"/>
            </Box>

       

        

        
        {/* Card 3 */}
        <ProjectCard
          image={project3}
          className="project-card"
          title="Klarna checkout app"
          description={`I have built a web service that integrates the Klarna Checkout API, developed with Node.js and Express.
            
            The project includes authentic API calls to create a functional checkout solution and simulate a real purchasing process using products fetched from the FakeStore API.`}
          technologies={["Node.js", "Express", "FakeStore API", "JavaScript"]}


        />
      </Stack>
      
    </Box>
  );
}

function ProjectCard({ image, title, description, technologies }) {
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
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "#fff" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "#fff", marginY: "10px" }}>
          {description}
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{ flexWrap: "wrap", 
            gap: { xs: 0.5, sm: 1 } }}
        >
          {technologies.map((tech) => (
            <Chip key={tech} label={tech} variant="outlined" />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}


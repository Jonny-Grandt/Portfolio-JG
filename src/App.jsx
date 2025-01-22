import ButtonGroup from "./components/ButtonGroup";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./utils/theme";
import { CssBaseline } from "@mui/material";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
// import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";
import "./App.css";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";


const myTheme = createTheme(themeOptions)

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}> 
    <Route index element={<HomePage />} errorElement={<NotFound />} />
    
    <Route path="/about" element={<AboutPage />} errorElement={<NotFound />} />
    <Route path="/MyWork" element={<MyWork />} errorElement={<NotFound />} />
    <Route path="/Footer" element={<Footer />} errorElement={<NotFound />} />
   
  </Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <ThemeProvider theme= {myTheme}>
       <CssBaseline />
      <RouterProvider router={router}/>
     
         </ThemeProvider>
  );
}

export default App;

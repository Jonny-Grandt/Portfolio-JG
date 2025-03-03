import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom"; // 🚀 Behåll bara dessa från react-router-dom
import { themeOptions } from "./utils/theme";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import NotFound from "./components/NotFound";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import DrawerAppBar from "./components/DrawerAppBar";
import "./App.css";

const myTheme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Routes> {/* 🚀 Huvudrouting */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="MyWork" element={<MyWork />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="DrawerAppBar" element={<DrawerAppBar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

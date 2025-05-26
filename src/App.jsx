import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom"; // 🚀 Behåll bara dessa från react-router-dom
import { themeOptions } from "./utils/theme";
import RootLayout from "./components/RootLayout";
import "./App.css";
import React, { Suspense } from 'react';
import { NavHashLink } from "react-router-hash-link";

// Lazy load components
const HomePage = React.lazy(() => import('./components/HomePage'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const MyWork = React.lazy(() => import('./components/MyWork'));
const Footer = React.lazy(() => import('./components/Footer'));
const DrawerAppBar = React.lazy(() => import('./components/DrawerAppBar'));

const myTheme = createTheme(themeOptions);

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh' 
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

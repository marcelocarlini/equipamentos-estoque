import { Container } from "@mui/material";
import React from "react";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', 
    },
    secondary: {
      main: '#482880', 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  );
}
export default App;

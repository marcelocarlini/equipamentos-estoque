import { Container } from "@mui/material";
import React from "react";
import Menu from "./components/Menu";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Vermelho
    },
    secondary: {
      main: '#482880', // Verde
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

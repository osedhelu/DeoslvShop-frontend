import { lightTheme } from "@/themes";
import { ThemeProvider } from "@mui/material";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: any) => {
  console.log("hlaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

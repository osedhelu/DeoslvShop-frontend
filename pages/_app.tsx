import { UiProvider } from "@/context";
import "@/styles/globals.css";
import { lightTheme } from "@/themes";
import { ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr";

const App = ({ Component, pageProps }: any) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <UiProvider>
        <ThemeProvider theme={lightTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  );
};

export default App;

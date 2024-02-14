import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { createContext, useContext, useMemo, useState } from "react";

import { useTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = useState("dark");

  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...amber,
            ...(mode === "dark" && {
              main: amber[300],
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[900],
                  secondary: grey[800],
                }
              : {
                  primary: "#fff",
                  secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );

  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //     primary: {
  //       main: "#ff0000",
  //     },
  //   },
  // });

  // const darkModeTheme = createTheme(getDesignTokens("dark"));

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      {/* <ThemeProvider theme={darkModeTheme}> */}
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack
            direction="row"
            // divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            // justifyContent="space-between"
            // sx={{ backgroundColor: "#ddd" }}
          >
            <Sidebar mode={mode} setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <AddPost />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;

// import Box from "@mui/material/Box";
// import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
// import { amber, deepOrange, grey } from "@mui/material/colors";

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     primary: {
//       ...amber,
//       ...(mode === "dark" && {
//         main: amber[300],
//       }),
//     },
//     ...(mode === "dark" && {
//       background: {
//         default: deepOrange[900],
//         paper: deepOrange[900],
//       },
//     }),
//     text: {
//       ...(mode === "light"
//         ? {
//             primary: grey[900],
//             secondary: grey[800],
//           }
//         : {
//             primary: "#fff",
//             secondary: grey[500],
//           }),
//     },
//   },
// });

// function App() {
//   const theme = useTheme();
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         width: "100%",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "background.default",
//         color: "text.primary",
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       This is a {theme.palette.mode} mode theme with custom palette
//     </Box>
//   );
// }

// const darkModeTheme = createTheme(getDesignTokens("dark"));

// export default function DarkThemeWithCustomPalette() {
//   return (
//     <ThemeProvider theme={darkModeTheme}>
//       <App />
//     </ThemeProvider>
//   );
// }

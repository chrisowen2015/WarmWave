import { Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FFA500",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === "info" && {
              backgroundColor: "#60a5fa",
            }),
          }),
        },
      },
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFA500",
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            ...darkScrollbar({
              track: "#202022",
              thumb: "#585859",
              active: "#838384",
            }),
            scrollbarWidth: "thin",
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === "info" && {
              backgroundColor: "#60a5fa",
            }),
          }),
        },
      },
    },
  })
);

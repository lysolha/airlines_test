import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.8)",
      light: "#E9CB96",
    },
    secondary: {
      main: "#03dac6",
    },
  },
  typography: {
    fontFamily: "'JosefinSans', sans-serif",
    h1: {
      color: "rgba(0, 0, 0, 0.8)",
      fontFamily: "Piedra",
      fontSize: "4rem",
      ["@media (max-width:600px)"]: {
        fontSize: "2rem",
      },
      ["@media (min-width:600px) and (max-width:900px)"]: {
        fontSize: "3rem",
      },
    },
    body1: {
      fontFamily: "'JosefinSans', sans-serif",
    },
    button: {
      fontFamily: "Piedra",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          borderRadius: "8px",
          background: "#ffffff",
          border: `4px dashed ${theme.palette.primary.main}`,
          "&:hover": {
            border: `4px dashed ${theme.palette.secondary.main}`,
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          background: theme.palette.primary.light,
          padding: "1rem 2rem",
          border: `0.5rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",
          "&:hover": {
            border: `0.4rem dashed ${theme.palette.primary.main}`,
          },

          ["@media (max-width:600px)"]: {
            padding: "1rem",
            borderRadius: "1rem",
            border: `0.4rem dashed ${theme.palette.primary.main}`,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          background: theme.palette.primary.light,
          borderRadius: "1rem",
        }),
        notchedOutline: ({ theme }) => ({
          textTransform: "none",
          border: `0.2rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",
          "&:hover": {
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },

          ["@media (max-width:600px)"]: {
            padding: "1rem",
            borderRadius: "1rem",
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },
        }),
      },
    },
  },
});

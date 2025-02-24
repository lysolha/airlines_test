import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4A2626",
      light: "#E9CB96",
      dark: "#A9957E",
    },
    secondary: {
      main: "#03dac6",
      light: "#F4ECD0",
    },
  },
  typography: {
    fontFamily: "'JosefinSans', sans-serif",
    h1: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "4rem",
      width: "fit-content",
      ["@media (max-width:600px)"]: {
        fontSize: "2rem",
      },
      ["@media (min-width:600px) and (max-width:900px)"]: {
        fontSize: "3rem",
      },
    },
    h2: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "2rem",
      ["@media (max-width:600px)"]: {
        fontSize: "1rem",
      },
    },
    h3: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "1.5rem",
      ["@media (max-width:600px)"]: {
        fontSize: "0.8rem",
      },
    },
    h4: {
      color: "#4A2626",
      fontFamily: "JosefinSans",
      fontSize: "1.5rem",
      ["@media (max-width:600px)"]: {
        fontSize: "0.8rem",
      },
    },
    body1: {
      fontFamily: "'JosefinSans', sans-serif",
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: "Piedra",
          fontSize: "1rem",
          textTransform: "none",
          borderRadius: "1rem",
          width: "fit-content",
          color: theme.palette.secondary.light,
          backgroundColor: theme.palette.primary.main,
          border: `0.2rem dashed ${theme.palette.secondary.light}`,
          transition: "transform 0.2s ease-in-out",

          "&:hover": {
            transform: "scale3d(1.03, 1, 1)",
          },

          "&.Mui-disabled": {
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.grey[700],
            border: `0.2rem dashed ${theme.palette.grey[700]}`,
          },

          variants: [
            {
              props: { variant: "full" },
              style: {
                width: "100%",
                height: "100%",
              },
            },
          ],
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          backgroundColor: theme.palette.primary.light,
          padding: "1rem 2rem",
          border: `0.2rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",

          ["@media (max-width:600px)"]: {
            padding: "1rem",
            borderRadius: "1rem",
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1rem",
          textTransform: "none",
          backgroundColor: theme.palette.primary.light,
          padding: "1rem",
          border: `0.2rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",

          ["@media (max-width:600px)"]: {
            padding: "1rem",
            borderRadius: "1rem",
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "1rem",
          alignSelf: "end",
          width: "fit-content",
          backgroundColor: theme.palette.primary.light,
          border: `0.2rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",

          ["@media (max-width:600px)"]: {
            padding: "1rem",
            borderRadius: "1rem",
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiCardContent-root": {
            ":last-child": {
              padding: 0,
            },
          },
          variants: [
            {
              props: { variant: "bortPass" },
              style: {
                padding: "3rem 0rem",
                backgroundColor: theme.palette.primary.main,
                border: `0.2rem dashed ${theme.palette.secondary.light}`,

                "& .MuiCardContent-root": {
                  padding: "1rem 2rem",
                  backgroundColor: theme.palette.secondary.light,

                  ":last-child": {
                    padding: "1rem 2rem",
                  },
                },
              },
            },
          ],
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.light,
          borderRadius: "1rem",
          cursor: "pointer",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `0.2rem dashed ${theme.palette.primary.main}`,
          },
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

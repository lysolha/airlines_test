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
  breakpoints: {
    values: {
      xs: 0,
      s: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "'JosefinSans', sans-serif",
    h1: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "4rem",
      width: "fit-content",
      textAlign: "center",
      "@media (max-width:1200px)": {
        fontSize: "3rem",
      },
      "@media (max-width:900px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "2rem",
      "@media (max-width:900px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      color: "#4A2626",
      fontFamily: "Piedra",
      fontSize: "1.5rem",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      color: "#4A2626",
      fontFamily: "JosefinSans",
      fontSize: "1.5rem",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontFamily: "'JosefinSans', sans-serif",
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "transparent",
          margin: "0 auto",
          padding: "3rem 0",
          maxWidth: "1200px",
          "@media (max-width:900px)": {
            maxWidth: "900px",
            margin: "0 1rem",
            padding: "1.5rem 0",
          },
          "@media (max-width:1200px)": {
            margin: "0 3rem",
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: ({ theme }) => ({
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",

          [theme.breakpoints.down("sm")]: {
            margin: "0",
            flexDirection: "column",
          },
        }),
      },
    },
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
          padding: "1rem",

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
                padding: 0,
                width: "100%",
                height: "100%",
              },
            },
          ],
        }),
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 6,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          backgroundColor: theme.palette.primary.light,
          padding: "1rem 2rem",
          border: `0.2rem dashed ${theme.palette.primary.main}`,
          borderRadius: "1rem",
          width: "100%",
          transition: "transform 0.2s ease-in-out",

          // ["@media (max-width:600px)"]: {
          //   padding: "1rem",
          //   borderRadius: "1rem",
          //   border: `0.2rem dashed ${theme.palette.primary.main}`,
          // },

          variants: [
            {
              props: { variant: "bortPass" },
              style: {
                padding: "0.5rem",
                backgroundColor: theme.palette.primary.main,
                border: `0.2rem dashed ${theme.palette.secondary.light}`,
              },
            },
          ],
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

          // ["@media (max-width:600px)"]: {
          //   padding: "1rem",
          //   borderRadius: "1rem",
          //   border: `0.2rem dashed ${theme.palette.primary.main}`,
          // },
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

          // ["@media (max-width:600px)"]: {
          //   padding: "1rem",
          //   borderRadius: "1rem",
          //   border: `0.2rem dashed ${theme.palette.primary.main}`,
          // },
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 6,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.light,
          transition: "transform 0.2s ease-in-out",
          cursor: "pointer",

          "&:hover": {
            transform: "scale3d(1.01, 1, 1)",
          },
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
                transform: "none",
                cursor: "auto",

                "&:hover": {
                  transform: "none",
                },

                "& .MuiCardContent-root": {
                  padding: "1rem 2rem",
                  backgroundColor: theme.palette.secondary.light,

                  ":last-child": {
                    padding: "1rem 2rem",
                  },
                },
              },
            },
            {
              props: { variant: "ticket" },
              style: {
                minWidth: "10rem",
                backgroundColor: theme.palette.secondary.light,
                borderColor: theme.palette.primary.main,
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

          // ["@media (max-width:600px)"]: {
          //   padding: "1rem",
          //   borderRadius: "1rem",
          //   border: `0.2rem dashed ${theme.palette.primary.main}`,
          // },
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          fill: theme.palette.primary.main,
          transition: "transform 0.2s ease-in-out",

          "&:hover": {
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
        }),
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.primary.light}`,
          color: theme.palette.primary.light,
          fontFamily: "Piedra",

          "&.MuiBadge-badge": {
            color: theme.palette.primary.light,
            fontFamily: "Piedra",
          },
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          flexWrap: "wrap",
        }),
      },
    },
  },
});

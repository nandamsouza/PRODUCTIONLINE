export const useStyles = {
  container: {
    display: "flex",
    gap: "15px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  input: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
    },
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
};

export const styledLine = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
  },

  contextActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },

  contextModal: {
    p: 3,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
};

export const styledForm = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  contextButton: {
    display: "flex",
    justifyContent: "end",
    gap: 2,
  },
};

const Typography = {
  fontFamily: [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Arial",
    "sans-serif",
  ].join(","),
  h2: {
    fontWeight: "900",
    fontSize: "4rem",
    "@media (max-width:800px)": {
      fontSize: "3rem",
    },
  },
  h5: {
    "@media (max-width:800px)": {
      fontSize: "1.25rem",
    },
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
  },
  // subtitle1: {
  //   fontSize: "1.7rem",
  // },
};

export default Typography;

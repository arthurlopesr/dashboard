export const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
  },

  colors: {
    mainbg: " #2a3447",
    softbg: "#384256",
    darkbg: "#222b3c",
    maincolor: "#FFF",
    softcolor: "#ddd",
    darkcolor: "#2a3447",
  },

  borderRadius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "10px",
    xlg: "20px",
    full: "999px"
  },

  space: {
    px: "1px",
    1: "0.25rem",
    2: "0.50rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.21rem",
    6: "1.50rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.5rem",
    10: "3rem",
    11: "3.5rem",
    12: "4rem",
    13: "4.5rem",
    14: "5rem",
    15: "5.5rem",
    20: "8rem",
    30: "13rem",
    40: "18rem",
    50: "23rem",
    80: "36rem",
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;

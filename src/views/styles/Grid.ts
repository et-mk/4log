import GridSystem from '@model/GridSystem';

const Grid: GridSystem = {
  breakpoints: {
    // defaults below
    hg: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 16, // default 15
  },
  col: {
    padding: 16, // default 15
  },
  container: {
    padding: 16, // default 15
    maxWidth: {
      // defaults below
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

export default Grid;

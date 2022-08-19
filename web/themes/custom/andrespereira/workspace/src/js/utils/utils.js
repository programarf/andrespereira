const deviceDetect = {
  breakpointMobile: "768px",

  isMobile: function () {
    return window.matchMedia(`(max-width: ${this.breakpointMobile})`).matches;
  },
};

export { deviceDetect };
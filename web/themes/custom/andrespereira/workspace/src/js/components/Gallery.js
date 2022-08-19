import Flickity from "flickity";

const SELECTORS = {
  componentPtBannerCarousel: ".js-slider",
};

window.Drupal.behaviors.gallery = {
  attach: (context) => {
    const ins = {};
    for (const instance in SELECTORS) {
      ins[instance] = [...context.querySelectorAll(SELECTORS[instance])];
      if (ins[instance].length) {
        for (const component of ins[instance]) {
          if (component.children.length > 1) {
            const flickity = new Flickity(component, {
              cellAlign: "center",
              wrapAround: true,
              lazyLoad: true,
              contain: true,
              pageDots: false,
              adaptiveHeight: true,
              imagesLoaded: true,
            });
          }
        }
      }
    }
  },
};

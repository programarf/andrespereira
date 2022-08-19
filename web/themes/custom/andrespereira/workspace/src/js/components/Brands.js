import Flickity from "flickity";

const SELECTORS = {
  componentPtBrandas: ".paragraph--type--block-logos .field__items",
};

window.Drupal.behaviors.brands = {
  attach: (context) => {
    const ins = {};
    for (const instance in SELECTORS) {
      ins[instance] = [...context.querySelectorAll(SELECTORS[instance])];
      if (ins[instance].length) {
        for (const component of ins[instance]) {
          if (component.children.length > 1) {
            const flickity = new Flickity(component, {
              cellAlign: "center",
              prevNextButtons: false,
              lazyLoad: true,
              contain: true,
              pageDots: false,
              imagesLoaded: true,
              wrapAround: true,
              autoPlay: true,
              autoPlay: 1000,
              pauseAutoPlayOnHover: true
            });
          }
        }
      }
    }
  },
};

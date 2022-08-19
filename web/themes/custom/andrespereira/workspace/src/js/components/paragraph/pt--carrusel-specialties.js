import Flickity from "flickity";

const SELECTORS = {
  componentPtCSpecielties: ".paragraph--type--carrusel-specialties .field--name-field-group",
  componentPtCWorkshops: ".field--name-field-mbw-content",

};

window.Drupal.behaviors.ptcspecielties = {
  attach: (context) => {
    const ins = {};
    for (const instance in SELECTORS) {
      ins[instance] = [...context.querySelectorAll(SELECTORS[instance])];
      if (ins[instance].length) {
        for (const component of ins[instance]) {
          if (component.children.length > 1) {
            const flickity = new Flickity(component, {
              cellAlign: "left",
              wrapAround: true,
              lazyLoad: true,
              prevNextButtons: true,
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

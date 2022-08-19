import Flickity from "flickity";

const SELECTORS = {
  componentVCourses: ".view-courses-and-workshops .view-content",
};

window.Drupal.behaviors.courses = {
  attach: (context) => {
    const ins = {};
    for (const instance in SELECTORS) {
      ins[instance] = [...context.querySelectorAll(SELECTORS[instance])];
      if (ins[instance].length) {
        for (const component of ins[instance]) {
          if (component.children.length > 1) {
            const flickity = new Flickity(component, {
              cellAlign: "left",
              prevNextButtons: true,
              lazyLoad: true,
              contain: true,
              pageDots: true,
              imagesLoaded: true,
              wrapAround: true,
              adaptiveHeight: false,
            });
          }
        }
      }
    }
  },
};

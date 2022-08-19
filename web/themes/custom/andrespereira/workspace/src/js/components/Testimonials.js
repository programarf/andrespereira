import Flickity from "flickity";

const SELECTORS = {
  componentVSTestimonials: ".view-testimonials .view-content",
};

window.Drupal.behaviors.testimonials = {
  attach: (context) => {
    const ins = {};
    for (const instance in SELECTORS) {
      ins[instance] = [...context.querySelectorAll(SELECTORS[instance])];
      if (ins[instance].length) {
        for (const component of ins[instance]) {
          if (component.children.length > 1) {
            const flickity = new Flickity(component, {
              cellAlign: "right",
              prevNextButtons: true,
              lazyLoad: true,
              contain: true,
              pageDots: false,
              imagesLoaded: true,
              wrapAround: true,
              adaptiveHeight: true,
            });

          }
        }
      }

      const redSocial = context.querySelectorAll('.paragraph--type--social-media .field__items > a .paragraph--type--item-social-media .field--name-field-social-media');

      if (redSocial) {
        for (let index = 0; index < redSocial.length; index++) {
          const elementRs = redSocial[index].innerHTML;    
          if (elementRs === 'Instagram') {
            redSocial[index].classList.add('instagram');
            } else if (elementRs === 'Facebook') {
            redSocial[index].classList.add('facebook');
          } else if (elementRs === 'Twitter') {
            redSocial[index].classList.add('twitter');
          }
        }
      }

    }
  },
};

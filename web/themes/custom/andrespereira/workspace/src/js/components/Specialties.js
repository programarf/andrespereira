import Flickity from "flickity";
import { deviceDetect } from "../utils/utils";

const SELECTORS = {
  componentVSpecialties: ".view-specialties .view-content",
  componentVSBlock: ".paragraph--type--block-workshops--content .field--name-field-bw-content ",
};

window.Drupal.behaviors.specialties = {
  attach: (context) => {
    if (deviceDetect.isMobile()) {
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
              });
            }
          }
        }
      }
    }
  },
};

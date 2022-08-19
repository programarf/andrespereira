import Flickity from "flickity";

const SELECTORS = {
  componentPtStudies: ".paragraph--type--studies .field--name-field-items",
};

window.Drupal.behaviors.ptstudies = {
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
              prevNextButtons: false,
              contain: true,
              pageDots: true,
              adaptiveHeight: true,
              autoPlay: 2200,
              imagesLoaded: true,
              pauseAutoPlayOnHover: false
            });

            // Play - Pause
            const flickityPageDots = context.querySelector('.flickity-page-dots');
            const flickityPageDotsLi = context.querySelector('.flickity-page-dots li:first-child');

            if (flickityPageDots && flickity) {
              const nodeDivPaused = context.createElement('div');
              // nodeDivPaused.classList.add('dot');  
              nodeDivPaused.classList.add('dot-paused');
              flickityPageDots.insertBefore(nodeDivPaused, flickityPageDotsLi);

              const flickityPaused = context.querySelector('.flickity-page-dots .dot-paused');
              const nodeDivPlay = context.createElement('div');
              // nodeDivPlay.classList.add('dot');
              nodeDivPlay.classList.add('dot-play');
              flickityPageDots.insertBefore(nodeDivPlay, flickityPaused);

              const btnPlay = context.querySelector('div.dot-play');
              const btnPaused = context.querySelector('div.dot-paused');

              btnPlay.addEventListener('click', function () {
                flickity.playPlayer();
              })
              btnPaused.addEventListener('click', function () {
                flickity.stopPlayer();
              })
            }

          }
        }
      }
    }
  },
};

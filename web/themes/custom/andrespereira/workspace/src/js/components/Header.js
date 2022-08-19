import { deviceDetect } from "../utils/utils";

const SELECTORS = {
  componentScrollToBody: "body",
  componentContactForm: 'form.webform-submission-contact-form',
};

window.Drupal.behaviors.scrollto = { 
  attach: (context) => {
    const scrollToBody = context.querySelector(SELECTORS.componentScrollToBody);
    const contactForm = context.querySelector(SELECTORS.componentContactForm); 
    let scrollPosition = 0;

    context.addEventListener('scroll', function (e) {
      scrollPosition = parseInt(window.scrollY);
      if (scrollPosition >= 56) {
        scrollToBody.classList.add('scrolled--header');
      } else {
        scrollToBody.classList.remove('scrolled--header');
      }
    });

    if (deviceDetect.isMobile()) {
      const navBarMain = context.querySelector('#navbar-main');
      const navBarToggler = context.querySelector('.navbar-toggler');
      const divContactoMobile = context.createElement('div');
      divContactoMobile.setAttribute('id','block-blockcontacto-mobile');

      navBarMain.insertBefore(divContactoMobile, navBarToggler);
      divContactoMobile.addEventListener('click', function (event) {    
        contactForm.classList.add('show-contact-form');
      });
    }
  },
};
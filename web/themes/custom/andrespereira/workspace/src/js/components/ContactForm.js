const SELECTORS = {
  componentContact: "#block-blockcontacto",
  componentContactForm: 'form.webform-submission-contact-form'
};

window.Drupal.behaviors.contact = {
  attach: (context) => {
    const contact = context.querySelector(SELECTORS.componentContact);
    const contactForm = context.querySelector(SELECTORS.componentContactForm);
    const bodyTag = context.querySelector('body');

    if (contact != null) {
      contact.addEventListener('click', function (event) {
        contactForm.classList.add('show-contact-form');
        bodyTag.classList.add('active-contact-form');
      });

      const contactCloseDiv = context.createElement('div');
      contactCloseDiv.classList.add('btn-close');
      const contactCloseEm = context.querySelector('#edit-markup');
      contactForm.insertBefore(contactCloseDiv, contactCloseEm);

      contactCloseDiv.addEventListener('click', function (event) {
        contactForm.classList.remove('show-contact-form');
        bodyTag.classList.remove('active-contact-form');
      });
    }
  },
};
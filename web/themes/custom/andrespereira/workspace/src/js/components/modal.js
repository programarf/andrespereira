window.Drupal.behaviors.modal = {
  attach: (context) => {
    let ifToBe = document.getElementsByClassName('paragraph--type--slider-other-studies--modal')
    let fieldIosCta = context.querySelectorAll('.field--name-field-ios-cta')

    if (ifToBe.length > 0) {
      let otherStudieModal = context.querySelectorAll('.paragraph--type--slider-other-studies--modal')
      for (let index = 0; index < otherStudieModal.length; index++) {
        const element = otherStudieModal[index]
        let closed = document.createElement("div")
        element.setAttribute('data-modal', index)
        closed.classList.add('icon-close')
        element.prepend(closed);
        closed.addEventListener("click", function (event) {
          event.target.parentElement.classList.remove('active-modal')
        })
      }
      for (let index = 0; index < fieldIosCta.length; index++) {
        const element = fieldIosCta[index];
        element.setAttribute('data-modal', index + 1)
        element.addEventListener("click", function (event) {
          event.preventDefault()
          let overflowModal = document.createElement("div")
          document.querySelector('body').classList.add('active-modal')
          overflowModal.classList.add('overflow-modal')
          document.querySelector('body').prepend(overflowModal);

          let dataModal = element.getAttribute('data-modal');
          let arraModal = [...otherStudieModal]
          arraModal[dataModal - 1].classList.add('active-modal')
        });
      }
    }
  },
};

window.Drupal.behaviors.modal2 = {
  attach: (context) => {
    let ifToBe2 = document.getElementsByClassName('paragraph--type--half-item-templatetwo--modal')
    let fieldIosCta2 = context.querySelectorAll('.paragraph--type--half-item-templatetwo--cta a')

    if (ifToBe2.length > 0) {
      let otherStudieModal = context.querySelectorAll('.paragraph--type--half-item-templatetwo--modal')
      for (let index = 0; index < otherStudieModal.length; index++) {
        const element = otherStudieModal[index]
        let closed = document.createElement("div")
        element.setAttribute('data-modal', index)
        closed.classList.add('icon-close')
        element.prepend(closed);
        closed.addEventListener("click", function (event) {
          event.target.parentElement.classList.remove('active-modal')
        })
      }
      for (let index = 0; index < fieldIosCta2.length; index++) {
        const element = fieldIosCta2[index];
        element.setAttribute('data-modal', index + 1)
        element.addEventListener("click", function (event) {
          event.preventDefault()
          let overflowModal = document.createElement("div")
          document.querySelector('body').classList.add('active-modal')
          overflowModal.classList.add('overflow-modal')
          document.querySelector('body').prepend(overflowModal);

          let dataModal = element.getAttribute('data-modal');
          let arraModal = [...otherStudieModal]
          arraModal[dataModal - 1].classList.add('active-modal')
        });
      }
    }
  },
};

window.Drupal.behaviors.modalCursos = {
  attach: (context) => {
    let ifToBe3 = document.getElementsByClassName('paragraph--type--card-modal-courses-and-workshops--modal')
    let fieldIosCta2 = context.querySelectorAll('.field--name-field-mcw-cta a')

    if (ifToBe3.length > 0) {
      let otherStudieModal = context.querySelectorAll('.paragraph--type--card-modal-courses-and-workshops--modal')
      for (let index = 0; index < otherStudieModal.length; index++) {
        const element = otherStudieModal[index]
        let closed = document.createElement("div")
        element.setAttribute('data-modal', index)
        closed.classList.add('icon-close')
        element.prepend(closed);
        closed.addEventListener("click", function (event) {
          event.target.parentElement.classList.remove('active-modal')
        })
      }
      for (let index = 0; index < fieldIosCta2.length; index++) {
        const element = fieldIosCta2[index];
        element.setAttribute('data-modal', index + 1)
        element.addEventListener("click", function (event) {
          event.preventDefault()
          let overflowModal = document.createElement("div")
          document.querySelector('body').classList.add('active-modal')
          overflowModal.classList.add('overflow-modal')
          document.querySelector('body').prepend(overflowModal);

          let dataModal = element.getAttribute('data-modal');
          let arraModal = [...otherStudieModal]
          arraModal[dataModal - 1].classList.add('active-modal')
        });
      }
    }
  },
};

window.Drupal.behaviors.blockWorkshops = {
  attach: (context) => {
    let ifToBe4 = document.getElementsByClassName('field--name-field-iw-modal')
    let fieldIosCta2 = context.querySelectorAll('.field--name-field-iw-cta a')

    if (ifToBe4.length > 0) {
      let otherStudieModal = context.querySelectorAll('.field--name-field-iw-modal')
      for (let index = 0; index < otherStudieModal.length; index++) {
        const element = otherStudieModal[index]
        let closed = document.createElement("div")
        element.setAttribute('data-modal', index)
        closed.classList.add('icon-close')
        element.prepend(closed);
        closed.addEventListener("click", function (event) {
          event.target.parentElement.classList.remove('active-modal')
        })
      }
      for (let index = 0; index < fieldIosCta2.length; index++) {
        const element = fieldIosCta2[index];
        element.setAttribute('data-modal', index + 1)
        element.addEventListener("click", function (event) {
          event.preventDefault()
          let overflowModal = document.createElement("div")
          document.querySelector('body').classList.add('active-modal')
          overflowModal.classList.add('overflow-modal')
          document.querySelector('body').prepend(overflowModal);

          let dataModal = element.getAttribute('data-modal');
          let arraModal = [...otherStudieModal]
          arraModal[dataModal - 1].classList.add('active-modal')
        });
      }
    }
  },
};
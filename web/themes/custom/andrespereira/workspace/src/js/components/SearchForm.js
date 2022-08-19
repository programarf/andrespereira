const SELECTORS = {
  componentSearchForm: "#block-formulariodebusqueda",
};

window.Drupal.behaviors.searchform = {
  attach: (context) => {
    const searchFormComponent = context.querySelector(SELECTORS.componentSearchForm);
    if (searchFormComponent) {
      const inputSearch = searchFormComponent.querySelector('input');
      const btnSearch = searchFormComponent.querySelector('button');
      const bodyPath = context.querySelector('body.path-search');

      btnSearch.addEventListener("mouseover", (event) => { 
        inputSearch.classList.add('input--show');
      });
      
      searchFormComponent.addEventListener("mouseleave", (event) => { 
        inputSearch.classList.remove('input--show');
      });

      if (bodyPath) {
        inputSearch.classList.add('input--show');
        searchFormComponent.addEventListener("mouseleave", (event) => { 
          inputSearch.classList.add('input--show');
        });
      }

    }
  },
};
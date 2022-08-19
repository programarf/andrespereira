window.Drupal.behaviors.pstTabs = {
  attach: (context) => {
    let block = document.getElementsByClassName('paragraph--type--block-switch--content')
    if (block > 0) {
      let items = block.querySelectorAll('.field--name-field-pst-tabs > a')

      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element)
      }
    }
  }
}

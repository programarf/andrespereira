<?php

/**
 * Implements hook_preprocess_hook().
 *
 * @{inheritdoc}
 */
function andrespereira_preprocess_paragraph__banner_carousel(&$variables) {
  /** @var \Drupal\Core\Entity\EntityInterface[] */
  $carousel_items = $variables['paragraph']->field_bc_banners->referencedEntities();
  $variables['prep']['carousels'] = _render_carousel_items($carousel_items);
  unset($variables['content']['field_carousel_items']);
}

/**
 * Render slide items
 *
 * @param \Drupal\Core\Entity\EntityInterface[] $carousel_items
 * @return array
 */
function _render_carousel_items($carousel_items) {
  $lang_code = \Drupal::service('language_manager')->getCurrentLanguage()->getId();
  $carousel_arr = [];

  foreach ($carousel_items as $carousel_item) {

    $carousel_item = $carousel_item->getTranslation($lang_code);

    /** @var \Drupal\Core\Field\FieldItemListInterface */
    $title = $carousel_item->field_ib_title;
    $body = $carousel_item->field_ib_body;
    $image = $carousel_item->field_ib_image;
    $cta = $carousel_item->field_ib_cta;
    $support =  $carousel_item->field_ib_support;


    $carousel_arr[] = [
      'title' => $title->view('full'),
      'body' => $body->view('full'),
      'image' => $image->view('full'),
      'cta' => $cta->view('full'),
      'support' => $support->view('full')
    ];
  }

  return  $carousel_arr;
}

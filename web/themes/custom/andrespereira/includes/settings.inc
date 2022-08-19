<?php
/*/**
 * General theme functions
 * Node and Taxonomy bundle
 */

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Url;
use Drupal\Component\Render\FormattableMarkup;
use Drupal\Component\Utility\Xss;

function andrespereira_preprocess(&$variables, $hook){
    $variables['base_path'] = base_path();
}

function andrespereira_theme_suggestions_taxonomy_term_alter(&$suggestions, $vars, $hook) {
  $term = $vars['elements']['#taxonomy_term'];
  $parent = \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadParents($term->id());
  $suggestions[] = 'taxonomy_term__' . $term->bundle() . '__' . $vars['elements']['#view_mode'];
  $isChildren = $parent ? 'subterm' : 'parent';
  $suggestions[] = 'taxonomy_term__' . $term->bundle()
                    . '__'
                    . $vars['elements']['#view_mode']
                    .'_'
                    . $isChildren;
}

function andrespereira_preprocess_taxonomy_term(&$variables) {
  $tid = $variables['elements']['#taxonomy_term']->id();
  $parent =  \Drupal::entityTypeManager()->getStorage('taxonomy_term')->loadParents($tid);
  $variables['isParent'] = $parent == NULL;

  // Object for taxonomy field.
  $variables['parent'] = [];
  if ($parent):
    $parent = reset($parent);
    $parent_tid = $parent->id();
    $term = \Drupal::entityTypeManager()
            ->getStorage('taxonomy_term')
            ->load($parent_tid);

    /** @var \Drupal\Core\Field\FieldItemListInterface */
    $shield = $term->field_school_shield->view('full');
    $links = $term->field_enlaces_externos->view('full');
    $variables['parent']['shield'] = $shield ? $shield : 'Empty Shield';
    $variables['parent']['external'] = $links ? $links : 'No Links';
  endif;
}

function andrespereira_preprocess_node(&$variables) {
  $node = $variables['node'];
  $options = [
    'absolute' => true,
  ];
  $variables['full_url'] = $node->toUrl()->setAbsolute()->toString();
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Add views unformatted template suggestions.
 *
 * @inheritdoc
 */
function andrespereira_theme_suggestions_views_view_unformatted_alter(array &$suggestions, array $variables) {
  return [
    'views_view_unformatted__' . $variables['view']->id()
  ];
}

export const wordpressBlog = {
  title: 'WordPress Custom Theme Development',
  description: 'Building a custom WordPress theme for travel blog',
  language: 'php',
  code: `<?php
// functions.php - Custom theme functions
function hidden_gems_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');

    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'footer' => 'Footer Menu'
    ));
}
add_action('after_setup_theme', 'hidden_gems_theme_setup');

// Custom post type for destinations
function create_destination_post_type() {
    register_post_type('destination',
        array(
            'labels' => array(
                'name' => 'Destinations',
                'singular_name' => 'Destination'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-location-alt'
        )
    );
}
add_action('init', 'create_destination_post_type');

// Enqueue scripts and styles
function hidden_gems_scripts() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_script('navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'hidden_gems_scripts');
?>`
};

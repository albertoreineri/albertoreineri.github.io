---
title: "2. Create a WordPress Theme from Scratch – Parte 2"
desription: "Part 2: Tutorial on how to develop a custom WordPress theme from scratch. Let's see how to create your first WP theme"
date: "2020-04-30"
url: "/en/blog/create-a-wordpress-theme-from-scratch-2"
categories:
  - WordPress DEV
---

In the **[Part 1](/en/blog/create-a-wordpress-theme-from-scratch-1/)** of this guide on **how to create a WordPress theme from scratch**, we started building our first WordPress theme, developing the **header**, **footer**, and **sidebar**, and learning how the **WordPress loop** works.

Now, let's proceed to make the content of various sections dynamic!

## MENU

WordPress allows you to set up **menus** in the "**Appearance - Menu**" section.

The menus created in the backend can be inserted in the frontend, making any changes easier. Let's see how to do it.

First of all, we need to **enable our theme to use menus**. If you try to go to the backend in the "Appearance - Menu" section, you won't find it yet.

To enable it, we need to create the most important file in the entire theme: _**functions.php**_.

So, create a file called _functions.php_ and insert the following code:

```php
<?php
// Theme setup
function my_theme_setup() {
    // Set up the menu for the navbar
    register_nav_menus(array(
        'navigation' => __('Navbar Menu', 'my-theme'),
    ));
}

add_action('after_setup_theme', 'my_theme_setup');
```

We've created a **theme setup function** that we'll use later to insert other customizations. Here, we've **registered a new menu** using the _register_nav_menus_ function and named it '**Navbar Menu**'.

If you go to the **backend** now, you will see that the "Appearance - Menu" section is active and usable.

Now, let's proceed to **create a new menu**:

![Create Menu](/images/image-31.png)

For now, let's just add the home page and the default WordPress sample page to have some content in it, and click "**Create Menu**".

Then, we can set the menu in the **"Navbar Menu"** position:

![Set Menu](/images/image-32.png)

Now, all that's left is to **insert this menu into our navigation bar**, in the theme's header.

So, open _header.php_ and replace the <ul> of the nav with this:

```php
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <?php
    $args = array(
        'theme_location' => 'navigation',
        'depth'      => 2,
        'container' => false,
        'menu_class' => 'navbar-nav ml-auto',
        'add_li_class'  => 'nav-item',
        'link_class'   => 'nav-link',
        'walker'     => new Bootstrap_Walker_Nav_Menu()
    );
    ?>
    <?php wp_nav_menu($args); ?>
</div>
```

**IMPORTANT**: To select the right menu, we've set _theme_location_ to the menu registration name entered in functions.php.

To properly make the **Bootstrap dropdown** work, we still need to add a function to handle the various submenus. This function is called a "**walker**". You can simply paste this code into _functions.php_:

```php
// Custom Walker Class for Bootstrap Menu
add_action('after_setup_theme', 'bootstrap_setup');

if (!function_exists('bootstrap_setup')) :

function bootstrap_setup()
{
    class Bootstrap_Walker_Nav_Menu extends Walker_Nav_Menu
    {
        function start_lvl(&$output, $depth = 0, $args = array())
        {
            $indent = str_repeat("\t", $depth);
            $output    .= "\n$indent<ul class=\"dropdown-menu\">\n";
        }

        function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
        {
            $indent = ($depth) ? str_repeat("\t", $depth) : '';

            $li_attributes = '';
            $class_names = $value = '';

            $classes = empty($item->classes) ? array() : (array)$item->classes;
            $classes[] = ($args->walker->has_children) ? 'dropdown' : '';
            $classes[] = ($item->current || $item->current_item_ancestor) ? 'active' : '';
            $classes[] = 'menu-item-' . $item->ID;
            $classes[] = 'nav-item';

            $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
            $class_names = ' class="' . esc_attr($class_names) . '"';

            $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
            $id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';

            $output .= $indent . '<li' . $id . $value . $class_names . $li_attributes . '>';

            $attributes  = !empty($item->attr_title) ? ' title="'  . esc_attr($item->attr_title) . '"' : '';
            $attributes .= !empty($item->target)     ? ' target="' . esc_attr($item->target)     . '"' : '';
            $attributes .= !empty($item->xfn)        ? ' rel="'    . esc_attr($item->xfn)        . '"' : '';
            $attributes .= !empty($item->url)        ? ' href="'   . esc_attr($item->url)        . '"' : '';
            $attributes .= ($args->walker->has_children)      ? ' class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"' : 'class="nav-link"';

            $item_output = $args->before;
            $item_output .= ($depth > 0) ? '<a class="dropdown-item"' . $attributes . '> ' : '<a' . $attributes . '>';
            $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
            $item_output .= '</a>';
            $item_output .= $args->after;

            $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
        }
    }
}
endif;
```

Now, if you save and update, you should have a **working and dynamic menu!**

## WIDGET

**Widgets** are a crucial part of WordPress. They allow you to create a **section that can be inserted in multiple parts of the site** easily and quickly.

### INITIALIZE WIDGETS

To initialize a widget, we need to go to _functions.php_ again and insert this code:

```php
// Widgets
function InitializeWidgets() {
    register_sidebar( array(
        'name' => 'Sidebar',
        'id' => 'sidebar1',
        'before_widget' => '<div class="sidebar">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));
}

add_action('widgets_init', 'InitializeWidgets');
```

Now we've **added the ability to insert widgets in

 the sidebar**. The widgets will be inserted in a div with the class "**sidebar**", and the title of each widget will be an `<h3>`.

If we go to the backend in "Appearance - Widgets," we'll see an area reserved for the sidebar:

![Widgets in Sidebar](/images/image-33.png)

Let's try inserting some widgets into it. Currently, they won't be displayed in the frontend.

We need to **tell the sidebar to take its content through the widgets**!

So, open your _sidebar.php_ file, delete everything, and replace the code with this:

```php
<!-- SIDEBAR -->
<div class="col-sm-3 col-sm-offset-1 blog-sidebar">
    <?php if (is_active_sidebar('sidebar1')) : ?>
        <?php dynamic_sidebar('sidebar1'); ?>
    <?php endif; ?>
</div>
<!-- /SIDEBAR -->
```

Now, in the backend, try inserting the **"Recent Articles" Widget** into the sidebar, entering "Recent Articles" as the title and saving.

![Insert Widget](/images/image-34-1.png)

If everything went smoothly, you should see the latest articles appearing in the sidebar!

![Widget in Sidebar](/images/image-35.png)

**Fantastic! You've just created a widget!**

You can create **widgets in other parts of the site** as well, for example, in the footer.

**Exercise:**

Try creating some widgets yourself now.

Create 4 widgets to be placed in the footer of the site. Remember, you need to register 4 areas for the footer in _functions.php_ and go to the _footer.php_ file to insert the right areas!

Here's the result in the frontend:

![Widgets in Footer](/images/image-36.png)

Take some time and try doing it. Below, I'll leave you **the code:**

**functions.php**

```php
// Widgets
function InitializeWidgets() {
    register_sidebar( array(
        'name' => 'Sidebar',
        'id' => 'sidebar1',
        'before_widget' => '<div class="sidebar">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>',
    ));

    register_sidebar( array(
        'name' => 'Footer Area 1',
        'id' => 'footer1',
        'before_widget' => '<div class="widget-item">',
        'after_widget' => '</div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ));

    register_sidebar( array(
        'name' => 'Footer Area 2',
        'id' => 'footer2',
        'before_widget' => '<div class="widget-item">',
        'after_widget' => '</div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ));

    register_sidebar( array(
        'name' => 'Footer Area 3',
        'id' => 'footer3',
        'before_widget' => '<div class="widget-item">',
        'after_widget' => '</div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ));

    register_sidebar( array(
        'name' => 'Footer Area 4',
        'id' => 'footer4',
        'before_widget' => '<div class="widget-item">',
        'after_widget' => '</div>',
        'before_title' => '<h2>',
        'after_title' => '</h2>',
    ));
}

add_action('widgets_init', 'InitializeWidgets');
```

**footer.php**

```php
<div class="row">
    <?php if (is_active_sidebar('footer1')) : ?>
        <div class="col-lg-3">
            <?php dynamic_sidebar('footer1'); ?>
        </div>
    <?php endif; ?>

    <?php if (is_active_sidebar('footer2')) : ?>
        <div class="col-lg-3">
            <?php dynamic_sidebar('footer2'); ?>
        </div>
    <?php endif; ?>

    <?php if (is_active_sidebar('footer3')) : ?>
        <div class="col-lg-3">
            <?php dynamic_sidebar('footer3'); ?>
        </div>
    <?php endif; ?>

    <?php if (is_active_sidebar('footer4')) : ?>
        <div class="col-lg-3">
            <?php dynamic_sidebar('footer4'); ?>
        </div>
    <?php endif; ?>
</div>
```

Great, now **the site is starting to take shape!** Let's now create layouts for pages, articles, and archives.

## PAGE LAYOUT

To create a layout dedicated to WordPress pages, we need to go to our theme folder and create a _**page.php**_ file.

**page.php**

```php
<?php get_header(); ?>

<?php
if (have_posts()) :
    while (have_posts()) : the_post();
?>
        <!-- TITLE -->
        <h1><?php the_title(); ?></h1>

        <!-- FEATURED IMAGE -->
        <?php the_post_thumbnail(); ?>

        <!-- CONTENT -->
        <?php the_content(); ?>
<?php
    endwhile;
endif;
?>

<?php get_footer(); ?>
```

This code will allow us to **display the title, featured image, and content** of the page saved in the backend. To differentiate it from articles, we haven't included the sidebar on pages.

Now let's create an article.

### ARTICLE LAYOUT

To create a layout dedicated to articles, we just need to create the _**single.php**_ file inside the theme and insert the loop:

**single.php**

```php
<?php get_header(); ?>

<div class="container">
    <div class="row">
        <!-- CONTENT -->
        <div class="col-lg-8">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
            ?>
                    <!-- TITLE -->
                    <h1><?php the_title(); ?></h1>

                    <!-- FEATURED IMAGE -->
                    <?php the_post_thumbnail(); ?>

                    <!-- CONTENT -->
                    <?php the_content(); ?>
            <?php
                endwhile;
            endif;
            ?>
        </div>
        <!-- SIDEBAR -->
        <div class="col-lg-4">
            <?php get_sidebar(); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
```

In this case, we have the article content on the left and the sidebar on the right.

And here's our nice layout for articles!

## ARCHIVE LAYOUT

An **archive** is a page that contains a **list of posts**.

Let's start by creating a category "**blog**" in the WordPress backend, then insert this category into our navigation menu.

Also, create a couple of articles with the "blog" category, so we have some content to display in the frontend.

Now, go to the theme folder and create a _**archive.php**_ file containing this code:

**archive.php**

```php
<?php get_header(); ?>

<div class="container">
    <div class="row">
        <!-- CONTENT -->
        <div class="col-lg-8">
            <h1>
                <?php
                single_cat_title();
                ?>
            </h1>

            <?php


            if (have_posts()) :
                while (have_posts()) : the_post();
            ?>
                    <a href="<?php the_permalink(); ?>">
                        <div class="article">
                            <!-- TITLE -->
                            <h1><?php the_title(); ?></h1>

                            <!-- FEATURED IMAGE -->
                            <?php the_post_thumbnail(); ?>

                            <!-- CONTENT -->
                            <?php the_excerpt(); ?>
                        </div>
                    </a>
            <?php
                endwhile;
            endif;
            ?>
        </div>
        <!-- SIDEBAR -->
        <div class="col-lg-4">
            <?php get_sidebar(); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
```

As you can see, the **loop is still the same**, but in this case, instead of displaying the content (_the_content_), we have displayed **the excerpt**!

An **excerpt** is a part of the content, a preview of the actual text.

Additionally, we've included the link to each individual article using _**the_permalink**_.

It's not that complicated, right?

**The theme is getting more complete!** We just need a couple more steps. Read **Part 3** to learn how to create a complete WordPress theme!

_[<< Part 1](/en/blog/the-basics-of-html/)_

_[Part 3 >>](/en/blog/creare-un-tema-wordpress-da-zero-parte-3/)_
---
title: "3. Create a WordPress Theme from Scratch – Parte 3"
desription: "Part 3: Tutorial on how to develop a custom WordPress theme from scratch. Let's see how to create your first WP theme"
date: "2020-04-30"
url: "/en/blog/create-a-wordpress-theme-from-scratch-3"
categories:
  - WordPress DEV
---

In the [last tutorials](/categories/wordpress-dev/), we began **creating a WordPress theme from scratch**, and we've already made good progress!

However, there are still a couple of things missing to make our work acceptable. **Let's continue!**

_Remember that at the bottom of this article, you can find a link to the complete theme. You can download it to check for any errors and use it as you like! Consider it a gift!_

But let's get back to the **tutorial**!

## Inserting Images

With WordPress, it's very easy to insert images into articles, pages, or widgets. But what if we want to insert, for example, a logo? Or an image at a specific point on the site?

To do this, we need to use the _get\_template\_directory\_uri_ function, which allows us to **link to our theme's folder**. Let's see how to do it.

### Inserting a Logo in the Navbar

First, go to the folder of your theme and create another folder called "**img**". Now you can put the images you want to include in the theme in this folder. Let's add a logo. I'll call it "**logo.png**".

Now go to our _header.php_ and insert the logo before the title of our site, like this:

```html
<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="" height="50">
```

The _get\_template\_directory\_uri_ function will insert the path to our site's folder, to which we add the path to reach the image.

Try saving and updating the site; you should see **the logo appear** before the site name!

If it looks bad, you can **modify it via CSS**, but for now, let's focus on making it appear!

The _get\_template\_directory\_uri_ function can be used whenever we need to reach something contained in the **folder of our theme.**

We could also use it to insert CSS and JS files into the site, but WordPress has a different system, which we'll see shortly.

## Hooks

In WordPress development, **hooks** are of great importance.

They allow us to _hook into_ these to insert our customizations. This allows us developers to make modifications to our theme without touching the WordPress core.

There are some hooks that are **essential** in every well-made theme.

### wp\_title

One important hook to include is *wp\_title*, which should be placed in the `<title>` meta tag in the `<head>` of the page.

So, open our `header.php` and modify the `<title>` like this:

```html
<title><?php wp_title(); ?></title>
```

This way, the title tag will be **handled by WordPress** in the best way.

### wp\_head

Also in our header, we need to add the _wp\_head_ hook. This allows us to insert our CSS and JS into the `<head>` of the page, as we'll see shortly.

Add this code just before the _</head>_:

```html
<?php wp_head(); ?>
```

### body\_class

Still in our _header.php_, add a hook to the <body>:

```html
<body <?php body_class(); ?>>
```

This way, WordPress will **manage the body** of our theme properly.

### wp\_footer

The last hook we'll add is _wp\_footer_, which allows us to insert content before the _</body>_, such as javascript files.

So, go to the _footer.php_ and insert this just before the </body>:

```html
<?php wp_footer(); ?>
```

## Adding CSS and JS in a WordPress Theme

The **correct method** for including CSS and JS files in a WordPress theme is a bit peculiar.

Although it also works in the classic method of including them in the `<head>` and before the _</body>_ (a method we used in part 1 of this tutorial series), a well-made WordPress theme should include CSS and JS files through the **functions.php file**.

### CSS

Let's open our _functions.php_ file and insert this code to enqueue our style.css file in the theme:

```php
function theme_resources() {
    // CSS
    wp_enqueue_style('bootstrap', 'http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', '', '', 'all');
    wp_enqueue_style('style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'theme_resources');
```

This way, we'll enqueue the _style.css_ file, which is mandatory in every WordPress theme.

Now add the CSS for **[Bootstrap]en//the-basics-of-bootstrap/)** correctly. Add it to this function like this:

```php
wp_enqueue_style('bootstrap', 'http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', '', '', 'all');
```

Remember to include **Bootstrap** as the **first file**, before "style", for proper functioning.

Now go to the _header.php_ and remove the Bootstrap CSS, which will now be inserted correctly via _functions.php_.

### JS

Now let's include the **Bootstrap javascript files** correctly.

Just like CSS, Javascript files need to be included in the same function, like this:

```php
// JS
wp_enqueue_script('jquery-js', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', '', '', true);
wp_enqueue_script('bootstrap-js', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js', '', '', true);
```

Now you can remove the Bootstrap JS files from your **footer.php**.

For simplicity, here is the **entire function** for CSS and JS embedding:

```php
/* CSS and JS */
function theme_resources() {
    // CSS
    wp_enqueue_style('bootstrap', 'http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', '', '', 'all');
    wp_enqueue_style('style', get_stylesheet_uri());

    // JS
    wp_enqueue_script('jquery-js', 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', '', '', true);
    wp_enqueue_script('bootstrap-js', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js', '', '', true);
}
add_action('wp_enqueue_scripts', 'theme_resources');
```

**This way, you have inserted the CSS and JS codes following WordPress Best Practices!**

## Pagination

If our theme starts having many articles, then the archive page will soon become very heavy.

Fortunately, WordPress provides a function that makes **pagination** very easy.

You can decide how many articles to display on archive pages through the "**Settings - Reading**" section.

![Reading Settings](/images/image-38-1.png)

To insert pagination in the frontend, go to your _**archive.php**_ and insert this function **after the** **loop**:

```php
<?php echo paginate_links(); ?>
```

This way, **pagination links will be entirely managed by WordPress!**

Fantastic, isn't it? Nothing could be simpler! All you have to do now is make these links look a bit nicer, via **CSS**.

### Comments

The site is starting to make sense

, but we haven't added a comments section yet! Let's see how to do it!

Start by creating a file called **_comments.php_** in the theme folder.

**comments.php**

```php
<div id="comments" class="comments-area">

    <?php if ( have_comments() ) : ?>
        <h2 class="comments-title">
            <?php
                printf( _nx( 'One comment on "%2$s"', '%1$s Comments on "%2$s"', get_comments_number(), 'comments title', 'beauty-mountain' ),
                    number_format_i18n( get_comments_number() ), '<span>' . get_the_title() . '</span>' );
            ?>
        </h2>

        <ol class="comment-list">
            <?php
                wp_list_comments( array(
                    'style'       => 'ol',
                    'short_ping'  => true,
                    'avatar_size' => 74,
                ) );
            ?>
        </ol><!-- .comment-list -->

        <?php
            // Are there more comments?
            if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
        ?>
        <nav class="navigation comment-navigation" role="navigation">
            <h1 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', 'beauty-mountain' ); ?></h1>
            <div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'beauty-mountain' ) ); ?></div>
            <div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'beauty-mountain' ) ); ?></div>
        </nav><!-- .comment-navigation -->
        <?php endif; ?>

        <?php if ( ! comments_open() && get_comments_number() ) : ?>
        <p class="no-comments"><?php _e( 'Comments are closed.', 'beauty-mountain' ); ?></p>
        <?php endif; ?>

    <?php endif; // have_comments() ?>

    <?php comment_form(); ?>

</div><!-- #comments -->
```

This code will allow you to insert comments. Now go to the **_single.php_** file, the one that contains our articles, and insert the comments template after the content:

```php
<!-- COMMENTS -->
<?php comments_template(); ?>
```

This way, you'll be able to **see comments on your articles!**

**Perfect!** I would say that to start, we've already created something nice!

Before I let you go, I'll share a bit more **CSS** to make our work a bit prettier.

Remember that you can **download the entire theme** to check for errors and make sure you've understood everything well! Click **the button at the bottom** of the article to download the theme!

It's not a perfect theme, but it can be a good **starter theme** for your future projects!

**style.css**

```css
/*
Theme Name: My Theme
Author: WP Specialist
Description: My first WordPress theme
Version: 0.0.1
*/

/*
 * Globals
 */

a:hover{
  text-decoration: none;
}

img{
  max-width: 100%;
  height:auto
}

footer{
  background-color: #888;
  margin-top: 50px;
  padding-top: 50px;
  color:#000;
  margin-bottom: 0;
  padding-bottom: 50px;
}

```

_[<< Part 2](/en/blog/the-basics-of-html/)_

_[Create a Plugin >>](/en/blog/create-a-wordpress-plugin/)_

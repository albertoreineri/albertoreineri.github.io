---
title: "4. Creating a WordPress Plugin"
description: "Tutorial on How to Develop a WordPress Plugin from Scratch. Let's see how to create a plugin tailored to your needs."
url: "/en/blog/create-a-wordpress-plugin"
date: "2020-04-30"
categories:
  - WordPress DEV
---

Have you learned to [create a WordPress theme from scratch](/en/blog/create-a-wordpress-theme-from-scratch-1/) and want to get familiar with **plugins** as well?

You're in the right place!

Creating a plugin for WordPress can be as simple and quick as it can be complex and slow...

In this guide, we'll simply see how to **create a functional WordPress plugin**.

We'll create a plugin that adds a **back-to-top button** to the site. We'll place an upward arrow in the bottom-right corner of the page. Clicking on this arrow will initiate a smooth scroll to the top of the page!

## CREATE THE PLUGIN

Creating a new plugin **is not difficult**.

First, go to the **WordPress plugin folder**: _/wp-content/plugins._

Now, **create a new folder** inside it named "back-on-top" and open the folder with **VS Code**.

Next, create a **file** in this folder called "_back-on-top.php_" and insert the following code into it:

```php
<?php

/**
 * Plugin Name: Back on top
 * Plugin URI: /
 * Description: A simple link to the top of the page
 * Version: 1
 * Author: Alberto Reineri DEV
 * Author URI: http://albydev.net
 * Text Domain: back-on-top
```

This code **indicates to WordPress the existence of the plugin**.

If we save it and go to the backend in "Plugins," we should see "Back on top" in the list. We can then **activate it**.

![Back on top plugin](images/image-41-1024x48-1.png)

At the moment, the plugin **does absolutely nothing**, but we've created it.

Now, let's see how to add functionality to the plugin.

## ADD FUNCTIONALITY TO THE PLUGIN

To add functionality to our plugin, we need to **hook into various WordPress hooks**. In our case, we need to insert an arrow at the bottom of the page, so we'll attach it to the footer.

We can consider the file back-on-top.php as an **extension of functions.php**. Every function we add in the plugin will be added to the current theme.

### INSERT CONTENT INTO THE FOOTER

```php
add_action('wp_footer', 'back_on_top');
function back_on_top()
{
    ob_start();
?>
    <div class="back-on-top" onclick="scrollToTop()">
        <?php
        echo file_get_contents(plugin_dir_url(__FILE__) . "up.svg");
        ?>
    </div>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    echo $output;
}
```

This way, we've inserted the **up.svg image** at the bottom of our page, present in the plugin's folder.

**You can use any image you prefer**. If you use a jpg or png instead of an svg, you can simply use the `<img src=…>` tag.

**_on\_start_** is a function that allows you to insert HTML code and treat it as a **PHP variable**.

Now, let's add some **CSS** to make the graphics sensible. To simplify, let's include the CSS directly in the php file, just above the "back-on-top" div:

```php
<style>
        .back-on-top {
            position: fixed;
            z-index: 99999;
            bottom: 30px;
            right: 30px;
            cursor: pointer
        }

        .back-on-top svg {
            width: 30px;
            height: 30px;
            fill: #444;
            transition: .3s;
        }

        .back-on-top svg:hover {
            fill: lightblue;
        }
    </style>
```

Now, all that remains is to include some **Javascript** to perform the smooth scroll to the top of the page. This can be done in many ways, from vanilla Javascript to JQuery.

To keep things minimal, let's include some **vanilla Javascript** after the "back-on-top" div:

```php
<script>
        // Smooth scroll to top
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
        scrollToTop();
    </script>
```

**_And voilà!_**

**The plugin is ready.** Save it, and if everything went well, you should see an arrow pointing upwards in the bottom-right corner of the site. Clicking on the arrow should take you back to the top of the page.

![Upward arrow](images/image-39-1.png)

**_Congratulations! You've just created your first plugin!_**

```php
<?php

/**
 * Plugin Name: Back on top
 * Plugin URI: /
 * Description: A simple link to the top of the page
 * Version: 1
 * Author: Alberto Reineri DEV
 * Author URI: http://albydev.net
 * Text Domain: back-on-top
 */

add_action('wp_footer', 'back_on_top');
function back_on_top()
{
    ob_start();
?>
    <style>
        .back-on-top {
            position: fixed;
            z-index: 99999;
            bottom: 30px;
            right: 30px;
            cursor: pointer
        }

        .back-on-top svg {
            width: 30px;
            height: 30px;
            fill: #444;
            transition: .3s;
        }

        .back-on-top svg:hover {
            fill: lightblue;
        }
    </style>
    <div class="back-on-top" onclick="scrollToTop()">
        <?php
        echo file_get_contents(plugin_dir_url(__FILE__) . "up.svg");
        ?>
    </div>

    <script>
        // Smooth scroll to top
        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(0, c - c / 8);
            }
        };
        scrollToTop();
    </script>
<?php
    $output = ob_get_contents();
    ob_end_clean();
    echo $output;
}
```

_[<< Part 3](/en/blog/create-a-wordpress-theme-from-scratch-3/)_[](.local/assistenza/)
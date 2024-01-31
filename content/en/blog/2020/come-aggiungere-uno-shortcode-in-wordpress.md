---
title: "How to add a shortcode in WordPress?"
description: "Shortcodes are a simple way to add dynamic content to posts, pages, and sidebars in WordPress."
date: "2020-03-20"
categories:
  - WordPress DEV
---

Shortcodes are a simple way to **add dynamic content** to posts, pages, and sidebars in WordPress.

Many **WordPress plugins and themes use shortcodes** to add specific content such as contact forms, image galleries, sliders, and more.

In this article, we'll show you how to **easily add a shortcode in WordPress**. We'll also demonstrate how to create your own custom shortcodes in WordPress.

## WHAT ARE SHORTCODES?

Shortcodes in WordPress are strings that help you add dynamic content to posts, pages, and sidebar widgets. They are displayed **within square brackets** like this:

_\[shortcode\]_

To better understand shortcodes, let's take a look at why they were introduced.

WordPress filters all content to ensure that no one uses posts and page content to insert **malicious code** into the database. This means you can write basic HTML in your posts, but you can't write PHP code.

What if you want to execute custom code within your posts to display related posts, advertisements, contact forms, galleries, etc.?

This is where the **Shortcode API comes into play**.

Basically, it allows developers to add their code within a function and then register it with WordPress as a shortcode, so users can easily use it without any knowledge of web development.

When WordPress encounters the shortcode, it will automatically execute the associated code.

Let's see **how to easily add** shortcodes to WordPress posts and pages.

## ADDING A SHORTCODE IN WORDPRESS POSTS AND PAGES

Firstly, you need to **edit the post or page where you want to add the shortcode**. Next, you need to click the **Add Block button** to insert a **shortcode block**.

![](images/shortcode-1024x513.gif)

After adding the **shortcode block**, you can simply enter your shortcode in the block settings. The shortcode will be provided by various WordPress plugins that you might be using.

Now you can save your post or page and preview the changes **to see the shortcode in action**.

## ADDING A SHORTCODE IN WORDPRESS SIDEBAR WIDGETS

You can also use shortcodes in WordPress **sidebar widgets**. Simply visit the **Appearance » Widgets** page and add the "Text" widget to a sidebar.

Now you can **paste your shortcode** into the widget's text area.

![](images/image-33-1-1024x438.png)

Don't forget to click the "Save" button to store the widget settings.

Next, you can visit your WordPress website to see a **live preview** of the shortcode in the sidebar widget.

## ADDING A SHORTCODE IN THE OLD CLASSIC EDITOR OF WORDPRESS

If you are still using the old **classic editor** in WordPress, here's how to add shortcodes to your WordPress posts and pages.

Simply edit the post or page where you want to add the shortcode. You can **paste the shortcode** anywhere inside the content editor where you want it to appear. Just make sure the shortcode is on its own line.

![](images/image-34-3-1024x316.png)

Don't forget to **save** the changes. You can then preview your post or page to see the shortcode in action.

## HOW TO ADD A SHORTCODE IN A WORDPRESS THEME

Shortcodes are intended to be used within WordPress posts, pages, and widgets. However, sometimes you might want to **use a shortcode within a WordPress theme**.

Basically, you can add a shortcode to any file in your WordPress theme by simply adding the following code.

```
<?php echo do_shortcode("[shortcode]"); ?>
```

WordPress will look for the shortcode and display its output in the theme file.

## HOW TO CREATE YOUR CUSTOM SHORTCODE IN WORDPRESS

Shortcodes can be really helpful when you want to **add dynamic content or custom code** within WordPress posts and pages. However, if you want to **create your custom shortcode**, you'll need to write some code.

If you're familiar with writing PHP code, here's an example you can use as a template:

```
// Function that runs when the shortcode is called
function my_shortcode() {
    $message = 'Hello world!';  // Output
    return $message;
}
// Register the shortcode
add_shortcode('greeting', 'my_shortcode'); // The shortcode will be [greeting]
```

With this code, we've first created a function that runs code and returns the desired output. Next, we created a new shortcode called 'greeting' and told WordPress to run the function we created.

Now you can **use add this shortcode to your posts**, pages, and widgets using the following code:

_\[greeting\]_

This will execute the created function and display the desired output.

## SHORTCODES OR GUTENBERG BLOCKS?

Users often ask about the differences between shortcodes and the new Gutenberg blocks.

Basically, if you find shortcodes useful, you'll love WordPress editor blocks. Blocks allow you to do the same thing but **in a more intuitive way**.

Instead of requiring users to add a shortcode to display dynamic content, blocks allow users to add dynamic content within posts/pages with **a more user-friendly interface**. Many **popular WordPress plugins** are transitioning to using **Gutenberg blocks** instead of shortcodes because they are **more beginner-friendly**.

I hope this article has helped you learn how to add a shortcode in WordPress.
---
title: "Functions.php – What it is and how to modify it."
description: "On WordPress, the most important file in the theme is undoubtedly the functions.php. Let's take a look at..."
date: "2021-03-20"
categories:
  - WordPress DEV
---

In WordPress, **Functions.php** is one of the most **important** files within a theme.

It encapsulates **all the functions necessary for the theme's operation**. It functions like a **plugin for your WordPress site** that is automatically activated with your current theme. The functions.php file uses [PHP](/category_guide/php) code to **add functionality** or modify default functionalities on a WordPress site.

For instance, a WordPress theme might add some code to the theme's functions.php file to **add a new widget area** to the footer or insert a custom welcome message on the WordPress dashboard. The possibilities are endless!

The Functions.php file **loads automatically** when you install and activate a theme on your WordPress site.

Modifying the Functions.php file using custom code allows you to **add custom post types, taxonomies, shortcodes,** and more to enhance your website.

## Where Is the Functions File Located?

The path to the Functions.php file is **within the theme folder.**

If you want to add a **code snippet** to your WordPress site, you can add it to the Functions.php file.

However, this is usually not the best way to do it. WordPress tries to separate design and functionality when possible. That's why we have **themes** that determine the **design** and **plugins,** which determine the **functions.**

It's better to be able to **change your WordPress theme without changing how your site works** or change your plugins without affecting your site's design.

Many WordPress tutorials will tell you to add code snippets to your theme's Functions.php file, but **it's not always the best practice**. Each case needs to be carefully analyzed.

If you decide to modify your Functions.php file, use the utmost **caution**. Here are 3 reasons why modifying your Functions.php file is not a good idea:

- Changes to the functions file will be lost when the theme is updated.
- Changes will be lost if you change the WordPress theme.
- Making coding errors in the functions file can lock you out of your site.

Even something as simple as a missing semicolon could make your entire site disappear...

Why Site-Specific Plugins Are Better (Alternative to Functions.php)

So, if you don't want to modify Functions.php, where should you add the new functions for your site?

The answer is to create your own [WordPress plugin](/en/blog/creare-un-plugin-wordpress/).

This will be a **site-specific plugin** because it is specific to your site and will never be shared in the WordPress plugin directory.

Using a site-specific plugin is the **best solution** because code snippets are stored separately from your theme's Functions.php file. This means they can be activated or deactivated, just like any other plugin. This ensures that **your code won't disappear if you change the theme.**

We hope this article has helped you understand everything about the Functions.php file in WordPress and how to add code snippets to your site!
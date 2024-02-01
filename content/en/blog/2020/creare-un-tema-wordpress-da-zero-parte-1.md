---
title: "1. Create a WordPress Theme from Scratch – Part 1"
desription: "Tutorial on how to develop a custom WordPress theme from scratch. Let's see how to create your first WP theme."
date: "2020-04-30"
url: "/en/blog/create-a-wordpress-theme-from-scratch-1"
categories:
  - WordPress DEV
---

**WordPress** is a fantastic platform! It allows you to create all types of websites easily and quickly, thanks to the infinite variety of themes and plugins available, many of which are free.

However, when you want to take your website to the next level and have a truly high-performance site, it's advisable to use a theme developed from scratch, capable of implementing all the necessary functions in the most efficient way!

No console errors, no English strings, no scattered code around the site, no unnecessary CSS and JS... Just what is really needed, developed in the right way.

Today, let's see how to create a WordPress theme from scratch!

Get comfortable and take your time; it will take a bit, but in the end, you'll have created your first functional WordPress theme, respecting all best practices.

_We'll start with a WordPress installation; if you don't know how to install the CMS, I recommend following the guides for [Getting Started](.local/getting-started/beginner/)._

_This tutorial is divided into 3 parts; in the end, you can download the entire theme we'll create together to compare and correct any errors. I recommend following the various parts and downloading the theme only at the end. Still, if you need it earlier, you can find it at the end of [part 3](/en/blog/create-a-wordpress-theme-from-scratch-3/)._

## LET'S CREATE OUR THEME

If you open your WordPress site's folder, you'll notice that there are 3 folders:

- wp-admin
- wp-content
- wp-includes

For now, we are only interested in "wp-content," so let's open it.

Inside wp-content, open the "themes" folder, which contains the project's themes.

**Now let's create our first theme!**

Create a new folder and name it "my-theme," then open the folder with [VS Code](http://code.visualstudio.com/). (If you don't know how to do this, check the [beginner's guides](/en/blog/the-basics-of-html/))

A WordPress theme needs only **2 files:**

- style.css
- index.php

**So let's create these 2 files inside the "my-theme" folder,** and insert this code into "style.css" to let WordPress know the theme's data:

```css
/*
Theme Name: My Theme
Author: WP Specialist
Description: My first WordPress theme
Version: 0.0.1
*/
```

You can replace the author with your name, as well as the theme name and description.

If you now save the CSS file and go to the WordPress backend under "Appearance – Themes," you will see our theme!

![Theme in WordPress](/images/image-12-2.png)

You can **activate the theme**, and voilà! The theme is done!

Isn't it that complicated, right? Yes, but now the theme is **empty**, and it needs to be filled!

Start by inserting this code into "index.php"; it's a basic layout created with [Bootstrap](/en/blog/the-basics-of-bootstrap/) that we will build upon:

**index.html**

```html
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The 3 meta tags above MUST be added first -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>My First Theme</title>

    <!-- Bootstrap core CSS -->
    <link href="http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">My First Theme</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="container mt-5">

        <div class="row">
            <!-- CONTENT -->
            <div class="col-sm-8">

                <!-- ARTICLE -->
                <div class="article-list">
                    <!-- TITLE -->
                    <h2 class="">My Article</h2>
                    <!-- META -->
                    <p>July 15, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="article-list mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 2</h2>
                    <!-- META -->
                    <p>July 16, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="article-list mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 3</h2>
                    <!-- META -->
                    <p>July 17, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.


                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

            </div>
            <!-- /CONTENT -->

            <!-- SIDEBAR -->
            <div class="col-sm-4">
                <!-- SEARCH -->
                <form class="form-inline mt-3 mb-3">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

                <!-- CATEGORIES -->
                <div class="card">
                    <h5 class="card-header">Categories</h5>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Photography</a></li>
                        </ul>
                    </div>
                </div>
                <!-- /CATEGORIES -->

                <!-- RECENT POSTS -->
                <div class="card mt-4">
                    <h5 class="card-header">Recent Posts</h5>
                    <div class="card-body">
                        <ul class="list-unstyled">
                            <li><a href="#">My Article</a></li>
                            <li><a href="#">My Article 2</a></li>
                            <li><a href="#">My Article 3</a></li>
                        </ul>
                    </div>
                </div>
                <!-- /RECENT POSTS -->

            </div>
            <!-- /SIDEBAR -->

        </div>
        <!-- /ROW -->

    </div>
    <!-- /CONTAINER -->


    <!-- FOOTER -->
    <footer class="footer mt-5">
        <div class="container">
            <p class="text-muted">© 2020 My First Theme</p>
        </div>
    </footer>
    <!-- /FOOTER -->

    <!-- Bootstrap core JavaScript
        ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="http://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>

</html>
```

We've added a navigation bar, a content area, a sidebar with a search form, categories, and recent posts. The footer is also included.

Save the file, go back to your WordPress site, and refresh it. You will see a very basic theme layout.

This is just the beginning. You can now start customizing your theme further. Add PHP code to handle WordPress features like the loop, widgets, and more. Consider styling your theme with additional CSS, and perhaps include JavaScript for interactivity.

Remember, this is a basic example. As you become more familiar with WordPress development, you can enhance your theme by adding dynamic features, custom post types, theme options, and much more.
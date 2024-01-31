---
title: "Simple PHP Routing"
description: "Tutorial on developing a routing in PHP, the simplest method possible."
date: "2021-06-04"
categories:
  - PHP
---

Using a routing system in PHP can bring significant advantages to a project.

The **URLs** of a website's web pages are crucial, both for search engines and users who increasingly use them to navigate quickly within a site.

For example, if the URL of a page listing a series of articles is http://www.yourwebsite.com/2019/05/15, the user, with a basic understanding of how browsers and the web work, will know that deleting the "15" from the URL will show the list of articles for the month, deleting "05" will show the list of articles for the year, and so on.

These are conventions that have developed over the years and should be respected when creating a website.

One thing I never liked about the first websites I built was seeing ".php" at the end of the URL. Nowadays, it doesn't look very professional.

But is it possible to create custom and SEO-friendly URLs without using a CMS or framework? The answer is absolutely YES!!!

If you're interested in a simple solution to "hide" the ".php" at the end of the URL, read this [article](/en/blog/hide-the-extension-at-the-end-of-the-url/).

If you want to learn how to use a simple routing system in PHP, here's how you can do it.

## CREATING A SITE ROUTING MANAGEMENT SYSTEM

{{< youtube lFtPh9eoPrc >}}

We will direct all traffic to index.php and then perform routing to the desired page.

### Directing all traffic to index.php

Open the .htaccess file (create it if it doesn't exist) and insert the following code:

```apache
RewriteEngine On

RewriteBase /

RewriteCond %{REQUEST_FILENAME} !-d

RewriteCond %{REQUEST_FILENAME} !-f

RewriteRule ^(.+)$ index.php [QSA,L]
```

This way, any request made to the server will open the "index.php" file.

### Creating a routing system

In the index.php file, insert the following code:

```php
<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/views/index.php';
        break;
    case '' :
        require __DIR__ . '/views/index.php';
        break;
    case '/about-us' :
        require __DIR__ . '/views/about-us.php';
        break;
    default:
        require __DIR__ . '/views/404.php';
        break;
}
```

This way, the request sent to the server (the part of the URL after "www.yourwebsite.com") will be saved in the variable `$request`. Then, by using a switch, you can call the page corresponding to the URL request.

In cases where the request is empty or "/", it redirects to the homepage; otherwise, it redirects to the correct page.

In the example, I created a "views" folder in the site's root where individual page files will be located. This makes the code more concise and understandable.

Finally, error 404 handling is already included without needing additional code in the .htaccess.

### Creating the views

At this point, all you need to do is create files for your views, the pages displayed to the user.

You can simply create the following files with the corresponding code in each:

**/views/index.php**

```html
<h1>Home Page</h1>
```

**/views/about-us.php**

```html
<h1>About Us</h1>
```

**/views/404.php**

```html
<h1>Error 404</h1>
```

And voilà! You have a simple but functional PHP routing system that is easy to manage.

This system forms the basis of [Orange CMS](/orange), my PHP-based CMS. By expanding it appropriately, you can achieve very satisfying results.

I hope this is helpful.

Happy coding!

If you found the article useful, leave a comment or share it on social media; I would appreciate it!
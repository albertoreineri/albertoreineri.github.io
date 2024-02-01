---
title: "Hide the extension at the end of the URL"
description: "Today, displaying the extension at the end of the URL is not ideal, both for SEO and for the overall appearance the site presents to the end user. It would be better to hide it."
date: "2019-12-19"
categories:
  - Web Dev
---

Today, having the extension at the end of the URL is not ideal, both for SEO and for the overall impression the site makes on the end user. It would be better to hide it.

{{< youtube VWqwsKL2-mM >}}

The **ability to choose our URLs** is crucial for creating a good website. By using PHP pages correctly, you can easily achieve this result by simply hiding the extension from the URL.

In this guide, we will see how to **"remove" the .php** at the end of the URL.

To do this, simply **insert the following code into the .htaccess file** in the root of the site. If the .htaccess file does not exist, create it using a text editor.

```apache
RewriteEngine on

RewriteCond %{THE_REQUEST} /([^.]+)\.php [NC]

RewriteRule ^ /%1 [NC,L,R]

RewriteCond %{REQUEST_FILENAME}.php -f

RewriteRule ^ %{REQUEST_URI}.php [NC,L]
```

This way, all your ".php" files will be displayed without an extension.

By doing this, the entire site will be better. The addresses will be much more "SEO friendly," and the website's security will also benefit.

If you look at the modern websites of large companies, hardly anyone uses the extension at the end of the URL anymore.

Today, we can also use frameworks that allow us to manage URLs in a completely customized and optimal way, but we don't always need an entire framework. Often, for small projects, it's worth doing things from scratch, and in these cases, just a few lines of code in the .htaccess file can easily hide the extension from the URL.

If you want to learn how to use a simple routing system to organize the website in the best way and manage your URLs effectively, read this [article](/en/blog/simple-php-routing/). It's very basic and simple but can be used for small projects without big demands. Of course, it has nothing to do with the routing of [Laravel](https://laravel.com/), for example, but it can be a good starting point to improve your skills.
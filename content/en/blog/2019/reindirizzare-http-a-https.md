---
title: "Redirect http to https"
description: "Let's see how to install an SSL certificate on our website and switch from HTTP to HTTPS."
date: "2019-11-30"
categories:
  - Web Dev
---

Let's see how to install an SSL certificate on our website and switch from HTTP to HTTPS.

Do you want to remove the "not secure" label that appears next to your site's URL? Then this article is for you!

We won't delve into what HTTPS is, but we'll simply see how to make your site work securely.

The procedure is very simple; you just need to follow these two steps:

## 1. Enable SSL on your web space

Access the control panel of your hosting service and look for "Enable HTTPS," "Enable SSL," or something similar (varies depending on the service).

Once you find the right section, activate the service. It may take a few hours before it becomes active.

After a few hours, try accessing your site by typing https://www.yourwebsite.com. If everything works correctly, proceed to step 2.

If you encounter any errors, it's likely because you have HTTP links for stylesheets, images, and JS files. Try replacing "http" with "https" in all references to images, CSS, and JS; this should fix everything.

If you use [WordPress](/en/blog/how-to-install-and-customize-a-wordpress-theme/), you can use plugins that address the issue, such as [Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/) or [WP Force SSL](https://wordpress.org/plugins/wp-force-ssl/). By using these plugins, you can skip step 2, as the plugins handle everything automatically.

## 2. REDIRECT TRAFFIC TO HTTPS

If you have completed step one correctly, you can now open the .htaccess file in the root of your site (create it if it doesn't exist) and insert the following code:

```apache
RewriteEngine on

RewriteCond %{HTTP:X-Forwarded-Proto} !https

RewriteRule ^.*$ https://%{SERVER_NAME}%{REQUEST_URI} [L,R=301]
```

This way, all server calls will be redirected to HTTPS.

If this code creates an error regarding redirects, you can replace:

```apache
RewriteCond %{HTTP:X-Forwarded-Proto} !https
```

with:

```apache
RewriteCond %{HTTPS} !=on
```

With these simple steps, you can install an SSL certificate and redirect traffic from HTTP to HTTPS, making your website more secure.
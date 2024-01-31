---
title: I have developed my own CMS
description: "I created a CMS in core PHP, let me tell you why and how I did it."
author: Alberto Reineri

date: 2019-11-02T21:29:00+00:00
categories:
  - Personal

---

**WordPress** is a fantastic platform, a great CMS that allows managing website content relatively easily and quickly. It offers a vast range of plugins and enables the rapid and effective development of projects.

However, there are a few things in WordPress that **I've never liked**... Two, in particular:

## 1. SLOWNESS

Firstly, the slowness. Even when developing a **custom WordPress theme**, WordPress introduces **dependencies** that are **inevitable** and slow down page loading.

Additionally, every plugin adds its CSS and JS files to all pages of the site, regardless of whether they are needed only on the homepage or a specific internal page. (This can be mitigated by forgoing plugins and using a completely custom solution, but this extends development time...)

The same website created with or without WordPress has significantly faster loading times! If you want to run some tests, use these two services, and you'll see that WordPress-developed sites will be slower, even when using more expensive and performant hosting:

  * <https://tools.pingdom.com/>
  * <https://developers.google.com/speed/pagespeed/insights/?hl=IT>

For a more comprehensive website test, you can use the tool developed by [Digitale.co][1], allowing scanning multiple pages at once. This way, you can save time and have a better and broader overview of a website's performance! Here's the link to the tool!

  * <a href="https://www.digitale.co/pagespeed" target="_blank" rel="noreferrer noopener nofollow">https://www.digitale.co/pagespeed</a>

## 2. THE BACKEND

Secondly, the backend is nice and simple, but not always. **The inability to make invasive changes** to the backend has always frustrated me a lot.

Sure, we can create custom posts, custom fields with Advanced Custom Fields, change the backend's color scheme, create a custom login, etc., but we don't have the freedoms of a platform created entirely from scratch, where we can decide everything we want.

I've never liked feeling like a "slave" to software, having to obey its laws without the possibility of intervening wherever I want.

## MY CMS

For this reason, I created **<a href="/orange" target="_blank" rel="noreferrer noopener">Orange CMS</a>.**

I have always loved programming, and using code written by others has never appealed to me. I am a developer, and I want to develop; that's the only way to learn and move forward!

Let's be clear, **I haven't reinvented the wheel**. I used a series of scripts developed in the past and some online libraries, and little by little, I created this platform.

I used:

  * <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer noopener">Bootstrap</a>
  * <a href="https://ckeditor.com/" target="_blank" rel="noreferrer noopener">CKEditor</a>
  * <a href="https://ckeditor.com/ckfinder/" target="_blank" rel="noreferrer noopener">CKFinder</a>
  * <a href="https://datatables.net/" target="_blank" rel="noreferrer noopener">DataTables</a>
  * <a href="https://fengyuanchen.github.io/datepicker/" target="_blank" rel="noreferrer noopener">DatePicker</a>

If I could be effective with WordPress, with Orange CMS, I can say that I am efficient!

Development times are more or less the same, but with Orange CMS, I can:

  * create a data loading system developed specifically for the project's needs, significantly reducing content loading times
  * create completely customizable and SEO-friendly URLs using a practical [routing system][2]
  * create specific sections for website content
  * achieve very short loading times
  * have a secure login with encrypted passwords

**Some websites** created with Orange CMS:

  * <a href="http://danzeoccitane.altervista.org/" target="_blank" rel="noreferrer noopener">danzeoccitane.altervista.org</a>
  * <a href="http://eventicuneo.it/" target="_blank" rel="noreferrer noopener">eventicuneo.it</a>
  * <a href="http://studiomacdesign.it/" target="_blank" rel="noreferrer noopener">studiomacdesign.it</a>
  * <a href="http://associazionefedercasa.it/" target="_blank" rel="noreferrer noopener">associazionefedercasa.it</a>

This **doesn't mean I'll stop using WordPress**; for a blog, I believe it's still the best solution, but I think I'll use it less frequently.

Thanks for reading this article.

Happy coding!

 [1]: https://www.digitale.co/
 [2]: /en/blog/simple-php-routing/
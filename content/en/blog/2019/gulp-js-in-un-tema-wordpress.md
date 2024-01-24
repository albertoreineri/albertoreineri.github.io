---
title: "Gulp.js in WordPress Theme"
description: "We use Gulp JS to automate the organization of the development of a WordPress theme."
date: "2019-09-30"
categories:
  - Web Dev
---

For some time, I've been working on **fairly large projects**, and it's not always easy to manage everything without getting lost in the **thousands of files and folders** within the project.

**Code organization** is a fundamental part of software development, be it web, desktop, or mobile.

Fortunately, today we can use tools that help us in the **development and project management process**.

One of these tools is **Gulp.js!**

## What is Gulp.js

Gulp is a **task runner**, a program that allows you to **automate a series of repetitive and constant tasks**, such as minifying CSS and JS code, refreshing on every save, synchronizing web pages, optimizing images, and much more.

_**To simplify**_, once Gulp is correctly set up within my project, every time I save a file, Gulp automatically checks the operation just performed (saving) and acts accordingly. In this case, it refreshes the browser.

If I modify a CSS file, on saving, Gulp will minify the file and refresh the browser!

Imagine a project that takes months to develop; being able to avoid **refreshing the browser every time**, compiling SASS files, optimizing images, etc., allows developers to **save a lot of time** or, at the very least, focus on something other than mundane and repetitive actions!

## Gulp and WordPress

The beauty of Gulp is that it can be used in **any type of project**, even during the development of a **theme** or **plugin** for **WordPress**, greatly **speeding up** programming times!

If you want to install and **start using** Gulp, I recommend this article: [https://css-tricks.com/gulp-for-beginners/](https://css-tricks.com/gulp-for-beginners/). That's where I started!

## My Gulp for WordPress!

If you want a **starting point** to configure **Gulp** in your project, you can look on [my GitHub profile](https://github.com/albertoreineri/). I have included [my file](https://github.com/albertoreineri/gulp-for-wordpress) for **basic Gulp configuration in WordPress.**

In my latest project using **Gulp**, I automated the following tasks:

- Refresh on every modification of any file
- Optimize **images**
- Combine all **SCSS** files into one, compile it, and minify it
- Combine all **JS** files into one and minify it

To use **Gulp**, you need to split the folder with the site's resources. One will be the development folder, aptly named "**src**", and the other will be the one that will be published, called "**assets**."

On GitHub, you can find my configuration file to handle **Gulp tasks within a WordPress theme.**

To **get started**, you just need to copy my gulpfile.js into your theme and run this command from the CLI:

```bash
npm install --save-dev gulp gulp-imagemin gulp-uglify gulp-sass browser-sync del gulp-concat gulp-clean
```

Now all you have to do is **modify line 3** of the file by entering the path to your WordPress project.

I hope I've encouraged you to **use this tool.** Although it's a bit complicated to set up, I'm sure that once you've understood it thoroughly, you **won't be able to do without it!**

Let me know what you think in the **comments**, and **happy coding!**
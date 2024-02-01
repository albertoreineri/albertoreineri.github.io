---
title: "3. How does XAMPP work?"
description: "Short guide on how XAMPP works, the simplest software for creating a local server for web development"
date: "2020-03-20"
url: "/en/blog/how-does-xampp-work"
categories:
  - WordPress Beginner
---


Have you read the article on [configuring your PC for web development](/en/blog/configuring-the-pc-for-web-development-with-free-software/), installed all the programs, and are ready to start developing!

## BUT HOW DOES XAMPP WORK?

Although it's not particularly complicated software, the initial approach might be a bit intimidating.

Today, we'll see **how to start and run it correctly!**

**First, start XAMPP** by clicking on its icon.

You'll find a screen like this:

![](/images/image-2-1.png)

On the left, you can see that **XAMPP provides a series of services.**

We are mainly interested in the first 2:

- **Apache** (the web server that allows WordPress to function)
- **MySQL** (the database where we will store WordPress site data)

Without further ado, **start these two services** by clicking the "Start" button next to each.

If everything has gone well, the "Apache" and "MySQL" should have a green background, like this:

![](/images/image-3-1-1.png)

At this point, our local server is started and running!

## NOW WHAT?

Now you need to know a couple more things:

- **Where to physically insert** the websites to "run" on the Apache server
- **How to manage the database**

Don't worry; this time, **it's easier to do than to say.**

### WHERE TO INSERT WEBSITES?

**XAMPP** provides a folder where we can insert all our websites.

It's enough to **place our sites inside this folder** to view them in the browser.

The folder is as follows:

**Windows:** C:\\xampp\\htdocs

All folders present in this path will be websites and can be accessed through the browser.

### HOW TO ACCESS THE WEBSITE FROM THE BROWSER?

We've seen where to insert our websites; now let's see **how to run them from the browser.**

To be able to view the sites locally, you need to **tell the browser to look for our sites** precisely **locally,** not in www.

To do this, in the **search bar,** type "localhost."

If you press Enter, you should see the default XAMPP page, but we don't care; we want to see our sites.

It's very simple; just type after "localhost" a slash plus the folder present in htdocs containing our site.

#### Example:

- Go to the htdocs folder
- Create a folder called "test"
- Enter the folder
- Right-click and press "Open with Code" (to do this, you will need Visual Studio Code installed, if you haven't installed it yet [click here](/en/blog/setting-up-the-pc-for-wordpress-development/))
- Press "File - New File"
- Save it as "index.html"
- Inside the file, write "Hello World"
- Open the browser and type "localhost/test"

You should see a completely white page with the text "Hello World" in the top left!

**Congratulations!** You have just created **a local website with XAMPP!**

## AND THE DATABASE?

Earlier, I talked about the database, **essential for every WordPress site.**

To access the database, XAMPP automatically installs a tool that allows you to manage data easily and quickly: **phpMyAdmin.**

To access phpMyAdmin, simply go to this **address** in the browser:

[localhost/phpmyadmin](http://localhost/phpmyadmin/)

And there you go, you've just entered the database management of your local server!

## TIPS:

A couple of tips to speed up your work:

- Create a link on the desktop or in the taskbar to **XAMPP**
- Create a link to the "htdocs" folder on the desktop or in the taskbar
- Add **phpMyAdmin** to favorites

Well done, **now you're ready to get serious!**
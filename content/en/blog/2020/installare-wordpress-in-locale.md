---
title: "4. Installing WordPress Locally"
description: "Tutorial on how to install WordPress locally on your computer and start creating your new website."
date: "2020-03-20"
url: "/en/blog/install-wordpress-locally"
categories:
  - WordPress Beginner
---

If you want to become a **WordPress developer**, then you'll need to install the fantastic CMS **locally**. Don't worry if you're not sure what that means; this article is aimed at **beginners**, so I'll walk you through the process **step by step**, explaining everything in detail.

So, sit down, focus, and let's get started learning!

## WHY LOCALLY?

Many guides or tutorials show how to **install WordPress directly online**, often using hosting company services to automatically install the CMS.

This can be very useful for a user who knows nothing about programming and wants to try creating their website.

However, we want to **understand what we're doing**, become **skilled WordPress developers**, and create **wonderful** websites and web apps!

So, we'll take the longer route (not that much longer, actually) and learn everything about WordPress **from scratch!**

* * *

To better understand what we'll be doing, I **recommend** reading these articles:

- [Setting Up Your PC for WordPress Development](/en/blog/configuring-your-pc-for-wordpress-development/)
- [Why Install WordPress Locally?](/en/blog/why-install-wordpress-locally/)
- [How XAMPP Works](/en/blog/how-xampp-works/)

* * *

## 1. DOWNLOAD WORDPRESS

Firstly, you need to **download WordPress**.

It's very easy; just go to this **link**: [http://en.wordpress.org/](http://en.wordpress.org/) and click the "Download WordPress" button at the top right.

![](images/image-4-1024x250-1.png)

Now, wait for the download to finish. It's usually quick, but times may vary depending on your internet speed.

## EXTRACT WORDPRESS

The downloaded file is in **.zip** format, so you need to **extract it**.

Just right-click on the file and choose "Extract here."

Once extracted, you'll have a folder named "wordpress."

## START XAMPP

To make our WordPress site work locally, we need to start **XAMPP**.

To **start XAMPP**, click on its icon, and once the software is open, click on "Start" next to **Apache** and **MySQL**.

![](images/image-2-2.png)

This will start the local server and database! Now you're ready to load WordPress onto the server.

## UPLOAD WORDPRESS TO THE LOCAL SERVER

Opening this folder, you should find inside **3 folders:**

- wp-admin
- wp-content
- wp-includes

**plus a series of files.**

![](images/image-6-1.png)

**This is WordPress!!!**

Now, go back one level and **follow these steps:**

- Copy the "wordpress" folder.
- Go to the **htdocs** folder (C:\\xampp\\htdocs on Windows) and paste it here.
- Rename "wordpress" to "wp-test."

You've just placed the "wp-test" site on your **local server!**

Now, let's see how to create a **MySQL** database for your site.

## CREATE THE DATABASE

**WordPress** needs a **database** to function.

Let's **create it** using **phpMyAdmin**.

**Accessing** phpMyAdmin is straightforward; just type "**localhost/phpmyadmin**" in your browser's search bar.

You'll find yourself on a screen like this:

![](images/phpmyadmin-1024x486-1.jpeg)

This is the program through which we'll **manage our databases**. It's not the prettiest visually, but it's very **powerful** and functional.

For now, you need to **click on "New"** in the left sidebar.

![](images/image-5-1024x98-1.png)

On the right, you'll see a screen like the one above; just **enter the database name**, in this case, "wp-test," and click "Create."

You should see a database named "wp-test" appear in the left sidebar.

**Congratulations!!!** You've just created the database for your WordPress site!

## INSTALL WORDPRESS!

Finally, it's time to **install WordPress**.

First, connect to your site on the local server, at this address: [http://wp.local-test](http://wp.local-test)

Over the years, the CMS installation procedure has become more refined, and today it can be completed with a few simple steps:

### STEP 1:

![](images/image-7-1024x496-1.png)

Click on the "Let's go!" button.

### STEP 2:

![](images/image-8-1024x497-1.png)

Now, we're asked for **configuration parameters**. Don't worry; I'll explain what they mean:

- **Database Name:** It's the name we gave to the database created with phpMyAdmin, in this case, "_wp-test_."
- **Username:** This is the database username. **ATTENTION!!!** It's not your username but the one to access the database. XAMPP automatically creates a username for the database, which is "_root_."
- **Password:** This is the database password. By default, XAMPP doesn't include any password. Since it's local, this level of security isn't necessary. When we create a WordPress site online, the database password will be crucial.
- **Database Host:** Where the database is "hosted." In this case

, "_localhost_," meaning on our local server.
- **Table Prefix:** WordPress assigns a prefix to each table it creates. For now, you can leave it as "_wp_."

**In summary, you can fill in this step like this:**

- Database Name: wp-test
- Username: root
- Password:
- Database Host: localhost
- Table Prefix: "wp_"

### STEP 3:

![](images/image-9-1024x499-1.png)

Great! The hard part is done! **From now on, it's all downhill.**

WordPress congratulates us for correctly entering the data from the previous step, so all that's left is to click "Start installation."

### STEP 4:

![](images/image-11.png)

Now, WordPress is installed! All that's left is to **configure** a couple of things:

- **Site Title:** It will be the title of our website, in this case, you can put "WP Test Site."
- **Username:** This is the username with which you'll access the site's backend. Put whatever you want. I recommend not using easily guessable names like "admin"; it's better to use a name like "pippo8756."
- **Password:** The password with which you'll access the backend.
- **Your Email:** Your email address linked to your account. ATTENTION! Since WordPress is installed locally, it can't send emails; it can only do so when installed online.
- **Search Engine Visibility:** Through this checkbox, you can tell WordPress to exclude your site from search engine results. Rarely will you need to click this field.

Once you've filled in the fields, you can click "Install WordPress."

### STEP 5:

![](images/image-12-1024x591-1.png)

**AND VOILÀ!!!**

You've just successfully installed WordPress locally on your computer!

Now, click "Login."

![](images/image-13-2.png)

Enter your login details and **enter your WordPress installation.**

This is the **backend** of WordPress:

![](images/image-14-1024x481-1-1.png)

From here, you can **configure** and **customize** your website.

Clicking on the house icon in the top right, you can see the front-end of your site.

![](images/image-15-2.png)

During installation, WordPress adds its default theme. So, for now, you'll see a **front-end** like this:

![](images/image-16-1024x460-1.png)

**CONGRATULATIONS!!!**

You've just installed **WordPress locally** on your computer!

You've taken the first step to become a WP developer. Keep reading our articles to improve and become a true PRO!
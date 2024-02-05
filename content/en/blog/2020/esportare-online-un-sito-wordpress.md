---
title: "9. Deploy a WordPress Website Online"
description: "Guide on How to deploy a Locally Developed WordPress Site Online. Let's Explore Uploading WordPress to Your Hosting"
url: "/en/blog/deploy-a-wordpress-website-online"
date: "2020-03-20"
categories:
  - WordPress Beginner
---

Up to now, we've created our website **locally**, but now it's time to finally **publish it online**!

Finally, you can **show the entire world** the result of your work and proudly share your new creation with friends and acquaintances.

Let's not waste any more time and **get to work** on the final part of this course.

[![](/images/download-free-desk.jpg)](/)

* * *

_This is the most complicated part of all. Take the time to understand it thoroughly, and if you need help, don't hesitate to [contact us](.local/support/); we can assist you and make everything simpler!_

* * *

## WHAT WE NEED

To publish a website online, we fundamentally need **two things:**

- **Domain name:** the name through which users can connect to the site, the famous www.yourwebsite.com
- **Hosting:** a space to place our new site.

Many companies offer such services, ranging from the most economical to the most expensive. Many of them have a dedicated service for WordPress, but **it's possible to install WordPress independently and save a few euros**.

**Here are some companies offering hosting services:**

- Aruba
- Register.it
- TopHost
- SiteGround
- Keliweb
- Serverplan
- etc.

Some prefer one over the other. In my opinion, **there isn't much difference** among hosting providers. Naturally, you can't compare a €15 annual hosting with a €500 one. As in everything, **the more you spend, the better the service you receive**.

### TECHNICAL SPECIFICATIONS

If you're choosing a hosting plan for your **WordPress** website, you need to know that you'll need these **2 things:**

- LINUX Hosting
- MySQL Database

**WordPress** is built with a programming language called **PHP** and requires a server with the **LINUX** operating system to function.

Additionally, without a **database**, WordPress cannot operate, so remember to purchase one.

### FREE HOSTING

But since this is a course for **beginners**, it's always better to try to spend as little as possible at the beginning. So today, I'll show you a way to have **completely free hosting**.

So, we will install our website online so that it can be reached by everyone, and we will do it **without spending a single euro**!

**_Not bad, right?_**

**Let's get started!**

## ALTERVISTA

We will use the free service of **altervista.org**, which will allow us to install our site from scratch on **free hosting**.

First, go to [altervista.org](http://it.altervista.org/).

Once on the site, you'll find a screen like this:

![](/images/image.png)

Although the central button "CREATE SITE" is very inviting, click on "**HOSTING**" at the top left.

![](/images/Untitled.jpeg)

Alters Hosting

You can also install WordPress by clicking on "CREATE SITE" even more simply than I am about to show you, but it will be a customized version of WordPress from altervista. Instead, we will install the original WordPress by importing the changes made locally.

After clicking on "Hosting," you'll find yourself on this screen:

![](/images/image-47.png)

Now click on "**Start now**."

![](/images/image-48.png)

Now leave "Activate Hosting" selected and click "**Continue**."

![](/images/image-49.png)

Now enter **the name of your site**. In this case, I entered "_albydev_".

Remember that with altervista, you can't have a site with ".it" or ".com", only with ".altervista.org". It may be a **limitation**, but considering the free service, I think it's acceptable, at least initially to test without spending anything!

After filling in your personal data, click "Continue" at the bottom of the page.

![](/images/image-50.png)

**_Et voilà!_**

![](/images/image-51.png)

We have our free hosting space!

Now, all that's left is to **wait for the altervista email** with the credentials to access hosting. Before being able to log in, it's necessary to **confirm the account creation**. After clicking on the link in the email, we have completed the creation process!

If you don't see it in the inbox, also check in the spam folder.

Once the web space is created, we can enter the **configuration section**.

![](/images/image-52.png)

## CREATE THE DATABASE

As you already know, **WordPress needs a database to function**. So, first of all, **activate the database on altervista**.

It's straightforward; just click on the "Activate Database" button on the altervista backend screen and then "Activate free database."

After activating the database, you should see these fields on the altervista page:

![](/images/image-52.png)

**Now begins the most complicated part of all!**

Certainly, we could have created our site **directly online**, but we want to become **WordPress Specialists**, people who know about WordPress, and we need to **learn how things work!** Knowing how to import and export a site manually is a very important skill **if you want to become a web developer!**

## UPLOAD THE WORDPRESS SITE ONLINE

### FILEZILLA

To **upload** our site to altervista, we can't just copy/paste; we have to send it to the server via an **FTP Client**. The best software for this type of operation is **FileZilla**!

So, proceed to download this software via this link: [http://filezilla-project.org/download.php](http://filezilla-project.org/download.php)

The installation is straightforward; just follow the guide and click "Next" until the end!

After installing it, we need to enter our **FTP account** to connect to the altervista server.

**Don't be frightened by these terms; as we go along, things will become simpler.**

First of all, **look through your emails for the one Altervista sent you** containing the login data, which starts like this:

![](/images/image-14.png)

Now, **launch FileZilla** and click on the first icon below the menu (open the site manager):

![](/images/image-13-1.png)

A screen like this will appear:

![](/images/Untitled.jpeg)

Click on "New site" here.

On the left, a new field will appear with "New site" written on it; you can rename this field as you like. For example, I name it "**albydev.altervista.org**."

Now, focus on the **right side**, the most important one:

![](/images/image-15-1.png)

Here, we need to enter the **data sent to us by the Altervista email**.

After the panel

 access data, there's a box titled "Login via FTP." So, let's fill in the fields "**Host**," "**User**," and "**Password**" with the data from the email and click "Connect."

_You can leave the "Port" field empty._

A screen like this should appear:

![](/images/image-16.png)

**It's all normal**, don't worry. You can check "Always trust certificate..." and click "OK."

**At this point, you are connected to your altervista server.**

Start by deleting the "index.html" file on the right so that it won't bother us later.

![](/images/image-20-1.png)

### COPY OUR SITE TO ALTERVISTA

Now, we can upload our site to altervista. First, we need to **locate our local site**.

All our local sites are in the "C:\\XAMPP\\htdocs" folder, so our site will be in "C:\\XAMPP\\htdocs/wp-test."

FileZilla shows **our local computer on the left** and **our altervista server on the right**.

![](/images/image-17.png)

In the right pane, go to "C:\\XAMPP\\htdocs\\wp-test." You should see a screen like this:

![](/images/image-18-1.png)

Now, all you have to do is **select all the files** (CTRL+A) and **drag them to altervista** (on the right) with a Drag&Drop!

![](/images/image-19.png)

This operation can take **some time**...

But we **won't get bored**! We also need to import our database online!

## IMPORT THE WORDPRESS DATABASE ONLINE

This is **_the most complicated part of all_**... But don't be discouraged; it's finally the last one!

We will export our local database, modify it, and upload it online to altervista!

### LET'S GET STARTED!

First, we need to go and **download our local database**. To do this, it's necessary to **start XAMPP**, start **Apache** and **MySQL**, and click on "**Admin**" **next to MySQL**:

![](/images/image-21.png)

**PhpMyAdmin** will open, a software to easily manage MySQL databases.

![](/images/Untitled-1.jpeg)

Here, go to the **left-hand bar** and select the database of your site: **wp-test**. Then click on "**Export**."

![](/images/image-22.png)

You can leave it as "Quick" and click directly on "**Go**."

So, you'll download your database, and you can save it wherever you want.

Once saved, you need to **open it**. You don't need a specific program; the standard "**Notepad**" or "**Text editor**" will do.

![](/images/image-23.png)

The opened file looks like this, a set of strings. **This is our database**.

Now we need to do **a delicate operation**: **replace the local site URL with the online site URL**.

To do this, go to "**Edit – Replace**."

![](/images/image-24-2.png)

In Find, you should enter the URL of your local site, i.e., "http://localhost/your-site," while in Replace with, you should enter the altervista URL, in my case, "http://albydev.altervista.org."

After filling it out, you can press **Replace all** and finally **save** the file.

**Now our Database is ready to be imported into altervista.**

### IMPORT THE DATABASE TO ALTERVISTA

Now, go back to the altervista backend and click on **Access PhpMyAdmin**.

![](/images/image-12.png)

The **phpMyAdmin** of our altervista server will open.

Click on your database on the left, called **my_your-site**, and then on "**Import**."

![](/images/image-25.png)

Now click on "**Choose file**," select the modified local database we just saved, and finally press "**Go**."

In the end, you should see a message like the following on a green background:

_Import completed successfully, 86 queries executed._ (wp-test.sql)

_**Et voilà!**_

The database is imported!

Now all we have to do is **wait for FileZilla to finish uploading** our site online.

### THE LAST OPERATION

When FileZilla has finished the upload, we need to do **one last modification**!

Open the "wp-config.php" file on altervista by right-clicking on the file and clicking on "**View/Edit**."

![](/images/image-26.png)

Notepad will open with the wp-config.php file inside.

![](/images/image-27.png)

Here, we just need to **modify the database details**, which are no longer from XAMPP but from altervista.

Look for these fields:

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-test' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );
```

On **DB_NAME**, we need to specify the new database name, which will be "**my_your-site**." For safety, go back to the **altervista PhpMyAdmin** and look in the left sidebar; there's a single database starting with "my_," and that's the name to enter.

Fortunately, the other data remains the same. Now, just **save** the file, reopen **FileZilla**, and click "Yes" to make the changes online!

![](/images/image-28.png)

At this point, you just need to go to the URL of your Altervista site, and you'll find it online, beautiful and functional!

One last operation that is good to do is to **save the WordPress permalinks** again, so that all the links work correctly.

To do this, just log in to the backend and go to "Settings – Permalinks" and simply click on "**Save Changes**," without modifying anything!

![](/images/image-29.png)

**_CONGRATULATIONS_**!!!

**You have finished the beginner series! Now you can start delving into something more complex!**

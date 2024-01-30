---
title: "How to Enable Automatic Updates in WordPress for Major Releases."
description: "Tutorial on How to Enable Automatic Updates in WordPress. Forget manual updates and automate website maintenance."
date: "2021-02-19"
author: "Alberto Reineri"
categories:
  - WordPress DEV
---


Did you know that WordPress includes **automatic updates** enabled for minor versions? This means that the WordPress.org team can **automatically install security updates** without requiring any action from the user.

However, it **doesn't automatically update your website** when a new major version of the system is available. Unless you are part of a **managed WordPress hosting service**, you'll need to manually initiate the update yourself.

In this article, we will show you how to **easily enable automatic updates even for major releases**.

## How WordPress Automatic Updates Work

WordPress introduced the automatic update feature in **WordPress 3.7** (October 24, 2013). This allowed WordPress to automatically install new minor versions to enhance the security of your website.

There's an option to **disable automatic updates** in WordPress. However, we recommend **keeping automatic updates enabled** because they typically address significant security issues and vulnerabilities.

Managed WordPress hosting providers automatically update WordPress for all new versions, not just the minor ones.

Now, if you manage only one or two WordPress websites, updating them manually is not a big issue.

On the other hand, if you manage **multiple WordPress sites**, updating all of them can be time-consuming.

Let's see how to easily set up automatic updates for major versions of WordPress.

## Preparing for Automatic Updates in WordPress

The most crucial level of security you can add to any website is configuring a **backup system**. Whether you enable automatic updates or not, you should always have an automatic backup system in place for every WordPress website.

There are several useful **WordPress backup plugins** you can use to set up automatic backups for your WordPress site.

We recommend using the [UpdraftPlus](https://wordpress.org/plugins/updraftplus/) plugin because it's the most popular free WordPress plugin on the market. **UpdraftPlus** allows you to easily set up automatic backups for the entire WordPress website.

Additionally, it automatically stores backup files in a remote location such as **Google Drive, Dropbox, etc**.

After setting up automatic WordPress backups, you can proceed to enable automatic updates for major versions.

## Method 1: Enable WordPress Automatic Updates for Major Versions using a Plugin

This method is **simpler** and recommended for all users.

First, you need to install and activate the [Easy Updates Manager](https://wordpress.org/plugins/stops-core-theme-and-plugin-updates/) plugin.

Upon activation, you need to visit **Dashboard » Update Options** to configure the plugin.

![Update Options](images/image-27-1-1024x200.png)

In the "**WordPress core updates**" section, click on the "**Auto update all releases**" option.

The plugin will automatically save your settings and allow **automatic updates for major versions of WordPress**.

This plugin also allows you to **set other automatic updates** or disable them.

## Method 2: Enable Updates Manually

This method requires **adding code** to your WordPress files.

Firstly, you need to add the following line of code to your site's **_wp-config.php_** file.

```php
define( 'WP_AUTO_UPDATE_CORE', true );
```

There's a small issue with this code: it allows **nightly updates**.

To **disable nightly builds** and development updates, you need to add the following code to your **_functions.php_** file.

```php
add_filter( 'allow_dev_auto_core_updates', '__return_false' );
```

This filter will disable automatic updates for nightly builds or development updates.

Your WordPress site is now ready to automatically update, without your input, whenever a new version of WordPress is available.

## Frequently Asked Questions about WordPress Automatic Updates

### **1. Why do I need to install WordPress updates?**

**WordPress is regularly maintained software**. Thousands of developers contribute to making WordPress better and more secure.

You should install WordPress updates as soon as they are available. This ensures that your website has the latest security patches, new features for optimal **speed and performance**.

### **2. Are updates safe for my website?**

WordPress updates become immediately available for millions of websites. **The core team works very hard to ensure they are absolutely safe** for installation on all websites.

However, we advise everyone to **always perform a backup of the WordPress website before updates**. This allows you to quickly revert in case something goes wrong after an update.

### **3. Can I also automatically update WordPress plugins?**

By default, WordPress requires manual installation of plugin updates. However, **you can enable automatic updates for plugins** as well.

We hope this article helped you learn how to **enable automatic updates in WordPress** for

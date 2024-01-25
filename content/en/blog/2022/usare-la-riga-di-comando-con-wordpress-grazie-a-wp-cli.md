---
title: "Using the command line with WordPress with to WP-CLI"
description: "Tutorial on WP-CLI, the command-line tool for managing WordPress. Enhance your skills on WP!"
date: "2022-06-27"
categories:
  - WordPress DEV
---

If you're a WordPress developer, you've probably installed the CMS, updated it, and activated themes and plugins hundreds of times. While these routine development and maintenance tasks are quite easy to perform with the graphical user interface of WordPress, doing them over and over isn't very efficient.

The good news is that you can easily and effectively speed up the development and maintenance of WordPress with the WordPress Command-Line Interface (WP-CLI). In this post, we'll explore the various ways you can use WP-CLI and look at some useful WP-CLI commands to help you get started in the right direction.

## AN INTRODUCTION TO WP-CLI

If you've been in web development for a while, you're probably familiar with the command-line interface. WP-CLI is the command-line interface for WordPress. For those of you who haven't delved much into programming, WP-CLI is a tool that allows you to manage WordPress installations without using a web browser.

WP-CLI lets you do anything from installing the WordPress CMS on a brand new site to performing site-level operations on an existing WordPress website. The best part is that the set of steps you need to follow to complete such tasks will, in most cases, be reduced to a single line of code.

Now that we've seen what WP-CLI is and how it can help speed up the development of your next project, let's look at how you can get started with this powerful tool.

## INSTALLING WP-CLI ON YOUR HOSTING ENVIRONMENT

The first thing you need to do to start with WP-CLI is to ensure that your hosting environment meets the minimum requirements:

- UNIX environment.
- PHP 5.3.29 (or later).
- WordPress 3.7 (or later).
- Secure Shell (SSH) enabled on your web server.

After confirming those essential elements, go ahead and download the _wp-cli.phar_ file using the following command:

```bash
$ curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

And voilà! WP-CLI should now be installed on your hosting environment. If you want to make sure it works correctly, simply run the following command:

```bash
$ php wp-cli.phar --info
```

If everything goes well, you should see something similar on the command line specifying which version of WP-CLI is running in your hosting environment:

```bash
PHP binary: /usr/bin/php5
PHP version: 5.5.9-1ubuntu4.14
php.ini used: /etc/php5/cli/php.ini
WP-CLI root dir: /home/wp-cli/.wp-cli
WP-CLI packages dir: /home/wp-cli/.wp-cli/packages/
WP-CLI global config: /home/wp-cli/.wp-cli/config.yml
WP-CLI project config:
WP-CLI version: 1.3.0
```

However, if you find that WP-CLI has not been installed correctly on your system, I recommend checking some [alternative installation methods](https://make.wordpress.org/cli/handbook/installing/#alternative-installation-methods) for more information on how to set it up.

Finally, we'll create an executable file for WP-CLI and move it to its directory so that you can run it from anywhere:

```bash
$ chmod +x wp-cli.phar
$ sudo mv wp-cli.phar /usr/local/bin/wp
```

For simplicity, we've named the directory _wp_. Now, whenever you need to use WP-CLI, all you have to do is run the _wp_ command from the command line.

## WORDPRESS DEVELOPMENT AND SITE MAINTENANCE WITH WP-CLI

Now that WP-CLI is installed and ready for use, let's look at some of the most useful things you can do to speed up routine development and maintenance tasks in WordPress.

### INSTALLING WORDPRESS

Navigate to the directory where you want to install the WordPress CMS and run the following line of code:

```bash
$ wp core download
```

You'll need to create a _wp-config.php_ file to proceed with your installation. Here's how you can do it:

```bash
$ wp core config --dbname=databasename --dbuser=databaseuser --dbpass=databasepassword --dbhost=localhost --dbprefix=prfx_
```

_(I used sample text for the database name and user credentials. Be sure to replace them with your database information before running the code.)_

Finally, you can start the actual installation by running the main installation command below. Remember to replace the sample parameters with your site information before running the code.

```bash
$ wp core install --url=yoursite.com --title="Your WordPress Site's Title" --admin_user=admin_username --admin_password=admin_password --admin_email=admin@yoursite.com
```

### UPDATING WORDPRESS

Sooner or later, a new version of WordPress will be released, and you'll need to update your installation to the latest version. If you're not sure which version of WordPress is currently running on your site, simply run the following command:

```bash
$ wp core version
```

If you believe your site does need to be updated, it's best to perform a full backup of its database before proceeding. Here's how you can do it with WP-CLI:

```bash
$ wp db export my-db-backup.sql
```

Running this command will create a complete backup of your site's database and save it in the main directory in a file named _my-db-backup.sql_.

Finally, you can update your site's core files and its database by running the following lines of code:

```bash
$ wp core update
$ wp core update --db
```

For those of you managing multiple sites or multisite networks, run the following script to update all sites at once:

```bash
$ declare -a sites_to_update=('/var/www/wordpress_site_1' '/var/www/wordpress_site_2' '/var/www/wordpress_site_n')
for site in "${sites_to_update[@]}"; do wp --path=$site core update done
```

_(Remember to replace the sample text with the main directory names of your WordPress websites.)_

### THEME AND PLUGIN MANAGEMENT

One of the best things about WP-CLI is that it connects your web server to the official WordPress [Theme](https://wordpress.org/themes/) and [Plugin](https://wordpress.org/plugins/) directories. This means you can manage theme and plugin installations using only the command line.

**WordPress Theme Commands:**

- **To install a theme:** _wp theme install theme_name_
- **To activate an installed theme:** _wp theme activate theme_name_
- **To update an installed theme:** _wp theme update theme_name_
- **To update all installed themes:** _wp theme update --all_

**WordPress Plugin Commands:**

- **To install a plugin:** _wp plugin install plugin_name_
- **To activate an installed plugin:** _wp plugin activate plugin_name_
- **To update an installed plugin:** _wp plugin update plugin_name_
- **To update all installed plugins:** _wp plugin update --all_

_(Remember to replace the sample text with the name of the theme or plugin you want to interact with.)_

### CREATING CUSTOM POST TYPES

WP-CLI takes the heavy lifting out of creating custom post types in WordPress and reduces it to a simple line of code.

 Instead of downloading a plugin to help you get the job done, why not try the following line of code:

```bash
$ wp scaffold post-type cpt_slug --label=CPT_Label --theme=theme_name
```

All you have to do is replace the sample text with the slug, label, and theme name of your custom post type, and voilà!

### CREATING CHILD THEMES

If you've ever created a child theme, you've had to access the control panel and create folder and file structures within the site. WP-CLI allows you to create a child theme with a single line of code:

```bash
$ wp scaffold child-theme name-of-child-theme --parent_theme=name_of_parent_theme --theme_name='My Child Theme' --author='Your Name' --author_uri=http://www.yoursite.com --theme_uri=http://www.themesite.com --activate
```

_(As always, remember to replace the sample text with the child theme and parent theme information.)_

## CONCLUSION

With WP-CLI, you can get more done by doing less. If you want to increase your productivity by speeding up routine development and maintenance tasks in WordPress, then WP-CLI is definitely worth trying.

I've shown you how to install the tool in your hosting environment, and we've looked at some scenarios where WP-CLI beats the WordPress GUI in terms of efficiency. Now all that's left is for you to try it out!

Oh, it might sound obvious, but NEVER TEST IN A PRODUCTION ENVIRONMENT, use STAGING or do it LOCALLY.

Happy coding!
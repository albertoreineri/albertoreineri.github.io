---
title: "How to Install a LAMP Stack (Linux, Apache, MySQL, PHP) on Ubuntu"
description: "Tutorial su come installare una LAMP stack (Linux, Apache, MySQL, PHP) su Ubuntu o qualsiasi distribuzione basata su Debian."
date: "2022-06-20"
categories:
  - Linux

---


# Introduction

A "LAMP" stack is a group of open-source software typically installed together to enable a server to host dynamic websites and web applications. This term is actually an acronym representing the Linux operating system, with the Apache web server. The website data is stored in a MySQL database, and dynamic content is processed by PHP.

In this guide, we will install a LAMP stack on an Ubuntu server.

## Prerequisites

This tutorial is created on Ubuntu but works on all Debian-based distros, such as Pop!\_OS, Elementary OS, Linux Mint, etc.

## Step 1: Installing Apache

The Apache web server is a popular open-source web server that can be used in conjunction with [PHP](/en/blog/the-basics-of-php/) to host dynamic websites. Ensure your `apt` cache is up-to-date with:

```bash
sudo apt update
```

If this is your first time using `sudo` in this session, you'll be prompted to enter your user password to validate your permissions.

Once the cache is updated, you can install Apache by running:

```bash
sudo apt install apache2
```

After entering this command, `apt` will inform you which packages it intends to install and how much disk space they will occupy. Press `S` (or `Y` if your system is set to English) and then press `ENTER` to confirm, and the installation will proceed.

*Note: In this guide, I will use '_Y_' to proceed with the installation because I habitually install Linux in English... If you use Italian, remember to press '_S_'.*

And voilà! Apache is now installed!

You can perform a quick check to verify that everything went as expected by visiting your server's public IP address in your web browser. If you're local, simply open the browser and enter:

```bash
http://localhost
```

If you're configuring a remote web server, then you'll need to enter your IP address:

```bash
http://your_server_ip
```

You should now see Apache's default web page in your browser, which is available for informational and testing purposes. It should look something like this:

![Apache Default Page](/images/small_apache_default_1804.png)

If you see this page, your web server is now correctly installed and accessible through your firewall.

### How to find your server's public IP address

If you're configuring a remote web server and don't know what your server's public IP address is, there are several ways to find it. Usually, it's the address you use to connect to your server via SSH.

There are different ways to do this from the command line. First, you can use the `iproute2` tools to get your IP address by typing:

```bash
ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
```

This will return two or three lines. They are all correct addresses, but your computer may only be able to use one, so feel free to try them.

An alternative method is to use the `curl` utility to contact an external party to tell you how your server 'sees' itself. This is done by asking a specific server what your IP address is:

```bash
sudo apt install curl
curl http://icanhazip.com
```

Regardless of the method used to obtain your IP address, type it into your web browser's address bar to view the default Apache page.

## Step 2: Installing MySQL

Now that you have your web server up and running, it's time to install MySQL. MySQL is a database management system that organizes and provides access to databases where your site can store information.

Again, we use `apt` to acquire and install this software:

```bash
sudo apt install mysql-server
```

**Note:** In this case, there's no need to run `sudo apt update` before the command. This is because you recently did it in the commands above to install Apache. Your computer's package index should already be up-to-date.

This command will also show you a list of packages to be installed, along with the amount of disk space they will occupy. Enter `Y` (or `S`) to continue.

After the installation, run a simple pre-installed security script with MySQL that will remove some dangerous default settings and lock down access to your database system (If you're local, this step is not necessary). Start the interactive script by running:

```bash
sudo mysql_secure_installation
```

This will ask you if you want to set up the `VALIDATE PASSWORD PLUGIN`.

**Note:** Enabling this feature is a judgment call. If enabled, passwords that do not meet the specified criteria will be rejected by MySQL with










## Step 2: MySQL Installation

Now that your web server is up and running, it's time to install MySQL. MySQL is a database management system that will organize and provide access to the databases where your site can store information.

Once again, we use `apt` to acquire and install this software:

```bash
sudo apt install mysql-server
```

**Note:** In this case, there is no need to run `sudo apt update` before the command. This is because you recently executed it in the commands above to install Apache. The package index on your computer should already be updated.

This command will also show you a list of the packages that will be installed, along with the amount of disk space they will occupy. Enter `Y` (or `S`) to proceed.

After the installation is complete, run a simple security script preinstalled with MySQL. This script will remove some dangerous default settings and block access to your database system (if you're local, this step is not necessary). Initiate the interactive script by running:

```bash
sudo mysql_secure_installation
```

This will ask you if you want to configure the `VALIDATE PASSWORD PLUGIN`.

**Note:** Enabling this feature is a judgment call. If enabled, passwords that do not meet the specified criteria will be rejected by MySQL with an error. This can cause issues if you use a weak password along with software that automatically configures MySQL user credentials, like the Ubuntu packages for phpMyAdmin. It is safe to leave validation disabled, but you should always use complex and unique passwords for database credentials.

Reply with `Y` for yes or anything else to continue without enabling.

```bash
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No:
```

If you answer "yes," you will be asked to select a password validation level. Keep in mind that if you enter `2`, the strongest level, you will receive errors when trying to set a password that does not include numbers, uppercase and lowercase letters, special characters, or is based on common dictionary words.

```bash
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 1
```

Regardless of whether you chose to set up the `VALIDATE PASSWORD PLUGIN`, your server will then ask you to select and confirm a password for the MySQL **root** user. This should not be confused with the **system root**. The **database root** user is an administrative user with full privileges on the database system. Even though the default authentication method for the MySQL root user does not require a password, **even if one is set**, you should define a strong password here as an additional security measure. We'll discuss this further in a moment.

If you enabled password validation, you will be shown the password strength for the root password you just entered, and your server will ask if you want to change that password. If you are satisfied with your current password, type `N`:

```bash
Using existing password for root.

Estimated strength of the password: 100
Change the password for root ? ((Press y|Y for Yes, any other key for No) : n
```

For the rest of the questions, press `Y` and press `ENTER` at each prompt. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes made.

Finally, check if you can access the MySQL console by typing:

```bash
sudo mysql
```

This will connect to the MySQL server as the administrative database **root** user, inferred from the use of `sudo` when running this command. You should see an output like this:

```bash
OutputWelcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 5
Server version: 5.7.34-0ubuntu0.18.04.1 (Ubuntu)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

To exit the MySQL console, type:

```bash
exit
```

Note that you do not need to provide a password to connect as the **root** user, even if one was set during the `mysql_secure_installation` execution. This is because the default authentication method for the MySQL administrative user is `unix_socket` instead of `password`. While it may initially seem like a security issue, it makes the database server more

 secure because only users with sudo privileges connecting from the console or via an application running with the same privileges are allowed to access as the MySQL **root** user. In practical terms, this means you won't be able to use the administrative database **root** user to connect from your PHP application. The MySQL account acts as a safeguard in case the default authentication method is changed from `unix_socket` to `password`.

For enhanced security, it's advisable to have dedicated user accounts with less extensive privileges set up for each database, especially if you plan to have multiple databases hosted on your server. However, I will create more detailed guides on this in the future.

Your MySQL server is now installed and secured. Let's now proceed to install PHP, the final component in the LAMP stack.



## Step 3: PHP Installation

PHP is the component of the setup that will process code to display dynamic content. It can run scripts, connect to your MySQL databases to fetch information, and deliver the processed content to your web server so that it can display the results to your visitors.

Once again, leverage the `apt` system to install PHP. In addition to the `php` package, you will also need to include `libapache2-mod-php` in Apache and the `php-mysql` package to allow PHP to connect to MySQL databases. Execute the following command to install all three packages and their dependencies:

```bash
sudo apt install php libapache2-mod-php php-mysql
```

This should install PHP without any issues. We will test it shortly.

### Modify Apache Directory Index (Optional)

In some cases, you may want to change how Apache serves files when a directory is requested. By default, if a user requests a directory from the server, Apache will first look for a file named `index.html`. However, we want to instruct the web server to prefer PHP files over others, so that Apache looks for `index.php` as the first file. Otherwise, an `index.html` placed in the root of the application's document will always take precedence over an `index.php`.

To make this change, open the `dir.conf` configuration file in a text editor of your choice. Here, we will use `nano`:

```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

You should see something like this:

```apache
<IfModule mod_dir.c>
    DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm
</IfModule>
```

Move the PHP index file (highlighted above) to the first position after `DirectoryIndex`, like this:

```apache
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
```

Once done, save and close the file by pressing `CTRL+X`. Confirm saving by typing `Y`, and then press `ENTER` to verify the file's save location.

Next, restart the Apache Web server so that the changes are recognized. You can do this with the following command:

```bash
sudo systemctl restart apache2
```

You can also check the status of the `apache2` service using `systemctl`:

```bash
sudo systemctl status apache2
```

```bash
Sample Output
● apache2.service - The Apache HTTP Server
   Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
  Drop-In: /lib/systemd/system/apache2.service.d
           └─apache2-systemd.conf
   Active: active (running) since Thu 2021-07-15 09:22:59 UTC; 1h 3min ago
 Main PID: 3719 (apache2)
    Tasks: 55 (limit: 2361)
   CGroup: /system.slice/apache2.service
           ├─3719 /usr/sbin/apache2 -k start
           ├─3721 /usr/sbin/apache2 -k start
           └─3722 /usr/sbin/apache2 -k start

Jul 15 09:22:59 ubuntu1804 systemd[1]: Starting The Apache HTTP Server...
Jul 15 09:22:59 ubuntu1804 apachectl[3694]: AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1. Set the 'ServerName' di
Jul 15 09:22:59 ubuntu1804 systemd[1]: Started The Apache HTTP Server.
```

Press `Q` to exit this status view.

## Step 4: Configure a Virtual Host (Recommended)

When using the Apache web server, you can use _virtual hosts_ to encapsulate configuration details and host more than one domain from a single server. We will now set up a sample domain called **my_domain**, and you can replace it with the domain name you intend to use.

Apache comes with a server block enabled by default that is configured to serve documents from the `/var/www/html` folder. While it works well for a single site, it can become cumbersome when hosting multiple sites. Instead of modifying `/var/www/html`, let's create a directory structure within `/var/www` for the **my_domain** site, leaving `/var/www/html` as the default directory to serve if a client request doesn't match any other site.

Create the directory for **my_domain** as follows:

```bash
sudo mkdir /var/www/my_domain
```

Then, assign ownership of the directory using the `$USER` environment variable, which refers to the current logged-in user:

```bash
sudo chown -R $USER:$USER /var/www/my_domain
```

The permissions for your main web directory should be correct if you haven't changed its umask value, but you can still type:

```bash
sudo chmod -R 755 /var/www/my_domain
```

Now, create a sample `index.html` page using `nano` or your preferred editor:

```bash
nano /var/www/my_domain/index.html
```

Inside, add the following sample HTML code:

```html
<html>
    <head>
        <title>My Domain</title>
    </head>
    <body>
        <h1>My domain is WORKING!!!</h1>
    </body>
</html>
```

Save and close the file when you're done.

For Apache to serve this content, you need to create a virtual host file with the correct directives. Instead of modifying the default configuration file located at `/etc/apache2/sites-available/000-default.conf` directly, let's create a new one at `/etc/apache2/sites-available/my_domain.conf`:

```bash
sudo nano /etc/apache2/sites-available/my_domain.conf
```

Paste the following configuration block, which is similar to the default but updated for our new directory and domain name, into `/etc/apache2/sites-available/my_domain.conf`:

```apache
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    ServerName my_domain
    ServerAlias www.my_domain
    DocumentRoot /var/www/my_domain
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Note that we've updated the `DocumentRoot` to our new directory and set `ServerAdmin` to an email that the administrator of the **my_domain** site can access. We've also added two directives: `ServerName`, which sets the base domain that should match this virtual host definition, and `ServerAlias`, which defines other names that should match as if they were the base name.

Save and close the file when you're done.

Now, enable the file with the `a2ensite` tool:

```bash
sudo a2ensite my_domain.conf
```

Finally, disable the default site defined in `000-default.conf`:

```bash
sudo a2dissite 000-default.conf
```

Then, test for configuration errors:

```bash
sudo apache2ctl configtest
```

You should see the following output:

```bash
Output
Syntax OK
```

Restart Apache to implement the changes:

```bash
sudo systemctl restart apache2
```

Apache should now serve your domain name. You can test it by navigating to `http://my_domain`; you should see the HTML page created earlier working correctly.

With this, your virtual host is fully configured. Before making further changes or deploying an application, it would be prudent to proactively test the PHP configuration in case there are issues that need to be addressed.


## Step 5: Test PHP Processing on the Web Server

To verify that your system is correctly configured for PHP, create a PHP script named `info.php`. For Apache to find and serve this file correctly, it must be saved in the root directory of the web.

Create the file in the web root you created in the previous step by executing:

```bash
sudo nano /var/www/my_domain/info.php
```

This will open an empty file. Add the following text, which is valid PHP code, inside the file:

```php
<?php
phpinfo();
```

Once done, save and close the file.

Now you can check whether your web server can correctly display the content generated by this PHP script. To test it, visit this page in your web browser. You will need the public IP address or the domain name of your server again.

The address you'll want to visit is:

```
http://my_domain/info.php
```

The page you should see should resemble this:

![PHP Info Page](/images/small_php_info_1804.png)

This page provides some basic information about your server from a PHP perspective. It's useful for debugging and ensuring that settings are applied correctly.

If you can see this page in your browser, your PHP is working as expected.

You probably want to remove this file after this test because it could potentially provide information about your server to unauthorized users. To do so, run the following command:

```bash
sudo rm /var/www/my_domain/info.php
```

You can always recreate this page if you need to access the information again later.


## Conclusion

Now that you have installed a LAMP stack, you have many choices for what to do next. You've set up a platform that will allow you to install most types of websites and web software on your server.

All that's left is to start installing or developing your PHP-based sites on your new LAMP stack!

Happy coding!
---
title: "Laravel locally on Local by Flywheel"
description: "Short guide on how to install Laravel locally using Local WP, a fast and super simple method."
date: "2021-07-02"
categories:
  - PHP
---

Although Local by Flywheel was primarily designed for using WordPress locally, it can work very well with Laravel or projects in Core PHP and MySQL.

Local is straightforward to use, fast, and well-organized, making it my default choice among local servers.

Let's now see how to install Laravel locally on Local by Flywheel.

_Note: I will try to update this article with the latest Laravel versions. (last update: February 18, 2020)_

## Adding the site locally

Firstly, you need to add a site as usual in Local:

1. Click on the large "+" button.
2. Assign a name to the site (let's say "Laravel").
3. Select the environment you want (the default nginx works perfectly with Laravel).
4. Enter your WP username and password (these will be deleted shortly).
5. Click on "Add site."

You can also quickly add an SSL certificate if you wish. I recommend doing so, as all websites and apps will be secure when launched in production, giving you an environment very similar to online.

## Install Laravel and a new Laravel project

Now let's see how to install Laravel locally on Local by Flywheel.

This step requires Composer to be installed globally on your system. You can find instructions for this step [**here**](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos).

Once Composer is installed, you can follow the installation instructions to also install Laravel globally. You can find the documentation [**here**](https://laravel.com/docs/5.7/installation), but the basic command will be:

```bash
composer global require laravel/installer
```

Once Laravel is globally installed, let's install it in our app locally on Local:

- Open "Site Shell": right-click on the "Laravel" site and click on "Open site shell."
- In the Site Shell Terminal, navigate to the "Laravel" directory you just created (`cd ../..`, we need to go back two levels).
- Delete the current "app" folder (in the Finder / Explorer window or via the command line).
- Then run the following command from the new site directory:

```bash
laravel new app
```

If this command gives you "_zsh: command not found: laravel_," try running this from the terminal:

```bash
export PATH="$HOME/.composer/vendor/bin:$PATH"
```

This will create a new Laravel project inside the "app" directory and include the "public" folder, used by Local by default.

At this point, you should be able to click "View Site" in the local app, and it should show you the Laravel welcome page, at htts://laravel.local, for example. If you get a 502, 404, or any other error, you might need to restart the server:

![](images/Laravel-on-Local_lbxrd9.jpeg)

## Linking the database

In your `.env` file, you can replace the following credentials (assuming you haven't changed the default settings of Local by Flywheel):

```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_SOCKET="/Users/yourusername/Library/Application Support/Local/run/lkIEkdiowIEkmd/mysql/mysqld.sock"
DB_DATABASE=local
DB_USERNAME=root
DB_PASSWORD=root
```

You can find the DB\_SOCKET in the "Database" tab of Laravel.

The above will connect to the local database. If you open your database using Adminer, you can go in and delete the WordPress tables, those that start with "wp\_."

Finally, you can check the connection between Laravel and the database with this:

```bash
php artisan migrate
```

After running the above command, you can refresh Adminer and view the database with the default seed.

And voilà! That's it. In no time, we've created a ready-to-go Laravel instance!

Happy coding!

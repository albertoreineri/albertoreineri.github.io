---
title: "Simple Backend Login in Core PHP"
description: "Tutorial on How to Create a Backend, a Restricted Area in Core PHP"
date: "2021-05-31"
categories:
  - PHP
---

I have made a new commit to this project, updating it to PDO, adding bindparam to enhance security, and slightly changing the software architecture. The updated code is in the GitHub repository mentioned in the article.

It's true, today there are a plethora of CMS and frameworks already available, just install them and voilà! The game is done!

Everyone has a login system to access a restricted area!

However, I have always been one of those who don't settle for ready-made solutions but want to learn to cook.

That's why I decided to create my own CMS, starting from scratch and using only HTML, CSS, JS, and PHP.

One of the first things I had to implement with my CMS was a login system to access the restricted area.

## Core PHP Login System

I have now decided to make an **open source** small access system to a restricted area.

You can find the source code for this project on [my GitHub profile](https://github.com/albertoreineri) at this address: [https://github.com/albertoreineri/Simple-login-and-registration-in-php](https://github.com/albertoreineri/Simple-login-and-registration-in-php)

Let's skip routing systems and software architecture and **keep it simple,** let's talk only about the raw login.

### Restricted Area

Firstly, I created a folder called "**login**," inside which there are the files for the restricted area.

If I haven't logged in yet, I will see the **login form.**

![Login Form](/images/image.png)

In the **index.php** in the login folder, I inserted the **form** to perform access to the restricted area, with the form redirecting to the **access.php** file containing the functions to check access data.

```html
<!-- Login form -->
<form class="" action="access.php" method="POST">
    <!-- Action -->
    <input type="hidden" name="action" value="login">
    <!-- Email or Username -->
    <label for="email">Email or Username</label>
    <input autofocus name="email" type="text">
    <!-- Password -->
    <label for="password">Password</label>
    <input name="password" id="password" placeholder="" type="password">
    <!-- Login Button -->
    <button type="submit">Login</button>
</form>
<!-- /Login form -->
```

**Access.php** handles both **login** and **registration** of new users. It's a file that contains only PHP, performs checks, and then redirects to the correct page based on the type of request.

If I entered the correct data, it redirects to the **backend**.

However, if I entered incorrect data, it redirects me to the login form with an **error** message.

If I am **creating a new user, it follows the registration process,** sending a confirmation email with a link to confirm the account.

![User Registration](/images/image-1.png)

**access.php**

```php
<?php
//Config File
include("config.php");

//Control Action
if ($_POST['action'] == "login") {
    /*------------------------------------------------------
                        LOGIN
    -------------------------------------------------------*/
    ///$_Post variables
    $email = $_POST['email'];
    $password = $_POST['password'];

    //Query
    $sql = "SELECT * FROM users WHERE email = '" . $email . "' OR username ='" . $email . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {

            //Password control
            if (!(password_verify($password, $row["password"]))) {
                header("location: error.php?error=Wrong Password");
                die();
            }

            //Start Session
            session_start();

            //Save user id in session
            $_SESSION['id'] = $row["id"];

            //Redirect to backend homepage
            header("location: welcome.php");
            die();
        }
    } else {
        header("location: error.php?error=Wrong Email or Username");
        die();
    }
} elseif ($_POST['action'] == "register") {
    /*------------------------------------------------------
                        REGISTER
    -------------------------------------------------------*/
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    //Control if the user or email are already in the database
    $sql = "SELECT * FROM users WHERE email = '" . $email . "' OR username = '" . $username . "'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            header("location: error.php?error=Email or Username already register!");
        }
    }

    //Insert new user in DB
    $password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (username,email,password)
    VALUES (
    '" . $username . "',
    '" . $email . "',
    '" . $password . "'
    )";
    if ($conn->query($sql) === TRUE) {
        header("location: index.php");
    } else {
        header("location: error.php?error=" . $conn->error);
    }
}
$conn->close();
```

### Database

The database is a very simple MySQL, with a table "**users**" containing user data and the **encrypted password.**

To **restrict access to non-logged-in users** and allow access only to logged-in users, you can use **session variables,** to be included in every backend file. This way, access is only allowed to those who have passed through the login form. This step is not present on GitHub, but it is straightforward to integrate, and I might add it when I have time!

I hope it has been **useful** and **interesting.**

If you want to **use** this form, try it, and **improve** it, follow the **instructions** in the readme.txt file on GitHub.

_Happy coding!_
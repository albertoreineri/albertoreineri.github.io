---
title: "Connecting PHP and MySQL with PDO"
description: "Tutorial on how to connect PHP to a MySQL Database using PDO!"
date: "2021-06-30"
author: "Alberto Reineri"
categories:
  - PHP
---

Connecting a MySQL database to a [PHP](/en/categories/php/) project is almost always essential; let's see how to do it using PDO.

While you can still use MySQLi, [PDO](https://www.html.it/pag/63991/pdo-vs-mysqli/) ensures higher security levels.

The procedure is straightforward; let's see how to do it:

First, let's define the connection variables for our database:

```php
$servername = "localhost";
$username="root";
$passworddb="root";
$dbname="dbname";
```

Now, all we have to do is establish the actual connection in this way:

```php
try{
    $db = new PDO("mysql:host=$servername;dbname=$dbname", $username, $passworddb);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    print "Error! ". $e->getMessage() ." <br/>";
    die();
}
```

With this, we will connect to our database and generate an error message in case of an issue, making the debugging process faster.

Now, let's test the connection. When you open the file containing this code, you should see a completely blank page. If so, the connection works; otherwise, you should see an error message.

To be even more certain about the connection, let's try inserting some data into our database, retrieve it, and display it on the PHP page.

In this example, I created a "Users" table with a "Name" field. Now, let's print all the data inside this table:

```php
// Select from DB
$query = $db->prepare("SELECT * FROM Users");
$query->execute();
$query->setFetchMode(PDO::FETCH_ASSOC);
while($row = $query->fetch()){
    echo $row['name']. "<br>";
}
```

And Voilà! If you see the list of names you entered into the database, then the connection between PHP and MySQL through PDO is established. Now, it's time to develop the web app around it!

_Happy coding!_

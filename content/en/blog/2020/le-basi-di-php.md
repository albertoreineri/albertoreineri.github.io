---
title: "6. The Basics of PHP"
description: "Discover the fundamentals of PHP on my blog: from variables to functions, an essential journey into the web programming language. Enter the coding world!"
date: "2020-03-17"
url: "/en/blog/the-basics-of-php"
categories:
  - Start Here
---


**PHP** is one of the **most widely used programming languages** in the web development domain.

Many **major companies** use it for their projects, including:

- Facebook
- Wikipedia
- Yahoo
- Mailchimp
- Slack
- Dailymotion
- Etsy

Among them is Automattic, the company that developed and manages **WordPress**.

In fact, our **CMS (Content Management System)** is built using **PHP**.

As with any framework, it's always good to have at least a general understanding of the language on which it's built. In our case, we are interested in **WordPress**, so it's good to know some PHP to understand it thoroughly.

Let's see **how PHP works**.

## PHP

PHP is a **server-side language**, meaning it can't function directly in the browser like HTML, CSS, and JavaScript. It **requires a server** to operate.

The uniqueness of PHP is that it **can be executed within HTML pages**; it can be directly inserted amid various HTML tags.

**Example:**

```php
<html>
   <head></head>
   <body>
      <?php echo "HELLO"; ?>
   </body>
</html>
```

Here, you can see **PHP inserted directly into the body of the HTML page**.

This makes its usage very **simple** and immediate.

### Local Server

To start using PHP on our computer, we need to **use a local server**.

As mentioned earlier, while HTML, CSS, and JavaScript can run in the browser, PHP needs a server.

There are many local servers. In this guide, we will use **XAMPP** because it is simple and available for all operating systems.

If you want to know how to install XAMPP, look [here](en//how-xampp-works/).

### Basic Syntax

As mentioned, PHP is executed within HTML pages, but it is necessary to **separate what is PHP from what is not**.

PHP code should be placed between these tags: `<?php` and `?>`

```php
<?php
    // PHP code
?>
```

Anything placed between these tags will be PHP; the rest will be HTML.

### End of Line

Similar to JavaScript, PHP also needs a **semicolon at the end of each line** to understand where one rule ends and another begins. So, always remember to insert the semicolon after each line.

```php
echo "HELLO";
```

### Comments

Comments can be of **two types:**

**Single-line:** If you want to comment on the entire line, just insert a **double slash** at the beginning of the line.

```php
// Single-line comment
```

**Multi-line:** To comment on multiple lines, use **/* comment */**.

```php
/*
Multi-line
Comment
Comment
*/
```

### Variables

Variables in PHP are preceded by **$**, like this:

```php
$greeting = "HELLO";
echo $greeting;
```

**Let's get started!**

First, go to the **htdocs** folder of XAMPP and create a new folder "**php_test**."

## Print Text in HTML

Let's start with a simple exercise: print the classic "**Hello, world!**" on an HTML page.

Create a file "**index.php**" and open it with **VS Code**.

Now, you can press **Exclamation mark** followed by **Tab**; this way, VS Code will provide the basic HTML skeleton.

Now, let's proceed to **print our text**.

The PHP function to print text is **echo();**

So, write this in the body:

```php
<?php
   echo("Hello, world!");
?>
```

Now, **save**, open the browser, and go to this link:

[http://localhost/php_test](http://localhost/php_test)

If everything went smoothly, you should see "**Hello, world!**."

**Perfect**! You have started using PHP. But now, let's go a bit deeper.

## Variables

In PHP, we can **define a variable** with this syntax:

```php
$x = 1;
$y = "hello";
$z = true;
```

We have just defined a variable named _x_ with the number 1, a variable named _y_ with the string "hello," and a variable named _z_ with the boolean value true. Once defined, we can use them in the code.

PHP has many types of variables, but the most basic variable types are integers, floats (decimal numbers), strings, and boolean values.

PHP can also use **arrays** and objects, which we'll explain later.

Variables can also be set to **NULL**, meaning the variables exist but do not contain any value.

## Arithmetic Operators

We can use simple arithmetic operators to **add, subtract, or concatenate** variables.

We can also **print** PHP variables using the **echo** command (as we saw earlier).

Let's try, for example, adding two numbers, putting the result into a new variable, and printing it.

```php
$x = 1;
$y = 2;
$sum = $x + $y;
echo $sum;       // Prints 3
```

## Concatenating Strings

In PHP, you can concatenate variables and strings using the dot (.) operator, like this:

```php
$years = 30;
$name = "Marco";
echo $name . " is " . $years . " years old!";
```

## Strings

Strings are **variables that contain text**. For example, a string containing a name is defined as follows:

```php
$name = "Marco";
echo $name;
```

We can easily **format strings using variables**. For example:

```php
$name = "Marco";
$sentence = "Hello, $name";
echo $sentence;
```

We can also **concatenate** strings using the **.** operator:

```php
$name = "Marco";
$surname = "Rossi";
$full_name = $name . " " . $surname;
echo $full_name;
```

To measure the **length** of a string, use the **strlen** function:

```php
$string = "Let's measure how many characters this string has";
echo strlen($string);
```

To cut a part of a string and return it as a new string, you can use the **substr** function:

```php
$filename = "image.png";
$extension = substr($filename, strlen($filename) - 3);
echo "The extension of this file is $extension";
```

## Simple Arrays

Arrays are a special type of **variable that can contain many variables** and keep them in a list.

For example, suppose you want to create a list of all odd numbers between 1 and 10. Once created, you can assign new variables that will refer to a variable in the array using the index of the variable.

To use the first variable in the list (in this case, the number 1), you will need to provide **the first index**, which is **0**, as PHP uses zero-based indices, like most programming languages today.

```php
$odd_numbers = [1,3,5,7,9];
$first_odd_number = $odd_numbers[0];
$second_odd_number = $odd_numbers[1];

echo "The first odd

 number is $first_odd_number\n";
echo "The second odd number is $second_odd_number\n";
```

Now, we can add new variables using an index. To add an item to the end of the list, we can assign the array with index 5 (the sixth variable):

```php
$odd_numbers = [1,3,5,7,9];
$odd_numbers[5] = 11;
print_r($odd_numbers);
```

## Loops

Loops help us **iterate over a variable using an index**. There are **two types of loops**: a **simple** (C-style) loop and a **foreach** loop.

### Simple Loop

Loops are very useful when we need to **iterate over an array and refer to the array member using a changing index**. For example, suppose you have a list of odd numbers. To print them, you need to refer to each item individually. The code we write in the for loop can use the index _i_, which changes in each iteration of the for loop.

```php
$numbers = [1,3,5,7,9];
for ($i = 0; $i < count($numbers); $i=$i+1) {
    $number = $numbers[$i];
    echo $number . "\n";
}
```

**The first line of the for loop defines 3 parts:**

- The initialization statement – in our case, we initialize the variable _i_ to 0.
- The conditional statement – this statement is evaluated in each loop. The loop stops when this condition is not met. This will happen when the variable _i_ becomes greater than the length of the array.
- The incremental statement: this statement is executed every time to increase the index variable by the necessary amount. Usually, we will increase _i_ by 1. There are also two shorter ways to increase a variable by 1.

### Foreach Loop

The **foreach** loop iterates over an element like an array or an object, providing the members in a specific variable one at a time.

For example, suppose you want to create a list of all odd numbers between 1 and 10 and print them one by one, as in the previous example. This time, we will use the **foreach** loop instead of a regular **for** loop with an index. Instead of using the variable as the array index, we get the element from the array directly into the _$odd\_numbers_ variable.

```php
$odd_numbers = [1,3,5,7,9];
foreach ($odd_numbers as $number) {
  echo $number . "\n";
}
```

## While Loop

**While** loops are simple blocks that are executed repeatedly until the condition of the while loop is satisfied.

Here's an example of a loop that runs a total of 10 times:

```php
$counter = 0;

while ($counter < 10) {
    $counter += 1;
    echo "Function executed $counter times.<br>";
}
```

## Functions

Functions are simple **blocks of code that we can call from anywhere**. For example, we can create a function that sums up a list of numbers and returns the result. Let's call this function **sum**.

A function receives a list of arguments separated by commas. Each argument exists only in the context of the function, meaning they become variables inside the function block but are not defined outside that function block.

```php
// Define a function called "sum" that will sum up a list of numbers
function sum($numbers) {
    // initialize the sum variable
    $sum = 0;

    // Sum up the numbers
    foreach ($numbers as $number) {
        $sum += $number;
    }

    // return the sum
    return $sum;
}

// Example of using the function
echo sum([1,2,3,4,5,6,7,8,9,10]);
```

In this case, we have the **"sum"** function that will add up all the numbers passed into it.

Let's call the function in an **echo**; this way, we will print the sum of the numbers entered in the array inside the function.

As with everything, the best method is always to **try, try, and try again**!

**So, take your time** and try playing around with the functions you've learned above!

PHP allows for much more, but **to start with WordPress, this can be enough**!

**When you feel ready, try** taking a look at our guides to **[create a WordPress theme from scratch](/en/blog/create-a-wordpress-theme-from-scratch-1/)**; this way, you can put into practice what you've learned.

_[<< jQuery Basics](/en/blog/the-basics-of-jquery/)_

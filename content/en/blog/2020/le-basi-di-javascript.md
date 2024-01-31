---
title: "3. The Basics of Javascript"
description: "Short guide to learn the basics of Javascript. Learn what you need to get started in the world of web development."
date: "2020-03-17"
url: "/en/blog/the-basics-of-javascript"
categories:
  - Start Here
---

**Javascript** is the language that allows you to **create animations** on web content. All galleries, sliders, pop-ups, page transitions, and every animated effect you see while browsing online are implemented with **Javascript**.

This language has **evolved significantly**, transitioning from being an extra, a way to create fun and amusing effects, to being one of the most widely used languages globally. It is not only used for animations but also to create **full-fledged software structures** capable of running powerful applications.

In this article, we will **cover the basics**, starting **from scratch** and exploring how this programming language works. Together, we will create something **simple** but useful to understand how to use this language.

We'll start with some theory and then move on to creating something usable on our web page.

If you get lost during the article, at the **bottom of this** article, you can find the **code** for everything we are going to create.

---

**This course is aimed at** **beginners**, so if you already know Javascript, this article is not for you. If you are just starting out, **WELCOME**, and happy studying! You will see that you will **learn quickly** to create fantastic web content!

---

## Inserting Javascript into HTML

Let's start by **inserting** some Javascript code into our HTML file (if you're not sure what I'm talking about, take a look at our articles on [HTML](/en/blog/the-basics-of-html/) and [CSS](/en/blog/the-basics-of-css/)).

Like CSS code, Javascript can be inserted in **different ways**:

- Internal Javascript
- External Javascript

### Internal Javascript Code

In this case, the Javascript code is inserted **directly into the HTML file** before the closing `</body>` tag.

**Example:**

Open our "**index.html**" file, go to the bottom, and insert this code just before the `</body>` tag:

```html
<script>
   alert("HELLO");
</script>
```

Now, **save** and **open** the "index.html" page. A **popup** will appear with the text "HELLO!"

![Popup](images/image-10.png)

### External Javascript Code

To include external Javascript, you need to **create a .js file** and **import it** into the HTML. Like CSS, this is **the preferred method** almost always.

**Example:**

Go to our "HTML" folder on the desktop, open it with VS Code (refer to the guide [Basics of HTML](/en/blog/the-basics-of-html/)), create a new file (**CTRL+N**), and save it (**CTRL+S**) with the name "_**scripts.js**_".

Inside this file, write:

```javascript
alert("HELLO");
```

Now **save** "scripts.js" and open "index.html".

Here, just before the `</body>` tag, insert:

```html
<script src="scripts.js"></script>
```

Now, **save** and **refresh** the browser.

**The result is the same as before:** the popup, but now we triggered it differently.

## A Bit of Theory

### Alert

We have just used the **"alert"** function, which displays a **popup** in the web page with text inside. This is rarely used for popups because the **appearance is not very appealing**, and there are much better methods for displaying popups in web pages. However, it can be very useful **during debugging**.

If I'm creating a function and can't find the error, I can insert an "alert" in the middle of the function and see if the error occurs before or after that point.

### Console.log

Another way to view errors in Javascript is the **"console.log"** function. This allows you to **insert text into the Javascript console**. This is also very useful during debugging and development.

**Here's an example:**

```javascript
console.log("HELLO!");
```

If you insert this in "_**scripts.js**_", save and refresh, you won't see anything happen. This is because the **"HELLO!"** we wrote **is inserted into the Javascript console**, not the body of the page. To view the Javascript console, press the **"F12"** key or right-click and select **"Inspect"** (On Google Chrome, but it's very similar on all browsers).

![Console](images/image-11-1536x353-1-1024x235.png)

### Comments

**Comments** are **crucial** in every programming language.

To insert comments in Javascript, there are **two ways**:

If the comment is on **a single line**, you can insert a **double slash** before the line. This way, **the entire line will be commented out**.

**Example:**

```javascript
// This is a single-line comment in Javascript
```

If the comment is **longer**, you can use the same syntax as CSS: **_/ \* Comment \*/_**

**Example:**

```javascript
/*
This is a
multi-line
Javascript comment
*/
```

### Variables

Unlike HTML and CSS, **Javascript is a full-fledged programming language**, and not one of the simplest.

Like every programming language, it is possible to **use variables to store data and perform calculations**. Inserting a variable is very simple, just insert "**var**" before the variable, like this:

```javascript
var years = 30;
```

It is **essential to include the semicolon** at the end of the variable to indicate that the rule ends

 there. Without the semicolon, errors will be generated.

Now we can **call the variable inside console.log** or an **alert**, like this:

```javascript
console.log(years);
```

or:

```javascript
alert(years);
```

**Save** and **refresh**, and you will see the number **"30"** appear in the popup or console.

**But we can do more!**

Let's set **a series of variables**:

```javascript
var name = "Marco";
var height = "1.83";
var years = 30;
```

Now we can **create a sentence and insert our variables inside**, using them to perform calculations. **Text values must be enclosed in quotes**, while **numeric values must not**. This way, we can also perform **arithmetic operations**.

**Here's an example:**

```javascript
console.log('Hello, my name is ' + name + ' and I am ' + height + ' meters tall. Right now, I am ' + years + ' years old. In 5 years, I will be ' + (years + 5) + ' years old.');
```

To insert a **variable into text**, you need to **concatenate it**, put it together. For this, we used the **'+' sign**.

### Functions

Functions are **parts of code that perform a specific action**.

By isolating a piece of code into a function, it can be **called** several times within the project.

Functions can have **parameters** that personalize their action.

**Example:**

Go to the "scripts.js" file and write:

```javascript
function hello() {
   alert("HELLO");
}
```

Now go to the "index.html" file and add a button like this:

```html
<button onclick="hello()">Say Hello</button>
```

**Save** and **refresh**, and you will see that **clicking the new button will display the popup with "HELLO".**

### Parameters

Now let's add a **parameter**. Go into the function and modify it like this:

```javascript
function hello(name) {
    alert("HELLO " + name);
}
```

And in the "index.html" file, modify the button parameter like this:

```html
<button onclick="hello('Marco')">Say Hello</button>
```

**Save** and **refresh**, and you can see that **now the greeting is addressed to the name entered in the function's parameter!**

"Marco" is our parameter.

### If Else

**"If" statements** are **fundamental to all programming**. Every action is done as a consequence of another. Let's see what this means.

Let's use the greeting button as always. We can expect that if the name is "Marco," then the popup will say "Hello Marco." If the name is "Mark," we can make it say "Hello Mark."

**Here's how:**

Replace the function with this:

```javascript
function hello(name) {
    if (name == "Marco") {
        alert("HELLO " + name);
    } else if (name == "Mark") {
        alert("Hello " + name);
    } else {
        alert("Good morning " + name);
    }
}
```

Now we can go to **modify the parameter in the button**, from "Marco" to "Mark," or insert a completely different name.

If the name is Marco, then the popup will be "Hello Marco," if Mark then "Hello Mark," if anything else, then "Good morning + name."

Note that **there are two equal signs**, because in Javascript, a single equal sign assigns the value, while to compare them, you need to use 2 or 3 depending on the case. For now, it's enough to know that when we need to compare multiple values, we need to insert 2 equal signs.

### Events

**Javascript can be called inside HTML when certain events occur**, such as a click, mouse hover, etc. Nowadays, there are many other ways, but these are the easiest and most immediate to start.

**Example:**

```html
<button onclick="alert('HELLO!')">Say Hello</button>
```

In this case, clicking the button will display the **greeting popup**.

## Creating Our First Effect

Beyond theory, **what interests us most is seeing how we can use Javascript to create effects for our web pages.**

So now we will go on to **create a simple effect that will change the background color of the body when a button is clicked.**

**Let's see how:**

Start by creating a button in our "index.html":

```html
<button onclick="changeBackground()"> Change background! </button>
```

Now, go into our **"scripts.js"** and create the **"changeBackground()"** function:

```javascript
function changeBackground() {
   document.body.style.backgroundColor = '#000';
}
```

If you **save** and **refresh**, you will see that now **clicking the button changes the background to black.**

We told the browser that when the button is clicked, it should select the background color of the body (`body.style.backgroundcolor`) and set it to black.

However, notice that **it's a one-time action**; once the background is black, we can't go back to white.

**Let's add a few more lines of code:**

```javascript
function changeBackground() {
    var background = document.body.style.backgroundColor;
    if (background == "rgb(0, 0, 0)") {
        document.body.style.backgroundColor = '#fff';
    } else {
        document.body.style.backgroundColor = '#000';
    }
}
```

This way, we are doing a **check of the background color**. If it's black, we set it to white; otherwise, it will be black.

Now we can **change the background color every time we click the button.**

**Congratulations! You have just created your first Javascript effect!**

## Animation of a Component

If instead of the entire background, we want to modify only a **component**, we can do so by using **ids** ([Basics of CSS](/en/blog/the-basics-of-css/)).

Let's start by creating a **div with id="box"**:

```html
<div id="box" onmouseover="changeBoxOver()" onmouseout="changeBoxOut()">
   This container will change color when you hover over it
</div>
```

Now, create the two functions in scripts.js:

```javascript
function changeBoxOver() {
   document.getElementById('box').style.backgroundColor = "coral";
   document.getElementById('box').style.color = "blue";
}

function changeBoxOut() {
   document.getElementById('box').style.backgroundColor = "white";
   document.getElementById('box').style.color = "black";
}
```

**Save** and **refresh**, and you will see that **the container changes color and background when you hover over it.**

Great, **these are the basics to start playing around with Javascript.**

**Searching online**, you can find many guides and tutorials on the subject.

However, it's good to know some Javascript and especially JQuery so that we can **avoid installing countless plugins and create all the effects and functions we want on our own!**

### FULL CODE:

**index.html**

```html
<!DOCTYPE html>
<html lang="en">

<head>


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title><!-- The title of the page that appears in the browser tab -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">

        <!-- Javascript -->
        <button onclick="hello('Ugo')">Say Hello</button>
        <!-- Title -->
        <button onclick="changeBackground()">
            Change background!
        </button>
        <div id="box" onmouseover="changeBoxOver()" onmouseout="changeBoxOut()">
            This container will change color when you hover over it
        </div>
        <!-- /Javascript-->

        <h1>My First Web Page</h1>

        <!-- Paragraph -->
        <p>Welcome to my first web page!</p>

        <br><!-- this is a line break-->

        <!-- Subtitle -->
        <h2>Subtitle</h2>

        <p>This is the second paragraph of my first web page</p>

        <br>

        <h2>List</h2>
        <!-- List -->
        <ul>
            <li>First Item</li><!-- Item of a list -->
            <li>Second Item</li>
        </ul>

        <!-- Image
    <img src="img/image.jpg" width="200"> -->

        <!-- DIV: block element -->
        <div style="background-color: green;">
            This is a container with a green background
        </div>

        <!-- SPAN: inline element -->
        <p>
            This is a paragraph with some random text. In this text, I want to
            <span style="color:red">color</span> a word in red
        </p>

        <!-- FORM -->
        <form>
            <!-- Text box -->
            <input type="text" placeholder="Name">
            <br><br>
            <input type="text" placeholder="Surname">
            <br><br>
            <!-- Drop-down menu -->
            <select name="select" id="">
                <option value="0">Option 1</option>
                <option value="1">Option 2</option>
                <option value="2">Option 3</option>
            </select>
            <br><br>
            <!-- Text area -->
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter text here."></textarea>
            <br><br>
            <!-- Checkbox-->
            <input type="checkbox" name="privacy" value="0">I accept the Privacy Policy
            <br><br>
            <!-- Button -->
            <button>Submit</button>
        </form>

        <h2>Margin and Padding</h2>
        <h3>Margin:</h3>
        <div class="box-margin">
            This is a box with margin
        </div>

        <div class="box-margin-top">
            This box has only top margin
        </div>

        <h3>Padding</h3>
        <div class="box-padding">
            This is a box with padding
        </div>

        <!--
<div class="background-image">
    This div has a background image!
</div>
-->

    </div>

    <script src="scripts.js"></script>
</body>

</html>
```

**scripts.js**

```javascript
function changeBackground() {
    var background = document.body.style.backgroundColor;
    if (background == "rgb(0, 0, 0)") {
        document.body.style.backgroundColor = '#fff';
    } else {
        document.body.style.backgroundColor = '#000';
    }
}

function hello(name) {
    if (name == "Marco") {
        alert("HELLO " + name);
    } else if (name == "Mark") {
        alert("Hello " + name);
    } else {
        alert("Good morning " + name);
    }
}

function changeBoxOver() {
    document.getElementById('box').style.backgroundColor = "coral";
    document.getElementById('box').style.color = "blue";
}

function changeBoxOut() {
    document.getElementById('box').style.backgroundColor = "white";
    document.getElementById('box').style.color = "black";
}
```

_[<< Basics of CSS](/en/blog/the-basics-of-html/)_

_[Basics of Bootstrap >>](/en/blog/the-basics-of-bootstrap/)_

---
title: "2. The Basics of CSS"
description: "Short guide to learn the basics of CSS. Learn what you need to get started in the world of web development."
date: "2020-03-17"
url: "/en/blog/the-basics-of-css"
categories:
  - Start Here
---

**CSS Basics**

CSS is the **web formatting** language. It stands for **Cascading Style Sheets** and is used to **style HTML pages**.

It has a specific syntax and allows separating HTML from its style, thereby keeping the **code clean and organized**.

Like HTML, CSS is **not a programming language**; it is a language used to create web page layouts. It manages spaces, modifies colors, creates layouts, and everything related to the graphical part of web content.

---

**This course is aimed at **beginners**, so if you already know CSS, this article is not for you. However, if you're just starting out, **WELCOME** and happy studying! You'll soon learn to create fantastic web content!**

---

This article is a continuation of the guide [HTML Basics](/en/blog/the-basics-of-html/), which you can find [here](/en/blog/the-basics-of-html/).

If you get lost during the article, at the bottom of this article, you can find the code for everything we'll create.

## How to Insert CSS in an HTML Page

CSS alone doesn't do anything; it **must be inserted into an HTML page**.

There are **3 ways** to insert CSS code into an HTML page:

- **Inline CSS**
- **Internal CSS**
- **External CSS**

### Inline CSS

Allows inserting CSS code **directly within HTML code**.

With this method, **HTML and CSS languages remain mixed together**. An example of this type of code is what we inserted in the intensive HTML course when we set the background to green for the div or red for the word in the span.

**Example:**

```html
<div style="background-color:green">Hello World</div>
```

Although it's very quick to apply, it's **the worst way** to insert CSS code.

**Mixing programming languages is never a good idea**. It's better to learn from the beginning that order is a fundamental characteristic for a good developer.

Let's see the other methods.

### Internal CSS

This method involves inserting CSS code **within the head** of the HTML page.

This way, CSS is inside the HTML page but **not within the HTML content**. It's certainly a better choice than Inline CSS but still not optimal.

To insert internal CSS, you need to go **between the <head></head> tags** and indicate that you're going to write CSS code, like this:

```html
<style type="text/css">
</style>
```

Inside the `<style>` tag, you can insert CSS code.

**Example:**

```html
<style type="text/css">
   h1{
      color:red
   }
</style>
```

In this case, **all h1 tags on the page will be red**.

### External CSS

This is **the best and most efficient way** to manage CSS files.

It involves **creating an external file**, which must have the .css extension, and **referencing it in the HTML page's head**.

This way, **the languages are well separated**, each in its own file.

**Example:**

Now, **create a new file** (CTRL+N) and save it (CTRL+S) with the name "**style.css**".

In this file, you can insert this:

```css
h1{
   color:red;
}
```

Now **save** "**style.css**" and open "**index.html**".

Go **into the head** of "**index.html**" and insert this below the title:

```html
<link rel="stylesheet" href="style.css">
```

If you open the "**index.html**" file in your browser, you'll notice that **the h1 is now red**.

These are the **three methods** for inserting CSS code into an HTML page. As you may have guessed, **the best method is the third one**, but there are some occasions where applying one of the first two methods may be useful.

Now that we've learned how to insert CSS into an HTML page, let's start talking about CSS itself!

## CSS Syntax

CSS is a language with a **specific syntax**. If you make a **mistake** in writing the syntax, the code **won't work**.

Here's a **diagram** summarizing the elements of the CSS language:

![CSS Schema](/images/css-schema.jpeg)

### Selector

Indicates the **object to which the style is applied**. This can be an HTML tag, such as `<h1>`, `<p>`, etc., or a class or an id (we'll delve into classes and ids shortly).

### Property

A property is a **rule applied to the selector**. CSS has many properties; as you learn this language, you'll discover more and more. Fortunately, VS Code offers a list of all properties, visible by pressing "CTRL+Space Bar".

In the previous example, the property is "**color**"; other commonly used properties include "background-color", "margin", "padding", "border", etc.

### Value

It's the **value assigned to the property**. It can be a color, a number in pixels, or something else. You'll learn to use the correct values as you use CSS.

Properties and values must be enclosed in **curly braces**.

At the end of each value, you need to insert a "**semicolon**".

**Example:**

```css
h1{
   color:red;
}
```

- **h1** is the **selector**
- After the selector, I open the **curly brace**
- **color** is the **property**
- **red** is the **value**
- I insert a **semicolon** at the end of the value
- I close the **curly brace**.

After this small theoretical introduction, let's **get serious!**

## **Let's get our hands dirty**

Let's go to our "**style.css**" file and start writing some CSS code!

Let's start by giving a general style to our page using the "**body**" selector, like this:

```css
body{
    color:#444;
    background-color:#f2f2f2;
}
```

This way, we've set a dark gray color for the text and a slightly off-white color for the background.

## Colors

In CSS code, there are **various ways to insert colors**:

- Color Name
- Hexadecimal
- RGB

### Color Name

This method allows indicating the color simply by writing the **color name in English**.

For example, if I want a white color, I just need to write "white", and so on.

**Example:**

```css
color:blue;
```

### Hexadecimal

The color is indicated using a hexadecimal code, also called **Hex code**. To use this method, you need to insert a # followed by the 6-digit code. It is by far the most used method.

**Example:**

```css
color:#f4f4f4;
```

### RGB

It involves indicating the color using the **RGB method**. You can also use transparencies with RGBA.

**Examples:**

**RGB:**

```css
rgb(243, 163, 44)
```

**RGBA**:

```css
rgba(243, 163, 44,.7)
```

In this case,

 ".7" indicates that the transparency will be 70%.

## Font

One of the first things to do when customizing a layout is to **choose a nice font**.

To insert a font on a website, you need to **import it** to ensure that any user on any computer sees the correct font.

Fortunately, **Google** provides many **fonts for free** and very easy to use. Let's see how.

First, go to **Google Fonts** at this link: [https://fonts.google.com/](https://fonts.google.com/)

Here, you can search for the font you like the most. In this guide, we'll use "**Source Sans Pro**".

So, enter "**Source Sans Pro**" in the Google Fonts search bar:

![Google Fonts](/images/google-fonts-search.png)

and select it.

Now you'll see a screen like this:

![Google Fonts Variants](/images/google-fonts-variants.png)

On the right, you can click on "**\+ Select this style**" next to the style you want. You can select all of them to have all possible variations of the font, but to optimize page loading time, it's better to select only the essential ones.

In this guide, we'll only select "**regular 400**" and "**bold 700**".

Now a window will appear on the right like this:

![Google Fonts Embed](/images/google-fonts-embed.png)

Here, click on "**Embed**" and then on "**@import**".

Now you can copy the content between `<style>` and `</style>` and paste it into your "**style.css**", deleting everything else.

Now add this code:

```css
body{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    font-weight: 400;
    font-style: normal;
    line-height: 35px;
}
```

This way, we've set "**Source Sans Pro**" as the primary font of the site.

Here's what else we've set:

- **Font-size** indicates the **size** of the font, which we've set to 22 pixels.
- **Font-weight** indicates the **thickness** of the font, in this case, it's set as regular. In this field, we can use both numbers from 100 to 900 and names, from "lighter" to "bolder". Logically, you'll need to import these sizes from Google Fonts; for now, we've only imported 400 and 700.
- **Font-style** indicates the **style** of the font, in this case, it's normal. You can input, for example, "italic" to have an italic font.
- **Line-height** indicates the **height** of the font, the space between lines, set here to 35 pixels.

Try to **save** the stylesheet and **refresh** the page; you'll see that **the text has changed**!

## Classes and Ids

As we mentioned earlier, you can set classes and ids to HTML tags, so you can **group** some CSS rules.

Classes and ids are **attributes** that we can **add to HTML tags** to distinguish them from each other.

### Id

An **id** is a **unique attribute**; it should be used when there's a particular element that **won't be repeated**. For example, if I want a title to be yellow, only that title, I can give it a unique id.

To indicate an id in CSS, precede it with a **hash**.

**Example:**

**_style.css_**

```css
#giallo{
   color:yellow
}
```

**_index.html_**

```html
<h2 id="giallo">This title is yellow</h2>
```

### Classes

A class is an **element that returns often**, and thus can be **reused**. For example, if I want to insert a series of buttons with the same formatting, I can give them the class "**button**", set it only once in the CSS, and it will be applied to all elements with the class "**button**".

To indicate a class in CSS, precede it with a **dot**.

**Example:**

**_style.css_**

```css
.button{
   background-color:coral;
   border-radius: 15px;
   color:white;
}
```

**_index.html_**

```html
<div class="button">Click here!</div>
```

## Margin and Padding

To manage spaces between elements, you can use "**margin**" and "**padding**".

Here's a **diagram** to explain the difference between the two:

![Margin and Padding](/images/margin-and-padding.jpeg)

**Margin** indicates the space **outside** the content, while **padding** indicates the space **inside**.

You can indicate the **direction** of space for both margin and padding; for example, if you want to insert top margin, you should use "**margin-top**".

Here are some **examples**:

**_style.css_**

```css
.box-margin{
    background-color: coral;
    margin:50px;
}
.box-padding{
    background-color: coral;
    padding:50px;
}
.box-margin-top{
    margin-top: 50px;
    background-color: aquamarine;
}
```

**_index.html_**

```html
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
```

## Container

CSS elements can be **nested**, allowing you to create more elaborate layouts.

Let's try to make our HTML page a bit nicer by inserting it into a **container**.

Go **below the body tag** and insert a **div** with the class "**container**", like this:

```html
<div class="container">
```

Now go **before the </body> tag** and **close this div** by inserting:

```html
</div>
```

Now add this code to our "**style.css**":

```css
.container{
    max-width: 800px;
    margin: 0 auto;
}
```

This way, we've set a **maximum width for the content of our page to 800 pixels** and set the content margin to 0 pixels from the top and bottom and **automatically** from the right and left.

Now **save** and **refresh** and you'll see the content inserted in the center of the page; nice, isn't it?

## Image as Background

Let's see one last thing before finishing this first general overview of CSS: how to insert **an image as the background** of an element.

To insert an image as a background, you need to use the "**background-image**" property.

Create a **div** that will contain our image in the **html** file:



```html
<div class="background-image">
    This div has a background image!
</div>
```

And insert the image url through **CSS** in our "**style.css**":

```css
.background-image{
    background-image: url(img/image.jpg);
    height:500px;
    text-align: center;
    padding-top: 250px;
    color:white;
}
```

This way, we've set **our image as the background**. We've also set **a height** to make the image visible.

Try to **save** and **refresh** and see what happens.

Now try to tinker a bit with these classes and these rules, changing sizes, fonts, colors, images, and everything else you have in mind!

Remember that **the best way to learn is to dedicate a lot of time to practice**, so **start diving into CSS!**

### Full Code:

Here you can find the **complete code** of the index.html and style.css files

**_index.html_**

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
    <!-- Title -->
    <h1>My First Web Page</h1>
    <!-- Paragraph -->
    <p>Welcome to my first web page!</p>

    <br><!-- This is a line break -->

    <!-- Subtitle -->
    <h2>Subtitle</h2>

    <p>This is the second paragraph of my first web page.</p>

    <br>

    <h2>List</h2>
    <!-- List -->
    <ul>
        <li>First Item</li><!-- Item of a list -->
        <li>Second Item</li>
    </ul>

    <!-- Image -->
    <img src="img/image.jpg" width="200">

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
        <!-- Textbox -->
        <input type="text" placeholder="Name">
        <br><br>
        <input type="text" placeholder="Surname">
        <br><br>
        <!-- Dropdown menu -->
        <select name="select" id="">
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
        </select>
        <br><br>
        <!-- Text area -->
        <textarea name="" id="" cols="30" rows="10" placeholder="Insert text here."></textarea>
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

<div class="background-image">
    This div has a background image!
</div>

</div>
</body>

</html>
```

**_style.css_**

```css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
body{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 22px;
    font-weight: lighter;
    line-height: 35px;
    font-style: normal;
}
.box-margin{
    background-color: coral;
    margin:50px;
}
.box-padding{
    background-color: coral;
    padding:50px;
}
.box-margin-top{
    margin-top: 50px;
    background-color: aquamarine;
}
.container{
    max-width: 800px;
    margin: 0 auto;
}
.background-image{
    background-image: url(img/image.jpg);
    height:500px;
    text-align: center;
    padding-top: 250px;
    color:white;
}
```

_[<< HTML Basics](/en/blog/the-basics-of-html/)_

_[JavaScript Basics >>](en/blog/jthe-basics-of-avascript/)_

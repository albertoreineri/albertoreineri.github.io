---
title: "1. The Basics of HTML"
description: "Short guide to learn the basics of HTML. Learn what you need to get started in the world of web development."
date: "2020-03-17"
url: "/en/blog/the-basics-of-html"
categories:
  - Start Here
---

**HTML is the foundation of the web**, it's everywhere! Every web page you view has HTML code inside it. So, if you want to become a web developer, the first thing to do is to take an intensive HTML course!

---

This course is aimed at **beginners**, so if you already know HTML, this article is not for you. However, if you are just starting out, **WELCOME**, and happy studying! You'll soon see that you'll **learn quickly** to create fantastic web content!

HTML is not exactly a programming language, but it is a **markup language**; in fact, HTML stands for _HyperText Markup Language_. This means that HTML doesn't perform calculations but essentially tells the browser **how to assemble the page**, what to position, and how to position it.

## What You Need to Get Started

To start writing HTML code, you **don't need supercomputers** or heavy, expensive programs.

If you want to start developing content for the web, initially **you only need 2 things**:

- A web browser
- A text editor

### Web Browser

Since you're developing something that will be accessible through a browser, **the browser is essential**. There are many browsers available, all valid, but my recommendation is to use **[Google Chrome](https://www.google.com/intl/en/chrome/)**.

If you're not a fan of Google's browser, here are some alternatives:

- [Microsoft Edge](https://www.microsoft.com/en-us/edge) (Windows)
- [Safari](https://www.apple.com/safari/) (Mac)
- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)

### Text Editor

The other **essential software** for web development is a text editor.

A text editor is a program that **allows you to write code**. You could simply use the classic text editor of the operating system (Notepad or TextEdit), but fortunately, there are dedicated development software that make writing code much easier.

My recommendation is to use **[VS Code](https://code.visualstudio.com/)**; in my opinion, it's currently the best one out there.

However, you still have plenty of choices! Here are some of the best **alternatives** to VS Code:

- [Sublime Text](https://www.sublimetext.com/)
- [Atom](https://atom.io/)
- [Brackets](http://brackets.io/)
- [Notepad++](https://notepad-plus-plus.org/downloads/)

## Let's Create Our First HTML File

Now that you have downloaded a browser and a text editor, we can create our first HTML file.

Create a **folder** on your desktop named "**HTML**". Now, open this folder with **VS Code** by right-clicking inside the folder and selecting "Open with Code".

![](images/Group-5-1.jpeg)

Now we can create our file with VS Code.

Press "**CTRL+N**" to create a new file and then "**CTRL+S**" to save it, with the name "**_index.html_**".

All HTML files must have the extension .html, which tells the browser the type of file it's reading.

You can also create files through the menu at the top by clicking on "File-New File" or with the specific icon in the left sidebar.

**PERFECT! We've created our first HTML file!**

## Basic Structure

Every HTML page is different, but they all have a **common basic structure**, a **skeleton** on which they are built.

**VS Code** allows us to create this skeleton in a **very simple and fast** way.

All we have to do is open the file, type an **exclamation mark**, and press the "**tab**" key. This way, VS Code will automatically create the basic structure of our HTML page.

If you've done this, you should see this code inside the file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

This is the **skeleton** of every HTML page. Let's analyze it!

## HTML Tags

HTML is a language based on **tags**.

Each tag indicates a **type of content**.

**Basic structure**: `<tagname>content</tagname>`

Any content is always enclosed within a tag, which **instructs the browser how to treat that type of content**.

Generally, tags have an opening and a closing tag; the closing tag starts with a slash (/).

However, there are some tags without a closing tag, like the `<br>` tag, which is used for line breaks.

**Examples of tags:**

```html
<html></html>
```

These tags indicate where the HTML page begins and ends. All content must be placed between these two!

```html
<head></head>
```

This tag allows you to insert information about the page, such as the title, styles to include, scripts, etc. (This will become clearer as you progress)

```html
<body></body>
```

Within these tags is the actual content of the page.

```html
<h1>My First Web Page</h1>
```

Headings are placed inside heading tags, which range from 1 to 6, in order of importance. The page title should be placed between `<h1></h1>`, the subtitle `<h2></h2>`, and so on.

```html
<br>
```

This tag instructs the browser to insert a line break.

```html
<!-- This is a comment -->
```

In any type of code, it's very important to insert comments. These allow you to insert notes within the code, to better understand what you're writing or to include messages for colleagues, etc.

```html
<ul>

    <li>This is a list item</li>

    <li>This is another item</li>

</ul>
```

The `<ul>` tag allows you

 to insert a list. To insert a numbered list, use the `<ol>` tag (Ordered List).

Each list item must be inserted with the `<li>` tag (List Item).

## Let's Get Our Hands Dirty

Now let's **modify the skeleton** of our HTML page.

Let's start by modifying the **language**, changing "en" to "it" on **line 2** of our file.

Line 2 should now look like this:

```html
<html lang="en">
```

Now go to **line 6** and change the title inside the `<title>` tag.

Let's call this page "**My First Web Page**"

```html
<title>My First Web Page</title>
```

Now save the file and open it by simply opening the "HTML" folder and double-clicking on it.

![](images/image-1536x529-1-1024x353.png)

You'll be presented with a **completely blank page** because we haven't inserted any code into the content yet.

However, you can see that the name of the tab at the top is "**My First Web Page**". This is the `<title>` of our page.

**Now let's insert some content.**

Go **between the `<body></body>` tags** and insert this:

```html
   <h1>My First Web Page</h1>
    <p>Welcome to my first web page!</p>
    <br><!-- this is a line break-->
    <p>This is the second paragraph of my first web page</p>
    <br>
    <h2>List</h2>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
    </ul>
```

Now **save the page and refresh it in the browser**, and you'll see some content!

![](images/image-1.png)

It's not difficult to understand; each tag explains itself.

**CONGRATULATIONS!**

**You've just created your first web page!**

But let's dive a little deeper into HTML.

## Let's Insert an Image

To insert an image into an HTML page, you need to use the **<img>** tag, along with some attributes.

Attributes provide **additional information** to HTML tags. For example, the **<img>** tag tells the browser to insert an image, but which image? We answer this question with the "src" attribute, which is the source from which the browser can draw the image.

Example:

```html
<img src="images/photo.jpg">
```

In this example, the browser will insert the image **photo.jpg** from the "images" folder.

Now let's try to insert an image into our page.

Go to our "HTML" folder on the desktop and create a folder called "**img**". Now, inside this folder, insert any image in **JPG format**.

Now, **reference the image in our _index.html_** file like this:

```html
<img src="img/image.jpg">
```

Now **save the file and update** the browser.

![](images/image-2-768x370-1.png)

You'll see the image displayed on our HTML page.

However, it's a bit **too large!** This depends on the dimensions of the image.

To display the image more nicely, we can add another attribute to our <img> tag: **the height or width attribute**.

```html
    <img src="img/image.jpg" width="200">
```

This way, I'm **setting the width of the image to 200px**. And now it looks much better.

![](images/image-3.png)

This way, I can **resize** the image.

Now let's go even deeper into HTML.

## Containers

In our HTML pages, we can insert **containers** in which to place content. These are very useful for **structuring pages and managing content** effectively.

### <div>

One type of container is the **<div>** tag. This creates a **section** on the page. It's a **block element**, meaning the content after this tag is placed **on a new line**.

### <span>

**<span>** is also a container but is **inline**, meaning it **does not start a new line**.

If I want to create a green square on the site, I'll use a <div>, but if I want to color a word red, then I'll use the <span> tag.

**Here's an example:**

Add this code to **_index.html_**

```html
    <div style="background-color: green;">
        This is a container with a green background
    </div>
    <p>
        This is a paragraph with some random text. In this text, I want to <span style="color:red">color</span> a word red
    </p>
```

and here's the **result**

![](images/image-4-1536x666-1-1024x444.png)

To add colors, I used the "style" attribute, which allows you to insert CSS code inside HTML, but we'll cover this more in the [CSS guide](/en/blog/the-basics-of-css/).

## Forms

Another very important element of a web page is the **form**.

While browsing online, you've probably filled out many **forms**, whether they're for contact, booking, etc.

To insert a form, use the **<form></form>** tag and insert the **types of input** required inside it.

**Example** of a form:

```html
  <form>
        <input type="text" placeholder="Name">
        <br><br>
        <input type="text" placeholder="Surname">
        <br><br>
        <select name="select" id="">
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
        </select>
        <br><br>
        <textarea name="" id="" cols="30" rows="10" placeholder="Insert text here."></textarea>
        <br><br>
        <input type="checkbox" name="privacy" value="0">I accept the Privacy Policy
        <br><br>
        <button>Submit</button>
    </form>
```

Try inserting this code into **_index.html_**, save it, and refresh.

You'll see fillable fields.

**These fields are:**

- text input for name and surname.
- select for the dropdown menu
- textarea for the text area
- checkbox to accept privacy
- button for submission

Pressing the "Submit" button won't do anything. To make our HTML page do something, you need to integrate it with other languages. Remember that **HTML is just a markup language**, not a programming language.

That's it for this guide. I'll leave you with **the complete code of our _index.html_** file with **comments** explaining what each part does.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title><!-- The title of the page that

 appears in the browser tab -->
</head>

<body>
    <!-- Title -->
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
        <li>First Item</li><!-- List item -->
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
        <span style="color:red">color</span> a word red
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
</body>

</html>
```

**Now you can start experimenting** with the tags you've learned, trying to **create and modify some HTML pages!**

Also, read **[CSS Basics >>](/en/blog/the-basics-of-css/)**
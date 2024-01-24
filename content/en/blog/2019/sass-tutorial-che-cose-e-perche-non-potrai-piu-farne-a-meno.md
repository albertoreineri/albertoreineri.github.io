---
title: "SASS Tutorial - What is it and why you won't be able to do without it"
description: "SASS is a CSS preprocessor that adds special features to plain CSS and allows for faster development and maintenance."
date: "2019-11-10"
categories:
  - Web Dev
---

"If you live in the world of web development, then you have probably heard of SASS, the most famous CSS preprocessor! This is a fantastic tool that allows you to significantly extend the capabilities of CSS and create and manage stylesheets in a fast and organized manner.

SASS is a CSS preprocessor that adds special features such as variables, nesting, mixins, and much more to regular CSS. The goal is to make the process of creating CSS simple and effective, both to write and to read in the future.

But let's delve a bit deeper!

## What is a CSS Preprocessor?

A CSS preprocessor is a scripting language that extends CSS, allowing developers to write code in a specific language and then compile it into CSS. Sass is perhaps the most popular preprocessor currently in use, but other well-known examples include Less and Stylus.

Before we proceed, a quick note is needed: most web designers would say that if you are new to CSS, it's better to avoid Sass (or any preprocessors, extensions, or frameworks) while you are still learning. Although these tools offer many advantages in terms of speed and efficiency, it's important to thoroughly understand the basics of CSS before exploring various tools. Make sure to learn the key concepts before delving into the available tools. This applies to every technology and framework; it's always a good practice to learn the base language thoroughly before moving on to the built tools!

Now, back to Sass!

## What is Sass?

Sass (which stands for "Syntactically Awesome Stylesheets") is an extension of CSS that allows you to use things like variables, nested rules, inline imports, and more. It also helps keep code organized and enables you to create stylesheets much faster.

Sass is compatible with all versions of CSS. The only requirement to use it is to have Ruby installed. Developers using it are also encouraged to follow the [Sass Community Guidelines](https://sass-lang.com/community-guidelines), it's always good to take a look.

## How to Use Sass?

In the following section, we'll look at some basic tips for using Sass, using examples from the official Sass website. Check the [official documentation](https://sass-lang.com/documentation) for further references and examples.

### Syntax

Sass includes two syntax options:

- **SCSS (Sassy CSS):** Uses the .scss file extension and is fully compliant with CSS syntax. (My favorite!)
- **SASS:** Uses indentation instead of braces and has the .sass extension; it's not entirely compliant with CSS syntax, but it's faster to write. (For Python lovers)

Files can be converted from one syntax to another using the `sass-convert` command.

### Variables

Just like other programming languages, Sass allows the use of variables that can store information used throughout the stylesheet.

For example, you can store a color value in a variable at the top of the file and then use this variable when setting the color of your elements. This allows you to quickly change colors without modifying each line separately.

For example:

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

This code will generate the following CSS:

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### Nesting

Nesting is a double-edged sword. While it provides an excellent method to reduce the amount of code to write, it can also lead to overly messy CSS if not done carefully.

The idea is to nest CSS selectors to mimic HTML hierarchy.

Here's an example of a navigation menu using nesting:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

The output CSS will be:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### Partials

Partials are smaller Sass files that can be imported (see the next section) into other Sass files. They act like code snippets. With these snippets, CSS can be modular and easier to maintain. A partial is designated as such by naming it with an initial underscore: `_partial.scss`.

### Import

Used with partials (see the previous section), the `@import` command allows you to import partial files into the current file, creating a single CSS file. This way, during development, you can divide the code into sections, while during site loading, there will be only one CSS file to load, reducing the server request.

Here's an example:

**_reset.scss**

```scss
html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

**basefile.scss**

```scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

**Output CSS:**

```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

**Important:** When importing partials, there is no need to include the file extension or the underscore.

### Mixins

One of the advantages of using preprocessors is the ability to take complex and complicated code and simplify it. This is where

 mixins come in handy!

For example, if you need to include vendor prefixes, you can use a mixin. Take a look at this example for border-radius:

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

Note: The `@mixin` command is at the top. It is named "border-radius" and the variable "$radius" is given as a parameter. This variable is used to set the radius value for each element.

Then, the `@include` command is called, along with the mixin name ("border-radius") and a parameter (10px). Therefore, `.box {@include border-radius (10px);}`.

**It produces the following CSS:**

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

### Extend

The `@extend` command has been defined as one of the most powerful features of Sass. After seeing it in action, it's clear why.

The idea is that with this directive, you won't have to include more class names in your HTML elements, and you can keep your code DRY (Don't repeat yourself). Selectors can inherit styles from other selectors and thus be easily extended when needed.

### Operators

The ability to perform calculations in CSS allows for expanded possibilities, such as converting pixel values to percentages. You can access standard mathematical functions such as addition, subtraction, multiplication, and division. Of course, these functions can be combined to create complex calculations.

Additionally, Sass includes some built-in functions to help manipulate numbers. Functions like `percentage()`, `floor()`, and `round()` to name a few.

If you didn't know about this tool before, start using it in your current project; you'll surely not regret it!

If you already knew about it, I hope I may have revealed some additional features of this fantastic tool!

Happy coding!"
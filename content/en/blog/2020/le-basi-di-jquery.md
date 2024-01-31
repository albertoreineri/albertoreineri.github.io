---
title: "5. The Basics of jQuery"
description: "Short guide to learn the basics of jQuery. Learn what you need to get started in the world of web development."
date: "2020-03-17"
url: "/en/blog/the-basics-of-jquery"
categories:
  - Start Here
---

If you have read our [previous guides](/guide), by now you should know well that **HTML**, **CSS**, and **JavaScript** are the three **fundamental languages** of the web.

With **HTML**, we structure our sites; with **CSS**, we style and format them, and with **JavaScript**, we add interactive functionality and animations.

**[jQuery](https://jquery.com/)** is a JavaScript library that allows you to **achieve great results with less code**. In practice, you could use vanilla JavaScript to do the same things as with jQuery, but this library makes it **simpler** and **faster**!

Moreover, jQuery **is compatible with most browsers,** which means we don't have to worry about testing effects on all browsers, but we can be confident that everything will work everywhere!

Do you want to **see** how **jQuery is simpler** compared to JavaScript?

**Here's an example!**

In this example, we will insert the string "**Hello, world!**" into a div with the id #hello. Look at the difference between the two codes:

**JavaScript:**

```javascript
document.getElementById('hello').innerHTML = 'Hello, world!';
```

**jQuery:**

```javascript
$('#hello').html('Hello, world!');
```

**See?** Even with something as simple as this, you can see that the code is much simpler with jQuery!

Are you **convinced** that it might be worth learning to use this library? Very well!

**Let's get started!**

## Installing jQuery

**jQuery** is simply a **JavaScript file** to be included in our HTML.

This inclusion can be done in **two ways:** through a **CDN** or by **downloading** the files locally.

You can **download** the jQuery files from the official website at this link:

[https://jquery.com/download/](https://jquery.com/download/)

Or you can use a **CDN**, as we will do in this guide. We will use Google's CDN:

[https://developers.google.com/speed/libraries/](https://developers.google.com/speed/libraries/)

### HTML Template

Let's start by creating a basic **HTML** file to install jQuery. Here is our HTML **skeleton**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Intensive jQuery Course</title>
    <!-- CSS -->
    <link rel="stylesheet" href="css/styles.css" />
  </head>

  <body>
    <!-- JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>
```

This is our skeleton. Along with the HTML file, let's also create a "css" folder with a "styles.css" file inside, and a "js" folder with a "scripts.js" file inside.

Remember to include the "scripts.js" file below jQuery; otherwise, it won't work!

Very well, we have a web project configured to use **jQuery**; let's see now how to use this library!

## Basics

**jQuery** is used to **interact with HTML elements** in the browser through the **DOM** (Document Object Model).

The **DOM** is the method by which **JavaScript** (and therefore also jQuery) **interacts with HTML** in the browser.

To see exactly what the DOM is, right-click on the page in the browser and select **Inspect**. The HTML code you see in the inspection box is the DOM. Each HTML element is considered an object that JavaScript can use. JavaScript can add, remove, and modify each of these elements.

The outermost level of the DOM is the **document** object. To start manipulating the page with jQuery, we need to ensure that the document is ready, "ready."

So, open our **scripts.js** file and insert this code:

```javascript
$(document).ready(function() {
  // All jQuery functions go in here!
});
```

Any custom jQuery we write will be contained within this **function**.

In the introduction of this article, we saw a simple "Hello, world!" script. To start this script and print the text on the browser with jQuery, first create an empty element to which we apply an id "hello."

Then go back to our **index.html** and insert this in the **<body>:**

```html
<p id="hello"></p>
```

**jQuery** is called with and represented by the **dollar sign** (`$`). We access the DOM with jQuery mainly using **CSS syntax** and apply an action with a method. A basic example of jQuery follows this format:

```javascript
$('selector').method()
```

Since an ID is represented by a hash symbol (#) in CSS, we will access the hello ID with the selector `#hello`. `html()` is a method that modifies the HTML within an element.

```javascript
$('#hello').html('Hello, world!');
```

The code runs **as soon as the document is ready.**

**Save** everything and open index.html in the browser; you will see the "Hello, world!" message. This message was inserted by jQuery!

## Selectors

Most **jQuery selectors** are the same as those used in [CSS](/en/blog/the-basics-of-css/), with some specific additions to jQuery. The complete list of jQuery selectors [is available here](https://api.jquery.com/category/selectors/). Here's a brief overview of some commonly used selectors.

- `$(“*”)` – **Wildcard:** selects every element.
- `$(this)` – **Current:** selects the current element to operate on within a function.
- `$(“p”)` – **Element:** selects every instance of the `<p>` tag.
- `$(“.example”)` – **Class:** selects every element with the applied “example” class.
- `$(“#example”)` – **ID:** selects a single instance of the unique ID “example”.
- `$(“[type=’text’]”)` – **Attribute:** selects any element with the `text` type attribute.
- `$(“p:first-of-type”)` – **Pseudo Element:** selects the first `<p>`.

Generally, **classes** and **IDs** are what will be used most: classes when selecting multiple elements and IDs when selecting only one.

## jQuery Events

In the "Hello, world!" example, the code was executed as soon as the page loaded, and the document was ready, so it didn't require user interaction. Clearly, in this case, we could easily write the text directly in HTML without worrying about jQuery.

However, we will need to use jQuery if we want to **display text on the page with the click of a button.** We can add a button to our HTML to trigger the event.

```html
<button id="trigger">Click me!</button>
<p id="hello"></p>
```

Now we can use the `click()` method to insert our "Hello, world!" text:

```javascript
$('#trigger').click(function() {
  $('#hello').html('Hello, world!');
});
```

Save and refresh, and if everything went smoothly, clicking the button will display the text.

A complete list of jQuery event methods [is available here](

https://api.jquery.com/category/events/). An **event** occurs whenever the user interacts with the browser. We just learned [click()](https://api.jquery.com/click/), which is triggered with a single mouse click.

Here is a brief overview of some commonly used event methods.

- [hover()](https://api.jquery.com/hover/) – **Hover** is triggered when the mouse is moved over an element. [mouseenter()](https://api.jquery.com/mouseenter/) and [mouseleave()](https://api.jquery.com/mouseleave/) apply only when the mouse enters or leaves an element, respectively.
- [submit()](https://api.jquery.com/submit/) – **Submit** is triggered when a form is submitted.
- [scroll()](https://api.jquery.com/scroll/) – **Scrolling** is triggered when you scroll the screen.
- [keydown()](https://api.jquery.com/keydown/) – **Keydown** is triggered when a key on the keyboard is pressed.

## jQuery Effects

[**jQuery effects**](https://api.jquery.com/category/effects/) work hand in hand with events, allowing you to easily add animations and otherwise manipulate page elements.

Let's do an example where we **open and close an overlay/modal popup.** While we could use **two IDs**: one to open the modal and another to close it, we'll use a class to easily open and close the modal with the same function.

**index.html**

```html
<button class="trigger">Open</button>

<section class="overlay">
  <button class="trigger">Close</button>
</section>
```

We'll use a minimal amount of CSS to hide the **overlay** with `display: none` and center it on the screen.

**style.css**

```css
.overlay {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 200px;
  background: gray;
}
```

Finally, we'll use the `toggle()` method, which will switch the CSS `display` property between `none` and `block`, hiding and showing the overlay when clicked.

```javascript
$('.trigger').click(function() {
  $('.overlay').toggle();
});
```

Now you can **toggle the visibility of the modal by clicking the buttons.**

You can also try changing `toggle()` to `fadeToggle()` or `slideToggle()` to see a couple of other built-in jQuery effects.

Here's a brief overview of some of the most commonly used effect methods.

- [toggle()](https://api.jquery.com/toggle/) – **Toggle** on/off the visibility of one or more elements. [show()](https://api.jquery.com/show/) and [hide()](https://api.jquery.com/hide/) are the related one-way effects.
- [fadeToggle()](https://api.jquery.com/fadetoggle/) – **Fade Toggle** toggles the visibility and animates the opacity of one or more elements. [fadeIn()](https://api.jquery.com/fadein/) and [fadeOut()](https://api.jquery.com/fadeout/) are the related one-way effects.
- [slideToggle()](https://api.jquery.com/slidetoggle/) – **Slide Toggle** toggles the visibility of one or more elements with a sliding effect. [slideDown()](https://api.jquery.com/slidedown/) and [slideUp()](https://api.jquery.com/slideup) are the related one-way effects.
- [animate()](https://api.jquery.com/animate/) – **Animate** performs custom animation effects on the CSS property of an element.

## Conclusion

Now that you have learned the basics of jQuery, you can **experiment** and try to create the effects you want!

So, try to **create some effects** on mouse hover, click, or scroll, modifying **CSS classes** such as color, background, or even the image!

**With jQuery, you can do practically anything,** just get started and study a bit!

Now that you understand the basics of **front-end languages,** it's time to dedicate some time to the **main language of WordPress:**

_[<< Basics of Bootstrap](/en/blog/the-basics-of-bootstrap/)_

_[Basics of PHP >>](/en/blog/the-basics-of-php/)_
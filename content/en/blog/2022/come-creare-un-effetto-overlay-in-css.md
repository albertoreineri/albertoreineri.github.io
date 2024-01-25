---
title: "How to Create an Overlay Effect in CSS"
description: "Tutorial on How to Create an Overlay Effect in CSS for Your Website."
date: "2022-02-22"
categories:
  - Web Dev
---

Personally, I use overlays extensively to enhance text readability over an image, **but what is this overlay?**

In simple terms, it is nothing more than a **layer between the image and the text**, a layer that 'dims' the image to make the text more legible.

Naturally, **with the overlay, the text becomes much more readable**, and in my opinion, the image is also less impactful, less intrusive.

Doing it is not difficult at all.

{{< youtube KiZMQCs0SSg >}}

## How to Do It

Simply go inside the image container, in this case, the _div_ with the class _sidebar_, and add an element called "_overlay_"

```html
 <div class="sidebar" style="background:url('https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')">
        <div class="overlay"></div>
        <div class="sidebar-inner">
            <div class="site-header">
                <h2>Website Name</h2>
                <i>Lorem ipsum dolor sit amet</i>
            </div>
        </div>
    </div>
```

With the HTML, we're all set; now, let's move to our **CSS** file, and we only need to create this class:

```css
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    width: 100%;
    height: 100%;
}
```

_**And Voilà! All done!**_

Now, all that's left is to customize it as you like, changing the color and opacity level.

_Happy coding!_
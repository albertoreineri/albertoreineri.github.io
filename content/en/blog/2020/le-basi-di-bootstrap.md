---
title: "4. The Basics of Bootstrap"
description: "Short guide to learn the basics of Bootstrap. Learn what you need to get started in the world of web development."
date: "2020-03-17"
url: "/en/blog/the-basics-of-bootstrap"
categories:
  - Start Here
---



**Translation:**

This guide refers to Bootstrap 4, now version 5 has been released... As soon as I have a moment, I'll update it!

---

If you want to become a **web developer** today, you can't avoid encountering **Bootstrap**.

As the [official website](https://getbootstrap.com/) says, **Bootstrap is the world's most popular HTML, CSS, and JS framework!**

A vast majority of web layouts are created using **Bootstrap** because it makes responsive development **simple and fast**.

Although there are other alternatives, Bootstrap remains a cornerstone in **web layouts**.

## What is Bootstrap

But what practically is **Bootstrap**?

Bootstrap is a set of **CSS and JS libraries** that speed up the creation of web page layouts.

It was developed by **Twitter** and is an **open-source project**.

## How to Include Bootstrap

To use Bootstrap, you need to include it in your project by **adding** the CSS and JS libraries to your web page.

This can be done in **2 ways**:

- Via CDN
- By downloading the files

### CDN

This method involves **calling Bootstrap from the CDN**. It's easy and fast, no need to download anything, just insert this code in the **_<head>_**:

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

and this before the end of the **_<body>_**:

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

**_Voilà!_** Bootstrap is added to the site and ready to go!

### Downloading the Files

This method involves **downloading the Bootstrap files**, placing them in the website folder, and **calling them**.

Bootstrap files can be **downloaded** from this page:

[https://getbootstrap.com/docs/4.0/getting-started/download/](https://getbootstrap.com/docs/4.0/getting-started/download/)

Once downloaded, you need to insert the **CSS file in the <head>** and the **JS before the </body>**.

In the download, there will be **many versions** of the files, we are interested in the minified ones:

- bootstrap.min.css
- bootstrap.min.js

So, insert this code in the **_<head>_**:

```
<link rel="stylesheet" href="css/bootstrap.min.css">
```

And this before **_</body>_**:

```
<script src="js/bootstrap.min.css"></script>
```

For simplicity and quick setup, we will **use the CDN method**.

**Here's the basic template we'll start with:**

```
<!doctype html>
<html lang="it">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!-- Additional CSS -->

    <title>Intensive Bootstrap Course!</title>
  </head>
  <body>
    <h1>Intensive Bootstrap Course!</h1>

    <!-- Additional JavaScript -->

    <!-- jQuery, Popper.js, and Bootstrap JS **The order is very important, do not modify it** -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
```

## Bootstrap Grid

The **fundamental part** of Bootstrap is its grid system.

Bootstrap uses a system based on **12 columns**, which **adjusts** to the screen size.

The grid consists of a **container**, inside which **rows** are inserted, and inside which **columns** can be inserted.

The columns can be configured so that their **width adjusts and changes** depending on the screen size.

**But it's easier to do than to say, so let's get started!**

Let's create a layout divided into **2 columns** that will become 1 if the screen is smaller than a laptop!

Under the <h1> of our file, let's insert this:

```
    <!-- Layout 2 columns for Laptop, 1 column for tablet and below -->
    <div class="container bg-secondary">
        <div class="row">
            <div class="col-lg-6 bg-success">
                Column 1
            </div>
            <div class="col-lg-6 bg-warning">
                Column 2
            </div>
        </div>
    </div>
```

The code explains itself!

Now we

 have a layout with 2 columns on **desktop**:

![](images/image-15-1024x76.png)

And 1 column on **tablet** and below:

![](images/image-17.png)

You will see that the width is smaller than the entire desktop screen.

If you want a full-width layout, replace "**container**" with "**container-fluid**".

## How to View Mobile Mode from PC

To get an idea of how the site will look on various **devices**, you can use Chrome's "Toggle Device" function.

In Google Chrome, press **F12** and then this **icon** on the left:

![](images/image-18.png)

Then, at the top, you can choose a mobile device or select the **dimensions** you prefer through the "Responsive" option:

![](images/image-20.png)

## Breakpoints

Bootstrap already has various **predefined breakpoints**, from **desktop** to **mobile**.

Specifying **col-lg-6** means that the content will occupy **6 columns of the 12** available as long as the width is greater than lg, after which the content will occupy the entire width of the screen.

Here's a table of Bootstrap's **sizes** and columns:

|   | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | Extra large ≥1200px |
| --- | --- | --- | --- | --- | --- |
| Max container width | None (auto) | 540px | 720px | 960px | 1140px |
| Class prefix | `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` |

You can create **complex layouts easily** thanks to this column division system.

Here's an **example**:

```
    <!-- Layout 2 columns for Laptop, 3 columns for tablet, 1 column for smartphone -->
    <div class="container bg-secondary">
        <div class="row">
            <div class="col-lg-6 col-md-4 bg-success">
                Column
            </div>
            <div class="col-lg-6 col-md-4 bg-warning">
                Column
            </div>
            <div class="col-lg-6 col-md-4 bg-success">
                Column
            </div>
            <div class="col-lg-6 col-md-4 bg-warning">
                Column
            </div>
            <div class="col-lg-6 col-md-4 bg-success">
                Column
            </div>
            <div class="col-lg-6 col-md-4 bg-warning">
                Column
            </div>
        </div>
    </div>
```

In this case, we have 2 columns for desktop, 3 for tablet, and 1 for smartphone.

Now **try it yourself** to create layouts using the table above! The best way to learn is to **try, try, and try!**

## Components

In addition to the grid, Bootstrap includes a series of **beautiful and ready-to-use components** for our websites. Just copy the component, **paste** it into our site, and then modify it as we like!

All components are visible at this **link**:

[https://getbootstrap.com/docs/4.3/components/alerts/](https://getbootstrap.com/docs/4.3/components/alerts/)

On the left, you will see a menu with the list of components.

**Let's now see the most used ones!**

### Navbar

Let's create a **navbar** for our site!

Nothing simpler with Bootstrap, we just need to search for "**Navbar**" among the various components ([https://getbootstrap.com/docs/4.3/components/navbar/](https://getbootstrap.com/docs/4.3/components/navbar/)) and **copy the code** to insert it, in our case this:

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
```

However, we want to make some **modifications**, for example, we don't need the search on the navbar, but we want the site name to be on the left, while the menu is on the right.

So we just need to **delete the search form** and change the margin of the menu from "**mr-auto**" to "**ml-auto**" in the "navbar-nav" ul:

```
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby

="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
```

Now we have our nice **responsive navbar**!

Try viewing it in smartphone mode, you will see that the menu disappears and the **hamburger** appears which will show the menu when clicked:

**Desktop:**

![](images/image-21-1536x495-1-1024x330.png)

**Mobile:**

![](images/image-22.png)

### Buttons

Another extremely useful component is the **buttons**! Bootstrap provides a set of buttons that are **ready-to-use and well-formatted**, available in the most used colors, here they are:

```
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```

![](images/image-24.png)

The class "**btn**" indicates the button, while "**btn-primary**" indicates the type of button.


### Carousels

Inserting carousels has never been so simple! Here too, just go to search for the "Carousel" component on the Bootstrap website and insert the code!

**Example:**

```
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
```

Of course, we need to **add an "src" to the images** to display them, but the carousel works right away!

### Forms

Creating visually acceptable forms is also very quick! Bootstrap allows you to create nice and well-styled inputs without wasting any time!

Here's an **example**:

```
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

![](images/image-26-1024x254.png)

These are just **some** of the **available components**! Browse through the list of components and **try inserting them** to see how they work!

Once you've mastered the grid, you can create responsive websites quickly and easily!

And don't forget that **Bootstrap is cross-browser**, meaning it works smoothly everywhere without issues!

## Modifying Bootstrap

You can also **add your own custom CSS file** to override some Bootstrap classes and customize them as you like!

For example, if you want the btn-primary to be orange, you can create your own CSS file with this inside it:

```
.btn-primary{
   background-color:orange !important;
}
```

Just remember to **include this CSS after Bootstrap**, so it overrides it!

Now all btn-primary buttons will be **orange** instead of blue!

## Sample Layout

Let's now create a **simple homepage using Bootstrap only**!

### **Basic Template:**

```
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The 3 meta tags above MUST come first -->
    <meta name="description" content="Bootstrap Crash Course">
    <meta name="author" content="WP Specialist!">

    <title>Bootstrap Crash Course</title>

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>

    <!-- JQuery and Bootstrap JavaScript  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>

</html>
```

### Navbar:

Now let's insert a **navbar with the menu aligned to the right**, as we saw before:

```
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Bootstrap Crash Course</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
```

### Content

Now let's create the classic layout with the **content on the left** and a **sidebar on the right**. On smartphones, the sidebar will be below the content.

```
    <div class="container mt-5">

        <div class="row">
            <!-- CONTENT -->
            <div class="col-sm-8">

                <!-- ARTICLE -->
                <div>
                    <!-- TITLE -->
                    <h2 class="">My Article</h2>
                    <!-- META -->
                    <p>July 15, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique.

 [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 2</h2>
                    <!-- META -->
                    <p>July 16, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 3</h2>
                    <!-- META -->
                    <p>July 17, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- NAVIGATION LINKS -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mb-5">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                <!-- /NAVIGATION LINKS -->
            </div>
            <!-- /CONTENT -->

            <!-- SIDEBAR -->
            <div class="col-sm-3 col-sm-offset-1">
                <div>
                    <h4>About Me</h4>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>
                <div>
                    <h4>Recent Articles</h4>
                    <ol class="list-unstyled">
                        <li><a href="#">My Article 1</a></li>
                        <li><a href="#">My Article 2</a></li>
                        <li><a href="#">My Article 3</a></li>

                    </ol>
                </div>
                <div>
                    <h4>Social</h4>
                    <ol class="list-unstyled">
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ol>
                </div>
            </div>
            <!-- /SIDEBAR -->

        </div><!-- /.row -->

    </div><!-- /.container -->
```

Special Notes:

- **mt-5** stands for "margin-top: 5rem".
- **offset** is used to leave empty columns before the content.

### Footer

Finally, let's insert the footer:

```
    <footer>
        <div class="container text-center mb-5">
            <p>Site created by <a href="">WP Specialist!</a></p>
        </div>
    </footer>
```

And there you have it, a **classic simple layout entirely created with Bootstrap**!

![](images/image-29-1024x834.png)

As you can see, **Bootstrap is a fantastic tool** for creating web layouts in very little time!

**Try using it** by modifying the page we created to **make it your own**, add an external CSS, change the colors, **create an "about me" page** to link to and use the same layout, in short, unleash your creativity as you see fit!

**The best way to learn is to try, try, try!**

As you may have noticed, **Bootstrap uses jQuery**, a JavaScript library!

Want to know how it works?

[Go to the jQuery Basics guide >>](/en/blog/the-basics-of-jquery/)

For clarity, here's the **complete code** of the basic layout with Bootstrap!

The **comments** will help you understand the various sections!

```
<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The 3 meta tags above MUST come first -->
    <meta name="description" content="Bootstrap Crash Course">
    <meta name="author" content="WP Specialist!">

    <title>Bootstrap Crash Course</title>

    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">Bootstrap Crash Course</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <div class="container mt-5">

        <div class="row">
            <!-- CONTENT -->
            <div class="col-sm-8">

                <!-- ARTICLE -->
                <div

>
                    <!-- TITLE -->
                    <h2 class="">My Article</h2>
                    <!-- META -->
                    <p>July 15, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 2</h2>
                    <!-- META -->
                    <p>July 16, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- ARTICLE -->
                <div class="mt-5">
                    <!-- TITLE -->
                    <h2 class="">My Article 3</h2>
                    <!-- META -->
                    <p>July 17, 2020 - Written by <a href="#">Alberto</a></p>
                    <!-- CONTENT -->
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et justo ultrices, blandit nulla in, convallis metus. Nullam et mollis orci.
                        Nulla magna augue, accumsan in metus ut, pulvinar facilisis libero. Aliquam erat volutpat. Nulla lectus tortor, lacinia id imperdiet ut, sagittis
                        consectetur magna. Maecenas laoreet sodales tristique. [...]
                    </p>
                </div>
                <!-- /ARTICLE -->

                <!-- NAVIGATION LINKS -->
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mb-5">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                <!-- /NAVIGATION LINKS -->
            </div>
            <!-- /CONTENT -->

            <!-- SIDEBAR -->
            <div class="col-sm-3 col-sm-offset-1">
                <div>
                    <h4>About Me</h4>
                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>
                <div>
                    <h4>Recent Articles</h4>
                    <ol class="list-unstyled">
                        <li><a href="#">My Article 1</a></li>
                        <li><a href="#">My Article 2</a></li>
                        <li><a href="#">My Article 3</a></li>

                    </ol>
                </div>
                <div>
                    <h4>Social</h4>
                    <ol class="list-unstyled">
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ol>
                </div>
            </div>
            <!-- /SIDEBAR -->

        </div><!-- /.row -->

    </div><!-- /.container -->

    <footer>
        <div class="container text-center mb-5">
            <p>Site created by <a href="">WP Specialist!</a></p>
        </div>
    </footer>


    <!-- JQuery and Bootstrap JavaScript  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</body>

</html>
```

_[<< JavaScript Basics](/en/blog/the-basics-of-javascript/)_

_[jQuery Basics >>](/en/blog/the-basics-of-jquery/)_

---
title: "7. Let's create the pages of our first website!"
description: "WordPress Usage Tutorial. What Pages are, what they are used for, and how they work."
date: "2020-03-20"
url: "/en/blog/lets-create-the-pages-of-our-first-website"
categories:
  - WordPress Beginner
---

Now that we have **installed a theme** on our **WordPress** project, we can start **creating the various pages** for our site.

First, let's enter the **backend** by going to the following address and entering the credentials:

[http://localhost/wp-test/wp-admin/](http://localhost/wp-test/wp-admin/)

We will create both **pages** and **posts**; this way, you'll better understand when to use one over the other. By the end of the lesson, we will have a "Home page," a "About Me" page, a "Contacts" page, and a "Blog" section.

**Let's get started!**

## PAGES

Let's begin by creating the "About Me" page.

Using the **sidebar menu**, go to "Pages" and then "Add New Page."

![Add New Page](/images/image-53.png)

Now, we are faced with **Gutenberg**: the **WordPress page builder**.

Through this interface, we can **create our web page** without writing a single line of code.

![Gutenberg](/images/image-54-1024x507-1.png)

In the "Add Title" field, type "_About Me_," and below the title, you can write the **content of our page**.

### GUTENBERG

As mentioned earlier, **Gutenberg is the WordPress page builder**. It is relatively young; WordPress has implemented it recently, but it has great **capabilities**.

The beauty of this page builder is that it is **minimal**, **simple**, and **intuitive**.

All content is **divided into blocks**. For example, a **paragraph** is a block, an **image** is another block, a **bullet list** is another, and so on.

To insert a block, just click on the "+" on the left and choose the desired block.

![Insert Block](/images/image-55.png)

On this page, we can insert a "Paragraph" block, where we write:

_"Hello, I am [your name], and this is my first WordPress site!!! Nice, isn't it?"_

Below this paragraph, we can insert an "Image" block and choose a **photo of ourselves**.

After selecting the image block, just click on "Upload," choose a photo from your computer, and it will be inserted in the correct position.

![Insert Image](/images/image-56.png)

Finally, to make the changes visible, we need to **publish the page**.

![Publish Page](/images/image-58.png)

At the top right, you will find two buttons: **Preview** and **Publish**.

By clicking on **"Preview,"** you can see a preview of the page you are creating. When you have finished filling out the page, you can click **"Publish,"** and it **will be published online!**

So, click on Publish, and **you have created your first page!!!**

### CONTACTS

To create the "Contacts" page, we will use the same method as above:

Go to "Pages – Add New Page," and in the title, enter "_Contacts_". Then **you can publish it for now**.

In the **next lesson**, we will see how to **insert a simple and elegant contact form** to allow our users to write to us via email!

## BLOG

Now, let's create the "Blog" section of the site. As you may know, WordPress was originally created as a blogging platform, so implementing this function is straightforward!

To do this, go to "Posts – Categories."

![Categories](/images/image-63.png)

Here we can **create categories for our site** to categorize articles and make management and navigation orderly.

![Create Category](/images/image-64-1024x515-1.png)

As you can see, there is already a "Uncategorized" category by default, which we will soon delete.

But first, let's create the "Blog" category by entering "Blog" in the name field and clicking on "Add New Category."

Now you will see "Blog" appear on the right in the list of categories.

If you try to **delete "Uncategorized,"** you will see that you **can't** at the moment; there is no "Delete" option...

This is because it is set as the **default category,** meaning that every article without a category will be automatically placed in this one. But we don't want that, so let's see how to delete it!

Go to "Settings – Writing."

![Writing Settings](/images/image-65.png)

Here, you will see the setting for the **default category:**

![Default Category](/images/image-66.png)

Simply select **"Blog"** instead of **"Uncategorized"** and save by pressing the **"Save Changes"** button at the bottom.

Now, go back to "Posts – Categories" and delete "Uncategorized."

![Delete Uncategorized](/images/image-67.png)

Now, every article you write will automatically fall into the **"Blog" category**.

## POSTS

Now, let's create a couple of test articles!

Go to "Posts – Add New Post."

![Add New Post](/images/image-68.png)

As you can see, **the interface is the same for creating pages.**

We are always facing **Gutenberg**, and its operation is the same.

You can write an article titled "_My First Article_," entering text as you like. Write a second article titled "_Article Number 2_," also entering random text, perhaps including some images if you like. Remember to press **"Publish"** once you have finished writing the article!

---

**TIPS:** It is very common in the design world to use the "Lorem ipsum" text in sample graphics. It is a Latin passage that works very well as a filler. I use this site to generate it: [http://it.lipsum.com/](http://it.lipsum.com/)

---

## CREATE THE NAVIGATION MENU

Now that we have created our pages and set up the blog, we can create the **navigation menu** to allow users to reach all pages of our WordPress site easily, intuitively, and quickly.

Go to "Appearance – Menu."

![Menu Appearance](/images/image-59-1.png)

Through this section, we can **create menus for our WordPress site!**

![Create Menu](/images/image-60-1024x514-1.png)

By default, WordPress suggests creating a menu with the latest pages we created.

Enter "_Navigation Menu_" in the "Menu Name" field, and then click the down arrow to the right of "**Sample Page**." Options will open:

![Menu Options](/images/image-61.png)

Here, click on "**Remove**."

To include the **"Blog" section** in our navigation menu, click on "**Categories**," select "**Blog**," and press "**Add to Menu.**"

![Add Blog to Menu](/images/image-69.png)

You can **move menu items up or down** by clicking on them and dragging them to the desired position! **Simple,** isn't it?

Now, press "**Create Menu.**"

Now that the menu is created, we will see some **new settings:**

![Menu Settings](/images/image-62.png)

Here, click on "**Top Primary menu**" to set the newly created menu as the top menu, i.e., the classic **

navigation bar**.

---

**CAUTION!** Every menu created needs to be placed somewhere in the theme. If we create a menu only, it will not be displayed anywhere. We need to tell the theme where it should be displayed, either through "Menu Settings" or through widgets.

---

Great, **you have just created the navigation menu for your website.**

![Navigation Menu](/images/image-70.png)

Try going to the **front-end,** and you will see it appear at the top right!

Try using it by **clicking on various links**; you will see that your site has become navigable in a simple, clear, and fast way.

We are making good progress, right? Only a couple of things are left; **continue** in the next lessons to finish the site!
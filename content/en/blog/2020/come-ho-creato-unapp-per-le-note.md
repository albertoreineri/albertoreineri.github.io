---
title: "How I Created a Note-taking App"
description: "I'll tell you how I created a simple note-taking app as a side project."
author: Alberto Reineri
date: 2020-08-03T21:57:00+00:00
categories:
  - Personal
  - Web Dev

---

There are numerous note-taking apps available online. I've tried almost all of them, but none have fully satisfied my needs.

When searching for a note-taking app, I require some fundamental features:

- Pleasant and minimalistic design (I dislike excess)
- Night mode
- Easy formatting (not too complicated, but at least the ability to bold text quickly)
- Availability on all devices (I dislike being restricted to either a PC or smartphone without the option to share)

Once I figured out how I wanted my note-taking app, all that was left was to start creating it!

And so, <a href="https://www.albynotes.albydev.net/" target="_blank" rel="noreferrer noopener">Albertonotes</a> was born!

I drew inspiration primarily from Apple's <a href="https://apps.apple.com/it/app/note/id1110145109" target="_blank" rel="noreferrer noopener">Note</a> app and <a href="https://simplenote.com/" target="_blank" rel="noreferrer noopener">Simplenote</a>, two fantastic apps. However, the former is only available on iPhone, iPad, and Mac, while the latter allows formatting only in markdown, requiring constant switching between edited and rendered text—not ideal.

So, I decided to take the best from both and combine it into something of my own.

## Technologies Used:

### PHP and MySQL

I considered doing everything in JavaScript, maybe with Node JS, but I'm very familiar with the [**PHP and MySQL stack**][1], and since it's a side project, I chose the simplest route for me.

### Ajax

To avoid reloading the page with every save or note change, I used Ajax calls. This way, the page remains fixed, with only the content of certain sessions changing. If I manage to create various desktop and mobile apps, this feature will be very useful and provide a pleasant user experience.

### Quill JS

For note formatting, I used **<a href="https://quilljs.com/" target="_blank" rel="noreferrer noopener">Quill JS</a>**, a fantastic JavaScript editor that is straightforward to implement and manage.

I was undecided for a long time. In the past, I often used <a href="https://ckeditor.com/ckeditor-4/demo/#inline" target="_blank" rel="noreferrer noopener">CkEditor</a>, but it's a bit hefty. I was also interested in <a href="https://editorjs.io/" target="_blank" rel="noreferrer noopener">Editor Js</a>, which is visually appealing but seemed a bit early in development.

Quill JS is the best choice for me, at least for now.

### Orange Framework

I haven't talked much about it yet, but I built my framework in PHP to create my web apps.

I've worked with **Laravel** and **CodeIgniter**, but I find it more comfortable to do everything myself. I want to clarify that it's not about reinventing the wheel, as many say, but about developing things properly the first time and reusing them later.

I started by creating the login module, then studying a decent software architecture, and now I have a structure ready for use and, most importantly, portable. I can copy individual modules I'm interested in from one project to another, modify the configuration file, and be confident that they work.

You can try the app here: [https://www.albynotes.albydev.net][2]

It's still in **beta**, so any advice or bug reports are welcome!

Let me know in the comments what you think or if you want to know more.

I hope this article was interesting.

 [1]: /en/blog/cms-framework-or-core-language/
 [2]: https://typewrite.albertoreineri.it/
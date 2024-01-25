---
title: "Using the Browser Without a Mouse – Hacker Style"
description: "Vimium Tutorial, an extension that allows you to uniquely control the browser using the keyboard, without using the mouse."
author: Alberto Reineri

date: 2022-06-06T09:34:22+00:00
categories:
  - Tech
  - Web Dev

---


Spending a lot, a whole lot of time on the browser now, and using the mouse for navigation can be frustrating for us developers... But it's possible to do without it and move around using only the keyboard, like a true hacker! Let's see how it's done.

## Vimium Extension

First, you need to download the <a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb" target="_blank" rel="noreferrer noopener">Vimium extension</a>. I use Google Chrome, but it's also available for <a href="https://addons.mozilla.org/it/firefox/addon/vimium-ff/" target="_blank" rel="noreferrer noopener">Firefox</a> and <a href="https://apps.apple.com/us/app/vimari/id1480933944?mt=12" target="_blank" rel="noreferrer noopener">Safari</a> (if you use Brave or Edge, don't worry, you can install the extension for Google Chrome, it will work perfectly because these browsers share the same base).

After installing it, you can start using your browser directly from the keyboard.

The basic commands are those of the Vim software, so if you're on Linux, you'll probably already feel comfortable, otherwise, don't worry, just a few minutes of practice to abandon the mouse forever!

Here are the main commands to use it:

## Navigate on the current page:

<pre class="wp-block-code"><code>?       show the list of available commands (very useful at the beginning)
h       scroll left
j       scroll down
k       scroll up
l       scroll right
gg      scroll to the top of the page
G       scroll to the bottom of the page
d       scroll down half a page
u       scroll up half a page
f       open a link in the current tab
F       open a link in a new tab
r       reload
gs      view page source</code></pre>

## Navigate to other pages:

<pre class="wp-block-code"><code>o       Open URL
O       Open URL in a new tab
b       Open bookmarks
B       Open bookmarks in a new tab</code></pre>

## History:

<pre class="wp-block-code"><code>H       Go to the previous page
L       Go to the next page</code></pre>

## Manipulate tabs:

<pre class="wp-block-code"><code>J, gT      Go one tab to the left
K, gt      Go one tab to the right
g0         Go to the first tab
g$         Go to the last tab
t          Create a tab
x          Close the current tab
X          Reopen a closed tab
T          Search among tabs</code></pre>

There you go, these are just the main commands, there are others that you can read here: <a href="https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb" target="_blank" rel="noreferrer noopener">https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb</a>

And that's it! All you have to do now is try using them, and you'll see that in no time you'll be able to use the browser totally in hacker style ?‍?

As always, happy coding!
---
title: "Managing Work with Python"
description: "I have created a simple script to automate recurring tasks with Python and Selenium."
author: Alberto Reineri
date: 2020-01-26T21:46:00+00:00
categories:
  - Personal

---

For some time now, I've been developing small projects in Python. Not for work, but because in the online developer community, it's often talked about, and this language seems truly fantastic.

So, I decided to dedicate a few hours a week to it, to get a general understanding in case I need to use this language in the future.

While studying and developing, an idea for a simple software that could be easily created with Python came to my mind.

**Every morning**, when I start working, I launch a series of software and web pages, always the same, every day...

So, I thought of **automating this process**, creating a script that allows me to organize my computer as soon as it starts, opening everything I need with a single click.

## Opening a web browser with Python

First, I open **Google Chrome** (or Microsoft Edge, as it has really improved from the new version).

First, you need to import the _webbrowser_ module:

```python
import webbrowser
```

Then, just indicate which sites we want to visit. For example, I open **Gmail** and then Google **Calendar** and Google **Keep** in two separate tabs, like this:

```python
# Open a new browser window
webbrowser.open_new("https://mail.google.com/mail/u/0/#inbox")

# Open URLs in new tabs
webbrowser.open_new_tab("https://keep.google.com/u/0/#home")
webbrowser.open_new_tab("https://calendar.google.com/calendar/r")
```

You can also group the URLs into variables to call later, like this:

```python
# Variables
website1 = "https://mail.google.com/mail/u/0/#inbox"
website2 = "https://calendar.google.com/calendar/r"
website3 = "https://keep.google.com/u/0/#home"

# Open a new browser window
webbrowser.open_new(website1)

# Open URLs in new tabs
webbrowser.open_new_tab(website2)
webbrowser.open_new_tab(website3)
```

This way, the code is easier to understand and cleaner.

## Opening external software with Python

In addition to the browser, I usually open some software. One, in particular, is **XAMPP**, to comfortably work locally with my **PHP** projects.

To open software with **Python**, you need to import the _os_ module like this:

```python
import os
```

And then call the path where the executable file of the program resides.

I work on Windows, so it will be a .exe file.

Here's the code:

```python
path = "C:/xampp/xampp-control.exe"
os.system(path)
```

## Opening a folder with Python

Finally, I want to open the _htdocs_ folder, where all my projects reside. For this operation, we will always use the _os_ module, so it won't be necessary to import it again.

Just indicate the path of the folder and use the _startfile_ method, like this:

```python
path = "C:/xampp/htdocs"
path = os.path.realpath(path)
os.startfile(path)
```

## Hiding the Python console

This is the script. But there's one more thing I don't like: **the Python console that stays open** below the software just launched.

Fortunately, it can be hidden very easily; just insert the following code for **Windows**:

```python
# Hide the Python console
import win32gui, win32con

The_program_to_hide = win32gui.GetForegroundWindow()
win32gui.ShowWindow(The_program_to_hide, win32con.SW_HIDE)
```

That's it; the script is finished.

If you want to run it by clicking on an icon, just turn it into a .exe using pyinstaller.

To do this, install pyinstaller on your PC and then run this command from the terminal:

```bash
pyinstaller filename.py
```

This way, you can have a link on the desktop that will run your script, opening all the necessary software for your work.

I hope this article has been helpful. If you have any advice or suggestions to improve it or any bugs to report, let me know in the comments!

### Full Code:

```python
import win32gui, win32con  # Hide Python console
import webbrowser  # Open browser
import os  # Open Software and Folders

# Hide Python console
The_program_to_hide = win32gui.GetForegroundWindow()
win32gui.ShowWindow(The_program_to_hide, win32con.SW_HIDE)

# Open browser
# Variables
website1 = "https://mail.google.com/mail/u/0/#inbox"
website2 = "https://calendar.google.com/calendar/r"
website3 = "https://keep.google.com/u/0/#home"

# Open a new browser window
webbrowser.open_new(website1)

# Open URLs in new tabs
webbrowser.open_new_tab(website2)
webbrowser.open_new_tab(website3)

# Open Folder
path = "C:/xampp/htdocs"
path = os.path.realpath(path)
os.startfile(path)

# Open Software
xamppPath = "C:/xampp/xampp-control.exe"
os.system(xamppPath)
```
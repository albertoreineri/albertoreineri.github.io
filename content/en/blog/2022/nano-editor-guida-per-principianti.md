---
title: "Nano Editor, Beginner's Guide"
description: "Tutorial about the terminal text editor NANO."
date: "2022-06-27"
categories:
  - Linux
---

Linux users have many options to choose from when it comes to text editors. From basic to advanced, there are plenty of text editors available, but some, like Vim and Emacs, can be quite complex for less experienced users.

This is where Nano comes to the rescue, perhaps the best text editor for beginners.

## Nano:

Nano is a simple and lightweight text editor developed specifically for UNIX systems and desktop environments that use a command-line interface. Nano is licensed under the GNU General Public License and emulates the Pico text editor.

## How to Install Nano:

I'm using Ubuntu for this tutorial, and the installation process will be the same on other Linux distributions.

Before proceeding with the installation process, it's a good idea to check whether the Nano text editor is already installed on your system. Some Linux distributions come with Nano preinstalled.

To check, run the following command in the terminal.

```bash
$ nano --version
```

If you get an output with the current version of Nano, you can skip the installation as the Nano text editor is already installed on your system.

Installing the Nano Text Editor is simple; just run the following command in the terminal and wait for the installation to complete.

```bash
$ sudo apt-get install nano
```

CentOS/Red Hat Enterprise Linux (RHEL) users can use the following command to install the Nano editor.

```bash
$ yum install nano
```

Now that the Nano editor has been successfully installed on your system and is ready for use, we can start with a beginner's guide to using the Nano text editor.

## Beginner's Guide to Using the Nano Text Editor

Let's see how to use the Nano text editor.

### How to Open/Close the Nano Text Editor

The command to open the Nano text editor is as follows.

```bash
$ nano filename
```

You can open various types of files in the Nano text editor, including .txt, .php, .html, and many others. You just need to type the filename followed by an extension to open the particular file in the Nano editor. For example, suppose you need to open a file named my_file.txt; the command would be as follows.

```bash
$ nano my_file.txt
```

You need to make sure you are in the directory where the file is saved. If the file is not present in the directory, the Nano text editor will create a new file in the current directory.

Once the file is open, you'll notice that the Nano interface displays the filename at the top, while at the bottom, you'll mainly see shortcuts like cut, replace, go to line, and justify. Here ˄ denotes the **CTRL** key on the keyboard.

For example, to **write** or save changes, you need to press CTRL + O on the keyboard.

If you are opening a configuration file, make sure to use the **–w** option; this will command the Nano editor to open the configuration file in a standard format. If you don't use this option, the Nano editor will wrap the text of the file to fit the window, which will eventually be difficult to read.

### How to Search/Replace Text

**CTRL + W** is the shortcut to search for a word in the editor. Now you need to enter the text you want to search and then press the Enter key. To continue searching for the same text, use the **ALT + W** key.

To replace text, you need to use **CTRL + R**; the editor will take you to the first instance of the text you want to replace. To replace all text, you need to press **A**. But if you want to replace only one occurrence, press **Y**.

### How to Copy and Paste Text

The copy-paste operation is not as straightforward as other text editors in the Nano editor. If you want to cut and paste a particular line, you need to first bring the cursor to the beginning of that line.

Now you need to press **CTRL + K** to cut the line, then move the cursor to where you want to paste it, now finally, press **CTRL + U** to paste the line.

To copy and paste a particular string or word, you need to select that word or string by pressing **CTRL + 6** or **ALT + A**, make sure the cursor is at the beginning of the word.

Now you can use **CTRL + K** and **CTRL + U** to cut and paste the word or string.

That's how you can start using the Nano text editor. Editing a text file using the command line is not easy, but the Nano text editor makes it simpler. It is reliable and one of the easiest-to-use tools.

From inexperienced users to professionals, everyone finds the Nano text editor a handy command-line tool. I hope this guide has definitely helped you get started with the Nano editor.

Here are some frequently used commands:

## Useful Nano Shortcuts:

| Command  | Action                              |
| -------- | ----------------------------------- |
| CTRL + A | Go to the beginning of the line      |
| CTRL + E | Go to the end of the line            |
| CTRL + Y | Scroll down the page                |
| CTRL + V | Scroll up the page                  |
| CTRL + \_ | Scroll to the specific line          |
| CTRL + C | Find out where the cursor is         |
| CTRL + V | Scroll up                           |
| CTRL + W | Search for text                     |
| CTRL + D | Delete the character under the cursor|
| CTRL + K | Delete the entire line              |
| CTRL + \\ | Replace a string                    |
| CTRL + O | Save the content without exiting    |



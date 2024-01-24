---
title: "How to use GIT"
description: "In this guide, we will explore the most commonly used GIT commands."
date: "2019-12-09"
categories:
  - Web Dev
---

Not long ago, I wrote an [article](/en/blog/git-what-is-it/) praising **Git**, a version control software I can't live without. So, I decided to create a guide to explain how to use GIT!

## BUT HOW DO YOU ACTUALLY USE GIT? IS IT HARD TO USE?

Let's start with the fact that "Git" can be translated as "_idiot_," almost suggesting that it's foolproof...

Jokes aside, it's **very simple** to use, and it can also be a good **starting point to learn the Command Line Interface (CLI)**!

## INSTALLATION

To **download** Git, simply visit this site: [https://git-scm.com/](https://git-scm.com/)

Once you open the link, click on "Download," select your operating system, and proceed with the installation.

If you're using Windows, I recommend installing Git Bash, a nice CLI that I use for many tasks.

## USAGE

Once Git is installed, open Git Bash and navigate to your project folder (use the `cd` command. E.g., `cd C:/Users/alby/projects/app`).

Here, enter the command:

```bash
git init
```

Git will now be present in your project with a hidden folder called .git. Never open this folder; just leave it where it is; it won't hurt.

Now, on Git Bash, type the following command:

```bash
git add .
```

This **adds** all project files to the staging area, waiting to be approved.

Then, simply write:

```bash
git commit -m "commit name"
```

This command **commits** your files, creating a version of your project. In quotes, you can write something like "First commit," and in subsequent commits, you'll specify the changes made (e.g., "Added login").

## GITHUB

It's also possible to save commits on GitHub, allowing you to view and download them from anywhere. It also enables other developers to view and improve your code!

To do this, you need a GitHub account and create a new repository.

After creating a new GitHub repository, GitHub already provides the commands to "fill" it with your local project.

To do this, you need to enter:

```bash
git remote add origin https://github.com[repository link]
```

```bash
git push -u origin master
```

This way, your project is now on GitHub. To download it, use the command:

```bash
git pull https://github.com[repository link]
```

These are the **basic commands**. Once a commit is created, you can make further changes to the project and re-run the add and commit commands.

There are **many other commands** to use this software. **The best way to learn them all is to use them**, so get your hands dirty and try them! **You won't be able to do without them**.

Below, I list some of the **most used commands**, explained briefly.

## GIT COMMANDS

### git config

*Usage:* `git config --global user.name "[name]"`

*Usage:* `git config --global user.email "[email address]"`

This command sets the author's name and email address to be used for your commits.

```bash
git config --global user.name "alberto"
git config --global user.email "alberto@alberto.it"
```

### git init

*Usage:* `git init [repository name]`

This command is used to start a new repository (project).

```bash
git init DEMO
```

### git clone

*Usage:* `git clone [url]`

This command is used to clone a repository from an existing URL.

```bash
git clone https://github.com/albertoreineri/Simple-Header-and-Footer.git
```

### git add

*Usage:* `git add [file]`

This command adds a file to the staging area.

```bash
git add file.php
```

*Usage:* `git add *`

This command adds one or more files to the staging area.

```bash
git add *
```

### git commit

*Usage:* `git commit -m "[Type in the commit message]"`

This command records or snapshots the file changes permanently in the version history.

```bash
git commit -m "Modified file.php"
```

### git status

*Usage:* `git status`

This command lists all the files that need to be committed.

```bash
git status
```

### git rm

*Usage:* `git rm [file]`

This command deletes the file from the working directory and stages the deletion.

```bash
git rm file.php
```

### git log

*Usage:* `git log`

This command is used to list the version history for the current branch.

```bash
git log
```

### git branch

*Usage:* `git branch`

This command lists all local branches in the current repository.

```bash
git branch
```

*Usage:* `git branch [branch name]`

This command creates a new branch.

```bash
git branch branch-name
```

*Usage:* `git branch -d [branch name]`

This command deletes the branch.

```bash
git branch -d branch-name
```

### git checkout

*Usage:* `git checkout [branch name]`

This command is used to switch from one branch to another.

```bash
git checkout branch-name
```

*Usage:* `git checkout -b [branch name]`

This command creates a new branch and also switches to it.

```bash
git checkout -b branch-name
```

### git merge

*Usage:* `git merge [branch name]`

This command merges the specified branch's history into the current branch.

```bash
git merge branch-name
```

### git remote

*Usage:* `git remote add [variable name] [Remote Server Link]`

This command is used to connect a local repository to a remote server.

```bash
git remote add origin https://github.com/githubUser/repoName.git
```

### git push

*Usage:* `git push [variable name] master`

This command sends changes from local to the remote repository.

```bash
git push origin master
```

*Usage:* `git push [variable name] [branch]`

This command sends branch commits to the remote repository.

```bash
git push origin branch-name
```

*Usage:* `git push --all [variable name]`

This command sends all branches to the remote repository.

```bash
git push --all origin
```

*Usage:* `git push [variable name] :[branch name]`

This command deletes a branch on the remote repository.

```bash
git push --all origin : branch-name
```

### git pull

*Usage:* `git pull [Repository Link]`

This command retrieves and merges changes from the remote server into the working directory.

```bash
git pull https://github.com/GitHubUser/GitHubRepo.git
```

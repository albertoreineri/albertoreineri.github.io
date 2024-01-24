---
title: Remove Virus from WordPress
description: "WordPress is one of the most widely used platforms in the world for creating websites, but sometimes it can be easy to encounter a virus. But how can they be removed?"
date: "2019-09-01"
categories:
  - WordPress DEV
---

WordPress is one of the most widely used platforms in the world for creating websites, but sometimes it can be easy to encounter a virus. But how can they be removed?

WordPress allows anyone to set up a functioning website in very little time and with very low costs.

However, this also means having many websites created by non-professionals who install themes and plugins randomly without really knowing what they are doing. As long as the site is small and has a small number of users, there's no problem. However, when it reaches a larger audience, the probability of being targeted by hackers becomes higher.

It is estimated that at least 30% of WordPress websites have vulnerabilities. Considering that more than 75 million websites use this platform, the vulnerabilities are numerous.

Let's now see how to keep your WordPress site secure and how to eliminate any viruses.

## Securing WordPress

WordPress uses a very intelligent system of themes and plugins, but it is necessary to be careful about what is installed.

There are some fundamental rules:

- **Check the source of themes and plugins**
- **Install as few plugins as possible**
- **Have good hosting**

### 1. Check the Source of Themes and Plugins

Every time something is installed on a WordPress site, code is added to the project. If the code is well written, it will bring useful functionality and improve the site. However, if it is poorly written or contains bugs, it can cause many problems.

When installing something on WordPress, it is crucial to pay very close attention to the source.

**NEVER** install plugins or themes downloaded from unclear sources.

The best thing is to stick to the official WordPress repository or trusted large stores.

### 2. Install as Few Plugins as Possible

There are plugins for everything nowadays, but each plugin is an additional object to manage and maintain.

Having plugins specific to almost useless functionalities risks bringing vulnerabilities to the system and unnecessarily burdening the site.

Installing 20 plugins managed by different developers significantly increases the risk of attacks. If one of these developers does not fix a bug or a vulnerability is discovered, the entire site is at risk.

**The trick is this: "Few but good."**

### 3. Have Good Hosting

We are talking about hosting and not a server because the vast majority of websites are hosted on shared hosting. These services have improved a lot and offer services that were previously available only on dedicated servers, such as SSH access, caching, and security.

Being able to rely on a good service is very important to protect against attacks and manage them in the unfortunate event of an infection.

## Removing a Virus from a WordPress Site

There is no single way to remove a virus because they act very differently from each other.

This complicates things a little... So, it is difficult to explain how to remove a virus in a simple article, but I will try to indicate some ways to manage the problem.

### 1. Look for Backups Before the Attack

If you have good hosting, you will certainly have daily or at least weekly backups. The first thing to do is download one of these backups and keep it aside to have a "pre-virus" situation.

If the site is static, without updatable sections like a blog or portfolio, you can simply restore the backup to the pre-attack version, and the job is done.

If, on the other hand, the site has undergone updates that you do not want to lose, it is advisable to keep a pre-virus copy for safety and go look for infected files.

### 2. Scan the Website with Online Tools

There are many online tools capable of analyzing the site and identifying critical issues.

You can also use some plugins developed to manage security, such as WordFence or Sucuri, and use their scan to analyze all files on the site.

These do not guarantee a 100% optimal result, but it is still a good starting point.

Here are some useful links for scanning:

- [WPsec](https://wpsec.com/)
- [Sucuri SiteCheck](https://sitecheck.sucuri.net/)
- [HackerTarget WordPress Security Scan](https://hackertarget.com/wordpress-security-scan/)
- [WPrecon](https://wprecon.com/)
- [FirstSiteGuide WordPress Security Online Scanner](https://firstsiteguide.com/tools/free-fsg/wordpress-security-online-scanner/)

If you are comfortable with the CLI, you can also use [WP Scan](https://wpscan.org/), the software par excellence for testing the security of a WordPress site.

### Disable Themes and Plugins

To try to isolate the virus, it can be useful to proceed with disabling themes and plugins.

If the site works without plugins and with the default WordPress theme, you can reactivate them one by one and figure out where the infection is.

### Copy Original Theme and Plugin Files

**CAUTION!!!** Be very careful when implementing this point. If you are not experienced, you could do more damage than what is already present! If a theme or a plugin has been infected, one solution to remove the virus from the WordPress site is to overwrite the folders containing the theme and plugins with versions downloaded from official sources.

In this case, if the virus was present in the folder, it will be overwritten.

### Analyze WordPress Structure

Lastly, you can **analyze the file and folder structure of WordPress** to check that there are no strange files not present in the original installation.

If strange files are found, they should be deleted, always paying close attention to what is being done.

## Conclusion

These are some generic steps to check the status of a website.

Unfortunately, **every virus is different**, some act on the database, others directly on the system files, and still others in ways we cannot even imagine.

In this article, I have tried to give you **some basic advice** to try to remove a virus from WordPress. I hope this could be helpful to you!
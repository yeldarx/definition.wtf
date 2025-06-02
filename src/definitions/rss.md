---
title: What is RSS?
definition: RSS is a Web content syndication format. Its name is an acronym for Really Simple Syndication. RSS is a dialect of XML. All RSS files must conform to the XML 1.0 specification, as published on the World Wide Web Consortium (W3C) website.
permalink: /rss/
order: 3
lang: en
layout: definition.njk
---

In simpler terms, RSS is a way for websites to share their updates automatically. Instead of checking a site every day to see if there’s something new, you can subscribe to its RSS feed — and get updates delivered to you, just like messages. RSS is written in a format called XML, which is just a structured way to describe content so that computers — and apps — can understand it.

While RSS is often used for sharing text-based content, in podcasting it powers the delivery of audio and video files. That one element — `<enclosure>` — is what makes podcasting work. It tells podcast apps: “Here’s the file. Download it, play it, show it to the listener.”

The `<enclosure>` element is an empty XML element that includes three attributes: url (the link to the media file), type (the file’s MIME type, such as audio/mpeg), and length (the file size in bytes). This simple structure allows apps to recognize and handle media files automatically — without any manual setup from the listener.

For a more detailed understanding of RSS, I recommend visiting [this page](https://www.rssboard.org/rss-specification#whatIsRss). It provides a clear explanation of what RSS is and how it works.

*PS. I understand this might seem like some kind of overly technical, semantic nightmare — but in reality, these are very simple things. I’ll soon write equally detailed definitions for RSS as well.*
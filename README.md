# Overview

The purpose of this module was to practice integrating a Firebase database into a website, and saving each entry to an authenticated user. I did not successfully complete this project, and this is a loose collection of projects that did not work. In a past class, I worked heavily with Firebase, but only to the extent of basic forms, without authentication. The final project for that class had authentication, and it worked. However, the code from that project did not work upon revisting it for this module. 

My plan for this module, was to revist the code I had previously used, and tweak it to save a larger form. I instead spent 10+ hours trying to fix and redo the tutorials from that class, to no avail. I recognize this project will get nowhere near full points, but I might as well turn in what I have and describe what I tried to do. I redid the tutorial I had three times, and at that point I gave up and worked on another project. I also followed a list of documentation for setting up Firebase from Brother McGary, and I used ChatGPT extensively to try and fix this, but to no avail. I spent close to 6 hours testing this, and another 5 trying to tweak the Javascript for displaying.


[Demo Project Working Link](https://workinghabitdemo.web.app./projects.html)
[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database
The inteneded Firebase database for the final project was supposed to have a field of a user or their authentication, and then within that user, the habit itself. This habit would contain an ID, the date it starts, ends, png coordinates of the habit sprite, and other details relating to the habit.

The tutorial database that works just holds Projects and a brief description of them.



# Development Environment

### Tools Used
- Visual Studio Code: Source code editor with built-in terminal(s)
- GitHub: Popular hosting and code repository site (what you're likely viewing the code on)
- Firebase + Firestore: Hosting site and non-relational database app connection manager.

### Language & Libraries
- HTML: Basic code to generate/organize the structure of webpage elements
- CSS: Styling sheets for the website
- Javascript: Background language that supports dynamic web content and expanded web functionality, like databases.


# Useful Websites

**Cloud Computing Tutorials**

- [Google Firebase Database for a Website](https://byui-cloud.github.io/itm101-course/week05/assignment-instructions.html)
- [Google Database Website with Authentication](https://byui-cloud.github.io/itm101-course/week06/assignment-instructions.html)
- [Firebase Cloud Storage Documentation](https://firebase.google.com/docs/firestore/manage-data/structure-data)
- [ChatGPT](chatgpt.com) *Used for finding syntax, and trying to fix Javascript*

# Future Work


- **Advanced Retrievals:** The Habitlings project wants to retrieve database entries and manipulate them. One of our stretch goals was to retrieve the user's streal and display it as a graph. This works from the retrieveDoc function, and then you break down the number further into different displays.
- **Save User as a Database Holder**: One of the goals for our final project is to save each authenticated user as a folder of sorts, with their habits saved inside of and to each user. I never got to this point, as the bare bones of the project never worked.
- **Saving more to Firebase:** My past projects in Firebase all worked with saving at most, a title with description. Saving multiple rows/entries to a database is sort of the whole point of a database. I had the code to do so, but I struggled so much at the start that this was never considered.

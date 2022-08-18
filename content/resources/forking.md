---
title: Forking the opensourcelaw.ca project
date: '2022-08-14'
summary: >-
  Instructions on how to create a fork (copy) of this site and deploy your
  version.
---

The opensourcelaw.ca project is designed to make the process of creating open casebooks more like open source software development. This means that in order to create your own version of a casebook hosted on this site, or to suggest changes to an existing version, you'll need to use some software that might be unfamiliar to you: GitHub and Netlify. 

GitHub is an open-source web development platform. It has many different features, but for our purposes GitHub does two important things:
1. It hosts all of the code and content of opensourcelaw.ca (including all the casebooks) in an easily and publicly accessible way. In GitHub, this code and content is referred to as a "Repository." You can view the opensourcelaw repository [here.](https://github.com/radish-es/opensourcelaw)
2. It allows for easy "version control." Basically, this means GitHub makes it possible to create and maintain multiple versions of a casebook at once, and provide feedback between the versions. 

Version control requires a bit more explanation. There are three important aspects of "version control" to understand for our purposes.
* First, version control allows us to sustain multiple versions of opensourcelaw.ca. So, for example, if we want to create a revised version of the opensourcelaw.ca, we can store both the original and revised version in the same GitHub repository. In GitHub, these versions are called "branches." If you go to the [opensourcelaw repository](https://github.com/radish-es/opensourcelaw) and click the button labelled "main" on the top left of your screen, you can view all the different branches of opensourcelaw.  
* Second, version control allows anyone--including you--to create your own version of a casebook and modify it however you like. This involves creating a duplicate version all the code and content in the opensourcelaw repository. In GitHub, this duplication process is called "forking," and your version of the casebook is called a "fork" of the original. 
* Third, version control allows for feedback between the original version of opensourcelaw.ca and different forks. This feedback can go both ways: if you make a change to your version of a casebook, you can suggest that change be incorporated in the original version of the casebook. In GitHub, this is called making a "pull request". At the same time, GitHub allows you to incorporate changes we make to an opensourcelaw.ca casebook into your own version.[^1]

You can think of GitHub as the "back end" of opensourcelaw.ca: it's the filing cabinet that has all the raw content of the casebook, as well as instructions for how to put the casebook together. But in order to get the finished version of the casebook, you'll need to use another software called Netlify. 

Netlify is a website building platform. If we're continuing with the filing cabinet metaphor, Netlify takes the content from the GitHub filing cabinet and follows GitHub's instructions to compile, layout, and publish the casebook in website form. It's the "front end" software for opensourcelaw.ca. Using Netlify is free, although you do have to pay if you want to customize your domain name. 

The instructions below will walk you through how to create a fork of opensourcelaw on GitHub, how to modify casebook content on GitHub, how to submit a pull request, and how to publish your modified casebook online using Netlify. 

[^1]: The process for incorporating changes to the original repository into forks of the repository isn't currently included in this write-up, but will be added at a later date. 


### Creating a Fork

1. Go to [github.com](https://github.com/) and sign up for an account. 
2. Go to radish-es/opensourcelaw repository on GitHub. You can click [this hyperlink](https://github.com/radish-es/opensourcelaw)  or type in "radish-es/opensourcelaw" into the searchbar at the top of the GitHub homepage.
3. Click the button labelled "Fork" at the top left of the page. A new page called "Create a new fork" should open. You can change the default repository name if you like. 
4. Note that by default the fork will only be of the main branch of the repository. If you want to edit a different branch, uncheck the box that says "Copy the main branch only". This will create a fork of all the branches of the repository. 
5. Once you're ready, hit the green "Create fork" button at the bottom of the page. 
6. Your new fork will appear. You can always find your fork again by clicking on your profile image at the top left of all GitHub pages and selecting "My Repositories" from the dropdown menu. 

### Modifying Content in GitHub

1. Navigate to your fork of the opensourcelaw repository on GitHub (see step 4 of "Creating a Fork").
2. If you forked multiple branches of the repository, make sure you have the right branch selected. Click the button on the left hand side of the page, under the "Code" tab, and select the branch you want to work on from the dropdown menu. 
3. Scroll down and select the folder labelled "content".
4. Select the folder labelled "courses", and then select the folder of the course you want to modify (for example, "Property"). 
5. The "admin" folder contains the course schedule and syllabus files, while the "readings" folder contains all the content for each week of the course. Select the folder that contains the content you want to edit.
6. Next, select the .md file which contains the content you want to edit. For example, if you wanted to add a case to Week 19 of the course, you'd click on the "week19.md" file. 
7. Once the .md file opens, click the button with a pencil icon. The button is located on the right of the toolbar just about the text preview of the content file. 
8. The pencil button will open an editing window. Make any changes to the file you want in the editing window. You can use the "Preview" tab, located on the right hand side at the top of the text editor, to see what your changes will look like. 
9. Once you're finished, click the green "Commit changes" at the bottom of the page to save your changes.

### Submitting a Pull Request

If you make changes to a course that you think would be helpful to include in the main version, you can let us know by submitting a pull request. 

1. Navigate to your fork of the opensourcelaw repository on GitHub (see step 4 of "Creating a Fork"). 
2. Click on the tab labelled "Pull requests" second from the left at the top of the page.
3. Click the green button on the top left of the page labelled "New pull request".
4. Ensure that you are comparing the same branches between the original repository and your fork. For example, if the button labelled "base" says "base: main", then the button labelled "compare" should also say "compare: main". 
5. Click the green button that says "Create pull request"
6. In the text field that pops up, you can add a title and any comments about your changes that you'd like us to know. 
7. Once you've finished adding any comments, click the green button at the bottom of the text box that says "Create pull request." Now we'll be able to see your suggested changes.

### Publishing Your Version of the Casebook Using Netlify

1. Sign up for Netlify with your GitHub account. Go to [netlify.com](https://www.netlify.com/) and hit the "Start building for free" button. 
2. Netlify will prompt you to "sign up with one of the following". Select the "GitHub" option. 
3. If you aren't already logged into GitHub, you'll be prompted to log into your GitHub account on the next screen. Once you're logged in, select the green button that says "Authorize netlify." 
4. A "Get started" page will pop up. In order to continue, you'll have to select whether you're using Netlify for Work, Client, Personal, or School. There's also some optional information you can choose to fill out. 
5. Once you're done filling out your information, hit the "Set up and continue" button at the bottom of the page. 
6. A "Deploy your first project" page will pop up. Select the option on the left-hand side that says "Import and existing project" and click the button that says "Import from Git."
7. A "Connect to Git provider" page will pop up. Select the "GitHub" option. You may have to authorize Netlify again to continue--if so, select the green button labelled "Authorize Netlify".
8. A page called "Install Netlify" will pop up. You have the option to choose to install Netlify on "All repositories" or "Only select repositories". Choose "Only select repositories" and select your opensourcelaw repository. Then scroll down and hit the green button which says "Install."
9. You may be prompted to select a repository again on the next page. Again, select your opensourcelaw repository. 
10. A page will pop up that allows you to select which branch you want to deploy. If you copied all the branches of opensourcelaw when you were making your fork, make sure you choose the branch you want to deploy. Then, click the green "Deploy site" button at the bottom of the page. 
11. Your site will begin deploying. This process can take a while.
12. Once your site is deployed, a box will pop up at the top of the page which has an auto-generated URL. Click on the URL to see your casebook!

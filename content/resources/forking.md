---
title: Forking the opensourcelaw.ca project
date: '2022-08-14'
summary: >-
  Instructions on how to create a fork (copy) of this site and deploy your
  version.
---


### Creating a Fork

In order to make your own copy of any opensourcelaw course, or to suggest changes for any opensourcelaw course, you'll need to create a fork of the opensourcelaw repository in GitHub. This repository stores all the content for the courses. 

1. Go to [github.com](https://github.com/) and sign up for an account. 
2. Go to radish-es/opensourcelaw repository on GitHub. You can click [this hyperlink](https://github.com/radish-es/opensourcelaw)  or type in "radish-es/opensourcelaw" into the searchbar at the top of the GitHub homepage.
3. Click the button labelled "Fork" at the top left of the page. A new page called "Create a new fork" should open. You can change the default repository name if you like. 
4. Note that by default the fork will only be of the main branch of the repository. If you want to edit a different branch, uncheck the box that says "Copy the main branch only". This will create a fork of all the branches of the repository. 
5. Once you're ready, hit the green "Create fork" button at the bottom of the page. 
6. Your new fork will appear. You can always find your fork again by clicking on your profile image at the top left of all GitHub pages and selecting "My Repositories" from the dropdown menu. 

### Modifying Content 

Now that you've made your own fork, you can freely modify any course content in GitHub.

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

### Deploying Your Version of the Casebook Using Netlify

GitHub houses the inner workings or "back end" of your casebook. To create the final product--the viewable, readable online casebook--you'll need to deploy your GitHub repository using Netlify. 

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

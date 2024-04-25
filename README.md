# Mad Hatter's Personality Quiz

The Mad Hatter's Personality Quiz is a fun way to see which character from Alice in Wonderland you are most similar to.

The adventures of Alice in Wonderland are well known and loved around the World. The larger than life characters and bizarre situations have inspired movies and songs, and influenced pop culture for almost 160 years. 

This quiz will take the user on their own personal journey through Wonderland and will compare their own personality traits with 6 of the best known characters that Lewis Carrol first created in 1865.

The live site can be found here: https://sophie-thomson.github.io/mad-hatters-personality-quiz/

![Multi-device mockup showing responsiveness](docs/readme-images/multi-device-mockup.png)

## Features

### Site Wide

***Favicon***
- A favicon of the recognisable hat of the Mad Hatter so it is easily identifiable among multiple tabs.

![Screenshot of favicon image on a tab](docs/readme-images/favicon-screenshot.png)

***Logo and Mad Hatter's Personality Quiz Heading***
- Logo and h1 text for Mad Hatter's Personality Quiz visible on every page of the site.
- JS used to continually change the colour of the heading reflecting the Mad Hatter personality. 
- Link to index.html from h1 and logo makes it easy for the user to move back to the welcome page and re-start the quiz if they wish. 
- Responsive design to work across devices of different sizes.

![Screenshot of logo and heading on Galaxy Fold](docs/readme-images/logo-heading-screenshot-mobile.png)
![Screenshot of logo and heading on tablet and up](docs/readme-images/logo-heading-screenshot-tablet-desktop.png)


***Footer***

- Information on the creator of the quiz; Sophie Thomson.
- Contains links to Github and LinkedIn profiles for Sophie Thomson.
- Uses Fontawesome icons for GitHub and LinkedIn.
- These links open in a new tab and include accessibillity conventions such as aria labels.

![Screenshot of footer on Galaxy Fold](docs/readme-images/footer-screenshot-mobile.png)

### Welcome Page (index.html)

***Hero Image***

- Clearly recognisable image of a table laden with the kinds of items you would expect to find at the Mad Hatter's Tea Party.
- Image chosen and sized to work well with adjusted focus on different device sizes.


![Screenshot of welcome page Galaxy Fold](docs/readme-images/welcome-page-galaxy-fold.png)
![Screenshot of welcome page on tablet and up](docs/readme-images/welcome-page-tablet-laptop.png)

***Intro Text***
- Introduction to the quiz, setting the scene and transporting user into the world of Alice in Wonderland
- Clear concise instructions on how to complete the quiz and what you can expect at the end.

***How to Play Button***
- Button for user to click on and see a set of clear and concise instructions on how the quiz will work.
- JS used to trigger a pop-up modal with the instructions and a 'x' to close the modal.
- Clicking anywhere on the screen outside of the modal also closes the modal.

![Screenshot of modal Galaxy Fold](docs/readme-images/how-to-play-modal-mobile.png)
![Screenshot of modal image on tablet and up](docs/readme-images/how-to-play-modal-desktop.png)

***Start Quiz Button***

- A button at the bottom of the page inviting the user to 'Enter the Rabbit Hole...' and start their quiz.
- This button navigates to the Question One page and initialises the data for the first question.

***Welcome Page Wireframes***

![Wireframe of index.html on mobile](docs/readme-images/welcome-page-wireframe-mobile.png)
![Wireframe of index.html on tablet and up](docs/readme-images/welcome-page-wireframe-desktop.png)

### Questions Page (questions.html)

***Image***

- Image relating to the nature of the question with a reference to Alice in Wonderland.
- Image selected to work well on different device sizes.
- css and media queries used to ensure image is responsive and looks good on different device sizes.
- Contains hidden results section


![Screenshot of question page on Galaxy Fold](docs/readme-images/questions-page-mobile.png)
![Screenshot of question page on tablet and up](docs/readme-images/questions-page-tablet-laptop.png)

***Question***

- Heading 2 level styling used to make the question stand out at the top of the page and follow assessibility guidelines.

***Answers and Scores***

 - A choice of 6 different fun answers for the user to select from.
 - When the user moves their mouse over an answer the colour changes to highlight the option they would select if they clicked on that option. This does not happen on mobile devices and tablets unless they use a stylus.
 - When an answer has been chosen (clicked on), the selected answer changes background colour and has a contrasting outline border and all other answers are disabled. 
 - Each answer has been assigned an array of scores relating to each of 6 characters (personalities) from Alice in Wonderland [0, 0, 0, 0, 0, 0].
 - The index of the selected answer score matches index of Alice in Wonderland characters: [Alice, Mad Hatter, White Rabbit, Cheshire Cat, Blue Caterpillar, Queen of Hearts]
 - A score of 3 points is given to the character with the closest personality alignment to the answer, 2 points are given to the next closest, and 1 point to a character with a small connection. The other three characters are given a score of 0 for that answer.

***Next Question Button***

- Located below the answer buttons, this button invites the user to progress to the next question in the quiz.
- Only visible once the user has selected an enswer to ensure that they answer all 10 questions.
- When the user clicks the next question button, this triggers the addScore function which adds the scores of the current answer to the character scoreboard for all characters.
- The character score board is not visible to the user, but is used in the JavaScript to keep a tally of the scores from one question to the next.
- The addScore function then calls the nextQuestion function to replace the current question and answer data with the next set of data in the sequence.

***Change Answer Button***

- A button at the bottom of the page inviting the user to change their chosen answer before moving on to the next question.
- This improves user experience so that they don't have to go back to the beginning of the quiz if they change their mind or click the wrong thing by accident.
- This button triggers the changeAnswer function which resets the current question data, effectively allowing the user to choose a different answer.

***Question Page Wireframes***

![Wireframe of question page on mobile](docs/readme-images/questions-page-wireframe-mobile.png)
![Wireframe of question page on tablet and up](docs/readme-images/questions-page-wireframe-desktop.png)

### Character Results Section

***Heading***

- Simple heading to state 'The Results are In...' indicating to user that these are the quiz results.

![Screenshot of results section on Galaxy Fold](docs/readme-images/results-section-mobile.png)
![Screenshot of results section on tablet and up](docs/readme-images/results-section-desktop.png)

***Results Summary***

- Summary line telling the user who the top scoring character and the tied top scoring / second highest scoring characters are
- Depending on the difference in top two character scores, the summary line is adapted to give the user more insight on the ratio of each character

***Character Images***

- An image of each of the two top scoring characters is displayed within a character results box 'card'.
- Images are sized and styled to work well across different device sizes.

***Character Tag Line***

- A tag line is displayed for each of the two top scoring characters below the corresponding image.
- Tag line includes 2-3 words to highlight key characteristics.
- h3 used to give the user a quick understanding of their character before reading in more detail. 

***Character Descriptions***

- A brief description of the characteristics that make the user like each of their top score characters.
- displayed below character image and tag line within character 'card'.
- Character cards are responsive across different devices.

***Repeat Quiz Button***

- A button inviting the user to take the quiz again and see who they get next time.

***Share Results Button***

- A button has been included which takes the user to Facebook so that they can share the quiz with friends and followers.

EDIT: The iframe embedding code from Facebook caused multiple errors and warning in HTML W3C Validation so have been replaced with simple link to Facebook homepage.

***Results Section Wireframes***

![Wireframe of results section on mobile](docs/readme-images/results-page-wireframe-mobile.png)
![Wireframe of results section on tablet and up](docs/readme-images/results-page-wireframe-desktop.png)

### 404 Error Page (404.html)

- Branded 404 error page with button so the user can easily navigate back to the welcome page.
- Same site-wide styling as other pages to improve user experience and consistency.

![Screenshot of 404 error page](docs/readme-images/404-page-screenshot.png)

### Existing Features

- Responsive pages with effective styling to look good on different sized devices.
- Consistent heading using rainbow colour-changing JS visible on every page.

### Additional Features to Implement
To expand on this site, there are a number of features that could be added to provide additional information and functionality:
- A button with automated action for sharing tagline results for the quiz on social media profiles.
- The option to download a recipe for an item to take to the Mad Hatter's Tea Party relating to their character.
 
## Design

### Planning Process

***Mind Mapping***

- A visual mindmap was used to map out the different elements needed to create the initial structure of the site.

![Screenshot of initial planning Mindmap](docs/readme-images/mindmap.png)

***Psuedo Code***

- An initial flow diagram was created to show a simplified sequence of steps that the site will follow in response to user actions.
- Each of the inital steps is then broken down into a subset of smaller psuedo code blocks which can then be translated into JavaScript syntax.
- Wireframe for each page used to break down main features and psuedo code for the HTML/CSS/JS functions for each feature. 

![Image of Psuedo Code inital structure flow diagram](docs/readme-images/psuedo-code-initial-structure.png)
![Image of Welcome Page psuedo code planning](docs/readme-images/welcome-page-wireframe-notes.png)
![Image of Questions Page psuedo code planning](docs/readme-images/questions-page-wireframe-notes.png)
![Image of Final Question Page psuedo code planning](docs/readme-images/final-question-page-wireframe-notes.png)
![Image of Results Page psuedo code planning](docs/readme-images/results-page-wireframe-notes.png)


***Questions and Answers***

- A spreadsheet was created to list 10 personality related questions.
- Each question was given 6 possible answer options which relate to the characters created in the book.
- Each answer option was assigned a score of 3 points, 2 points, or 1 point for the most relevant Alice in Wonderland characters from the below list: 
    - Alice
    - White Rabbit
    - Mad Hatter
    - Cheshire Cat
    - Blue Caterpillar
    - Queen of Hearts

![Screenshot of spreadsheet showing questions and answers data](docs/readme-images/questions-and-answers.png)

### Responsive Layout

## Testing

### Responsiveness

***Method of Testing***

- Each page view has been tested to ensure that all content looks good on devices of different sizes.
- Screenshots of each page / view are included in the above sections.
- The devices / sizes are tested using Google Developer Tools

- The different pages / displays tested are:
    - Welcome Page (index.html)
    - How to Play Modal (index.html)
    - Questions Page (questions.html)
    - Results Section Visible (questions.html)

- The devices / sizes tested for each page/display are:
    - iPhone SE
    - iPhone XR
    - iPhone 12 Pro
    - Pixel 7
    - Samsung Galaxy S8
    - iPad Mini
    - Galaxy Z Fold 5
    - Tablet (768px)
    - Laptop (1024px)

***Results***

- All pages worked well across all devices and sizes.
- No images were distorted and all layouts were responsive to look good on each device.

### Links

***Method of Testing***

- The links of all buttons and external links were tested on all pages.
- External links were tested to ensure they open in a new tab and contain approapriate tags.

- The different pages / displays tested are:
    - Welcome Page - 'How to Play' button to open modal with How to Play Instructions
    - Welcome Page - Links to GitHub and LinkedIn profiles in footer
    - Questions Page - Links to GitHub and LinkedIn profiles in footer
    - Results Section - Restart Button to link back to welcome page to restart quiz
    - Results Section - Share Button external link to Facebook to enable user to share the quiz 
    - Results Section - Links to GitHub and LinkedIn profiles in footer
    - 404 Page - Back to Home button to take user back to home page

***Results***

- All links work as expected and take the user to the expected url / location

### Script Functionality

***Method of Testing***
- Each page has been tested for functionality of the JS running in the background

- Functionality tested for each page / view:
    - Welcome Page
        - Heading showing rainbow colour-changing effect - RESULT: As expected with no console errors
        - Modal working - RESULT: Modal runs with CSS as expected and no console errors
        - CSS showing all expected styling on buttons and quiz box display - RESULT: Styling as expected
    
    - Questions Page
        - Heading showing rainbow colour-changing effect - RESULT: As expected with no console errors
        - Questions displaying with correct question and answer data - RESULT: Displaying as expected with no console errors
        - Questions changing colour with hover styling - RESULT: Colours changing as expected with no console errors
        - Selected question changing colour with CSS - RESULT: Colour changes as expected with no console errors
        - Other anser buttons disabled when one answer selected - RESULT: All other buttons disabled with no console errors
        - Next Button displaying when answer selected - RESULT: Next button displays as expected with no console errors
        - Change Answer Button displaying when answer selected - RESULT: Change Answer button displays as expected with no console errors
        - Next Button triggers Question and Answer data for next question in sequence - RESULT: Next question data replaces existing question data with no console errors
        - Change Answer Button enables answer options and resets question data for current question - RESULT: Button enables user to change answer as expected with no console errors
        - Question 10 Next Button hides questions and answers data and displays Results Section - RESULT: Results section displays as expected and questions section is no longer visible with no console errors     

    - Results Section Visible (questions.html)
        - Heading displaying 'The Results are In... displays at the top of the results box - RESULT: Heading displays as expected with no console errors
        - Summary Result displays a summary including names of two top scoring characters - RESULT: Summary sentence displays as expected with no console errors
        - Character image, tagline and description displayed - RESULT: Results for two different characters are displayed with responsive styling as expected 
        - Summary Result changes depending on score difference between top two scores (tested by iterating through multiple versions of quiz selecting different answers calculated to result in the different summary sentences defined) - RESULT: All four summary sentences display for correct score differences with no console errors
        - Above testing item also tests whether scoreing function is working correctly and tied top character funtions working correctly - RESULT: All scoring functions working as expected with no console errors
        - Restart Button takes user back to Welcome page - RESULT: Link takes user to welcome page as expected with no console errors
        - Share Button links to Facebook - RESULT: Links externally in new tab as expected

### Validator Testing

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/) 

![HTML validation results](docs/readme-images/html-validation.png)

- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

![CSS validation results](docs/readme-images/CSS-validation.png)

- Lighthouse Testing
    - Good scores achieved for all pages.

![Summary of all lighthouse results](docs/readme-images/Lighthouse-validation.png)

- JSHint Testing
 - No errors or warning were found when passing JavaScrip through JSHint

 ![Results of JSHint Checks for Welcome Page](docs/readme-images/JSHint-welcome-page.png)
 ![Results of JSHint Checks for Questions Page](docs/readme-images/JSHint-questions-page.png)


### Unfixed Bugs

- The share button on the results page includes only a link to Facebook homepage and not with active content.
- No other bugs.

## Deployment

### Gitpod Version Control
This site was created using the Gitpod cloud development environment before being pushed through to a dedicated repository on Github.

The following commands were used througout development to push the code through to the Github repo:

- **git add .** - This command was used to add any tracked files to the staging area.
- **git commit -m "Commit message."** - This command was used to create a snapshot of the staged area with a short description.
- **git push** - This command was used to push the committed changes from the current branch to the remote repository on Github.

### Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab
  - Select Pages link in the left hand menu 
  - From the source section drop-down menu, select the Main Branch
  - Click 'Save'
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.  

## Credits

### Content

***Logic & Approach***

- [The Travel Personality Quiz Project](https://github.com/emmahewson/mp2_travel_quiz/tree/main) by Emma Hewson was referred to for guidance on:
    - managing multiple scores for an array of characters
    - comparing chosen answer data to questions and ansers dataset
    - types of functions that may be required

No code was taken from Emma's project, but it was useful for planning logical process and as a prompt for what might come next when I got stuck. 

***JavaScript***

- Code from [StackOverflow] (https://stackoverflow.com/questions/69743873/continuous-rainbow-color-cycling-effect-in-js) was adapted to create colour changing effect on main heading element.
- A tutorial on [w3Schools.com] (https://www.w3schools.com/howto/howto_css_modals.asp) was used to create and style a pop-up instructions modal on the welcome page.
- A tutorial How to Make Quiz App Using JavaScript on [GreatStack] (https://www.youtube.com/watch?v=PBcqGxrr9g8) was referred to for 
    - structuring the questions & answers datasets
    - code for building questions and creating answer buttons
    - code for while loop removing previous answer buttons
    - code to target chosen answer
    - code logic required to reset state of the page ready to build next question
- Code for using .map(Number) adapted from [StackOverflow discussion](https://stackoverflow.com/questions/48343478/what-does-mapnumber-do-here#:~:text=map(Number)%20%2F%2F%20Calls%20Number,ever%20is%20passed%20to%20it)
- Code from a discussion on [StackOverflow](https://stackoverflow.com/questions/31925323/how-to-filter-out-nan-null-0-false-in-an-array-js) was adpated to filter currentScore array to remove all NaN
- Code from the CI Love Maths walkthrough was adapted for for sending and receiving a score to the html DOM
- the syntax for using .push to add items to an array was adapted from examples on [W3Schools tutorial](https://www.w3schools.com/jsref/jsref_push.asp)
- Code to sort an array in descending order adapted from [W3Schools Tutorial](https://www.w3schools.com/js/js_array_sort.asp)
- Syntax for using 'lastIndexOf' to find matching index searching from end of an array found on [Stackoverflow](https://stackoverflow.com/questions/52558924/how-can-i-find-an-array-element-starting-from-the-end-of-the-array)

***Share on Facebook Button***

- Code from the Facebook devlopers pages was used to embed an iframe for users to share their results and a link to the quiz as a post.

EDIT: Unfortunately the embedded code triggered multiple warnings and errors during W3C HTML validation so the automated functionality was removed and the button now links to Facebook which should open up the profile for anyone already logged in to FB.

### Media

***Logo***
- The hat logo was downloaded from [Etsy](https://i.etsystatic.com/43268737/r/il/f5cd85/5522061497/il_794xN.5522061497_dhj8.jpg) 

***Hero Images***

- Welcome Page Hero Image downloaded from [Adobe Stock](https://stock.adobe.com/images/mad-hatter-s-tea-party-whimsical-wonderland-table/751113710)
- Questions Section creative commons Hero Image downloaded from [GoodFon.com](https://www.goodfon.com/films/wallpaper-download-1920x1200-alisa-v-strane-chudes-tim-7375.html)

***Character Results Images***

All character images were found using creative commons filters in Google Chrome:

- Alice image downloaded from [GoodFon.com](https://anime.goodfon.com/art-anime/wallpaper-download-1920x1200-alice-in-wonderland-alice-4136.html)
- Mad Hatter image downloaded from [GoodFon.com](https://www.goodfon.com/films/wallpaper-download-1930x1080-alice-in-wonderland-mad-hatter-bezumnyi-shliapnik-alisa-v-st.html)
- White Rabbit Image dowloaded from [GoodFon](https://www.goodfon.com/films/wallpaper-download-1930x1080-alice-in-wonderland-mad-hatter-bezumnyi-shliapnik-alisa-v-st.html)
- Cheshire Cat image downloaded from [picryl.com](https://picryl.com/media/alice-in-wonderland-1951-cheshire-cat-fb560c)
- Blue Caterpillar image downloaded from [picryl.com](https://picryl.com/media/alice-in-wonderland-1951-caterpillar-df0bf9)
- Queen of Hearts image downloaded from [GoodFon.com](https://www.goodfon.com/films/wallpaper-download-1920x1200-alice-through-the-looking-1639.html)

***Icons***

All icons are downloaded for free from [Font Awesome](https://fontawesome.com/)

### README

- This README was adapted from my own README document for CI PP1 project [Ace Dog Walks](https://github.com/sophie-thomson/ace-dog-walks). That README was created with reference to:
    - CI Love Running README Template
    - The README for [Tacos Travels Project](https://github.com/Gareth-McGirr/tacos-travels) by Gareth McGirr

## Code & Technology
 The following code, platforms and apps were used in the creation of this site:
 - HTML - The main language used to build the content of the webpages.
 - CSS - CSS styling is applied to all areas of the website from within an external file.
 - JS - Javascript code is applied throughout the site to enable interactive feedback with the user in response to their actions.
 - [Stack Overflow](https://stackoverflow.com/) - used as a reference for possible syntax and uses for JS code.
 - [W3 Schools](https://www.w3schools.com/) - used for JS tutorials and testing space to find correct syntax. 
 - Gitpod - Cloud development environment used to write and preview code before committing.
 - Github - Github hosts the Mad Hatter's Personality Quiz repository and is where the site is deployed.
 - Font Awesome - Free icons from font awesome are used in the footer and on a button. 
 - Convertio.co - To improve performace, all jpg images were converted to webp using [convertio.co](https://convertio.co/jpeg-webp/).
 - Tinypng - To further reduce the size of images they were 'tinified' using [TinyPNG](https://tinypng.com/).
 - Favicon.io - The Mad Hatter's Personality Quiz favicon was generated using [Favicon.io](https://favicon.io/favicon-converter/) free generator.
 - Balsamiq - The responsive layout wireframes were designed and planned using [Balsamiq](https://balsamiq.com/).
 - FreeMind - The initial mindmapping process to plan out the various elements of the project was created using [FreeMind] (https://sourceforge.net/projects/freemind/) open source software.
 - Excel (Microsoft Office) - Spreadsheet used to compile questions and answers data and character points values.
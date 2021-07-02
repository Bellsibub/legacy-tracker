<h1 align="center">
    <img src="https://res.cloudinary.com/dsp41gbcw/image/upload/v1625231932/legacyTracker/logo.png" alt="legacy tracker logo" />

</h1>

<div align="center">
  TS4 Legacy Challenge Tracker - Track your scores and plan your legacy challenge!
  <br />
</div>

<div align="center">
<br />

[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/Bellsibub/legacy-tracker?include_prereleases&label=current%20release&style=flat-square)](https://ts4legacytracker.com)
[![made by Bellsibub](https://img.shields.io/badge/made%20by-Bellsibub-ff69b4?style=flat-square)](https://github.com/Bellsibub)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
    - [Backend:](#backend)
    - [Frontend:](#frontend)
- [Usage and Features](#usage-and-features)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Features](#features)
    - [**Dashboard**](#dashboard)
    - [**Laws and Rules**](#laws-and-rules)
    - [**Geneology**](#geneology)
    - [**Categories**](#categories)
    - [**Profile**](#profile)
- [Roadmap](#roadmap)
  - [Summer 2021](#summer-2021)
  - [Autumn 2021](#autumn-2021)
  - [TBD](#tbd)
- [Acknowledgements](#acknowledgements)

</details>

**************************************
**************************************

## About

<table>
<tr>
<td>

I wanted to create a tracker application for the Sims 4 Legacy Challenge. This is one of most commonly used challenges today in the Sims 4 community, but as of yet there are no trackers fully automated applications for the scoring system. However, there are excel sheets made by the awsome Sims 4 community.

When I play this challenge I get easily overwhelmed by all the data and stuff I have to keep track of and the messy design of an Excel sheet doesn't help.

So therefore I have for the past couple of years been planning and thinking about making a website that handles everything for you and displays the relevant data in a nice responsive fashion.

> This application was began its production during the final weeks of the [Technigo Bootcamp](https://www.technigo.io/).

</td>
</tr>
</table>

### Built With

#### Backend:
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongooose](https://mongoosejs.com/)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [Auth0](https://auth0.com/)

#### Frontend:
- [React](https://reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/)
- [Material UI](https://material-ui.com/)
- [classnames](https://www.npmjs.com/package/classnames)
- [mdi-material-ui](https://materialdesignicons.com/)
- [Auth0](https://auth0.com/)

**************************************
**************************************

## Usage and Features

### Prerequisites
Before you begin using this application you might want to read up a bit on what the legacy challenge actually is in the Sims 4. 
> To do that start off by going to the [official website](https://simslegacychallenge.com/) for the challenge
> 
> Or just go to Youtube and search for "*sims 4 legacy challenge*"

### Usage
Link to live project: https://www.ts4legacytracker.com/

URL for backend (All endpoints require Auth0 token): https://legacy-tracker-api-production.herokuapp.com/

### Features

<table>
<tr>
<td>

#### **Dashboard**
- View/Edit the curret ruler of the current generation
- View Potential Heirs in the next generation
  - Select a potential heir as the Heir
  - If the legacy has the Heir Law of RANDOM
- Focus Tasks (used to plan your generation playthrough)
  - Any item from a category set as a focus will be shown here as a todo. 
  - Each todo can be either removed/completed
- Category Score Stats
  - For each category you can see your current score for this legacy

#### **Laws and Rules**
- Here you can view/edit your selected laws for this legacy
  - These laws effect what sims will be listed as potential heirs
- View/Edit/Delete/Add Rules
  - These have no effect in the applictaion. They serve as a reminder to you when playing the Sims.

#### **Geneology**
- Here you can view the ruler and heirs (just like the Dashboard)
- You can also view each generation and its sims
- At the top of the page you can start a new generation / begin the next generation
  - Starting a new generation:
    - This means you want to add your first Legacy Child for the next generation
    - These sims will be calculated against the laws for potential heirs
  - Init next generation:
    - This will be available when you have an heir selected
    - => It will remove the current ruler and set the heir as the ruler. This will also move the legacy towards the next generation
- For each generation table you can add new partners or a non-legacy sim. 
  - These sims have no effect on the application other than provide a nice way to keep track of your family.

#### **Categories**
These pages are the categories for the scoring of the legacy (as defined by the creators of the challenge)
- Skills
- Aspirations
- Food

#### **Profile**
- Edit your profile or delete your profile
- You can also configure what packs the legacy has active
- You can begin a new legacy. This will remove the current legacy and start a new one.

</td>
</tr>
</table>

**************************************
**************************************

## Roadmap

### Summer 2021
- Bug fixes and improvements of current features
- Age system for sims. (This is needed for more advanced laws calculations)
- More advanced automation of laws and heir selection
- Toast notifications for errors and actions
- Design improvements
- Add an end state; i.e. when legacy gets to generation 10
- Add more categories
  - Family
  - Creative
  - Fortune
  - Love
  - Nature
  - Collections
  - Popularity
  - Deviance

### Autumn 2021
- Bug fixes and improvements of current features
- Additional categories:
  - Bonus Points
  - Penalities
- Extensive user testing and improvements
- Tutorial videos and improved onboarding

### TBD
- User should be able to have multiple legacies
- Custom layout of Dashboard
- Improved Sim cards with images (i.e. user can upload images)
- Generators:
  - RNG Traits -> Get get traits for children


**************************************

## Acknowledgements

Thanks to everyone from the Technigo community for supporting me during development and giving me a platform to learn and improve my skills.

Also of course a HUGE and massive thank you to the Sims community who had already created some trackers using Excel and gave me the inspiration to do this!
- [Pinstar's tracker](https://docs.google.com/spreadsheets/d/1BL1FnW0srqcnbsw0Xy5cHaO02eFOkehIBHLg8qkIDTc/edit?usp=sharing)
- [SimGuySteve’s Legacy Challenge Scoresheet](https://www.dropbox.com/s/94s8uq2yofg26qc/Legacy%20Challenge%20Scorecard.xlsx?dl=0)
- [Becca’s Legacy Challenge Scoresheet](https://onedrive.live.com/view.aspx?resid=113A05F5302074B3!5490&app=Excel)
- [Hilliee’s Legacy Scoresheet](https://www.dropbox.com/s/up3tmvw7kljac7h/Legacy%20Challenge%20Scoresheet.xlsx?dl=0)
- [Becky’s Legacy Scoresheet](https://docs.google.com/spreadsheets/d/1zXQFKHqj63Uo1YlQOvnbotPFGmSPtK8M091uImGFp_4/edit?usp=sharing)

Last but not least a great big bow to Pinstar and Mystic the creators and maintainers of the Sims Legacy Challenge!
- https://simslegacychallenge.com/
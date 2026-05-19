# Playwright Demo

A demo I put together for Sturgeon Bay High School students to showcase some Playwright features.

## Documentation

Slide deck to accompany demo: https://docs.google.com/presentation/d/1eS-KHEqjjyi3OrPs-GLw8DzbBB5e0es8g_aReAcintE/edit?usp=sharing

Playwright docs: https://playwright.dev/docs/intro 

Test website: https://www.sturbay.k12.wi.us/schools/high/ 

## Tests

1. Check for the Daily Announcements link on the homepage
2. Check for the date input on the Daily Announcements page
3. Check that there is a birthday announcement for May 6, 2026

## Features

- Navigating to & checking URLs
- Locating DOM elements by various attributes
- Clearing and filling text inputs
- Continuing a test in a new tab
- Verifying editability and visibility of DOM elements

## How to run the tests

First step is to create a GitHub account so you can put all of your projects in the public domain!
Your GitHub portfolio is a great addition to your resume or LinkedIn profile.

1. Clone this repo to your machine
2. In your terminal, `cd` into the directory you cloned this project to.
3. Run `npm install` from the project directory to install dependencies (otherwise you can't run tests)
4. Run `npx playwright test` to run tests
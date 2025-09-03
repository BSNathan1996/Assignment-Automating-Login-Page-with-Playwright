# Assignment-Automating-Login-Page-with-Playwright

Assignment: Automating Login Page with Playwright for the website "https://practicetestautomationcom/practice-test-login/"

## Table of Contents

- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running-Tests](#running-tests)
- [Project-Structure](#project-structure)
- [Contact](#contact)

## About

An assignment repository for automating login page using Playwright. Using "https://practicetestautomationcom/practice-test-login/" as the login page URL.

## Features
    Uses Playwright with TypeScript

    Sample test cases for web UI automation

    Supports multiple browsers (Chromium, Firefox, WebKit)

    Test reporting with traces on failure

    Easy-to-extend test framework setup

## Prerequisites
Install
    Node.js (version 14 or above)
    
    Visual Studio Code (VS Code) IDE

## Installation
    1. Clone the repo:
        git clone https://github.com/BSNathan1996/Assignment-Automating-Login-Page-with-Playwright.git
        cd Assignment-Automating-Login-Page-with-Playwright

    2. Install dependencies:
        npm install

    3. Install Playwright browsers:
        npx playwright install

## Running-Tests
    - Run all tests headlessly:
        npx playwright test    
    - Run tests with headed browser:
        npx playwright test --headed
    - Run test by title:
        npx playwright test -g "Test Case"
    - Run test by title with specific project:
        npx playwright test -g "Test Case" --project=chromium
    
## Project-Structure
    ├── tests/              # Test files
    |   └── Login          # Input Module
    │       └── login-test-suite.spec.ts # test script file
    ├── auth/               # Auth files
    |   └── auth.setup.ts   # Auth setup Module
    ├── views/              # Page Object Model (Locators)
    |   └── Login
    │       └── login-views.ts # locators for Input page   
    ├── common/             # Utility folder
    |   └── base/
    |       └── base-action.ts # action class for base page and navigations
    |   └── helper.ts       # helper class to handle operations    
    ├── actions/            # Action class for all test operations
    |   └── Login/
    │       └── login-action.ts # Input page action operations
    ├── testData/           # Test Data for particular pages
    |   └── Login/
    │       └── testData-login.ts # Test Data for Input page
    ├── playwright.config.ts # Playwright configuration
    ├── package.json        # Node dependencies and scripts
    └── tsconfig.json       # TypeScript config


## Contact

Your Name - [bsnathan61@gmail.com](mailto:bsnathan61@gmail.com)  
Project Link: https://github.com/BSNathan1996/Assignment-Automating-Login-Page-with-Playwright

IT3040-ITPM: Assignment 1 - Quality Assurance & Test Automation

Project Overview
This repository contains an automated test suite for the Swift Translator (Singlish to Sinhala transliteration) application. The project evaluates the system's accuracy in converting Singlish input into Sinhala output and assesses the stability of the user interface.

The test suite consists of 35 automated scenarios:

24 Positive Functional Tests (Pos_Fun): Validating correct transliteration of daily language, mixed English terms, and complex sentence structures.

10 Negative Functional Tests (Neg_Fun): Evaluating robustness against typographical errors, missing spaces, and non-standard spellings.

1 Positive UI Test (Pos_UI): Verifying real-time output updates and usability features.

Prerequisites
Ensure the following are installed on your system before running the tests:

Node.js (v16 or higher)

npm

Playwright

Installation
Clone the Repository:

Bash

git clone <your-repository-url>
cd <registration-number-folder>
Install Dependencies:

Bash

npm install
npx playwright install
Project Structure
tests/: Contains translation.spec.js, which includes all 35 test cases.

playwright.config.js: Configuration file for browser settings, timeouts, and reporting.

package.json: Project metadata and dependency list.

Running the Tests
1. Execute All Tests
Run the full suite in headless mode:

Bash

npx playwright test
2. View HTML Report
Generate and open the detailed test execution report:

Bash

npx playwright show-report
3. Interactive UI Mode
Run tests with a visual interface to see the typing and conversion in real-time:

Bash

npx playwright test --ui
Automation Strategy
The automation utilizes Playwright's expect.poll logic to handle the asynchronous nature of the real-time transliteration.

Typing Delay: A delay of 20ms is used to trigger the conversion engine naturally.

Timeouts: Each assertion is configured with a 15,000ms timeout to account for network latency and rendering time, preventing "empty string" errors.

Submission Details
Module: IT3040 - Information Technology Project Management

Registration Number: <IT23309692>

Date: January 31, 2026

# Interview Scheduler

## Project Description
Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Features
- Create custom appointment from Monday to Friday
- Cancel, edit existing appointment
- Choosing from available slots and interviewers

## Dependencies

    - axios 0.27.2
    - classnames 2.2.6
    - normalize.css 8.0.1
    - react 16.9.0
    - react-dom 16.9.0
    - react-hooks-testing-library 0.6.0
    - react-scripts 3.0.0
    - storybook 5.0.10
    - testing-library/jest-dom 4.0.0
    - testing-library/react 8.0.7
    - node-sass npm:sass@1.49.7
    - prop-types 15.8.1
    - react-test-renderer 16.14.0

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots
List of appointments

!["List of appointments"](./docs/Created%20appointment%20and%20final%20look.png)

Catching an error if any

!["Catching an error if any"](./docs/Catching%20an%20error%20if%20any.png)

E2E testing for Appointment component using Cypress

!["E2E testing"](./docs/E2E%20appointment%20component.png)

Integreted testing for components

!["Integrated testing](./docs/Integrating%20testing%20for%20components.png)

# Getting Started with FullStack CurrencyBird-Challenge

This challenge requires to done a referrer system.
Was created using the MERN stack.

### In this challenge the requirements are:

* Backend
* Database
* FrontEnd

  - Register page

  - "Generate referrer link" page

  - "Referrer sumarry" page

  - Register page with referal link

***

## Key Topics

1. Configuration steps to run the project

   * Env Front_End Variables && Scripts

   * Env Back_End Variables && Scripts
2. Description of the routes

   * Front_End

     * Register page

     * Register page using invitation code

     * Generate invitation link

     * Referral summary page

   * Back_End

     * register ENP

     * generate referral link ENP

     * Referral summary ENP

3. mongo DB

   * Collections

***

# 1. Configuration steps to run the project

To execute the project you will need to install dependencies ,run this command in the Front_End root folder and do the same with the Back_End folder:

### `npm i`

## ENV Variables

This project uses ENV variables so you will need to follow this steps:

***

## Front End

create a file called ".env" inside the root folder "/Front_End"

you will need to create this variables:

### `REACT_APP_BACKEND_URL= <<Back End URL>>`

### `REACT_APP_FRONTEND_URL= <<Front End URL>>`

### `REACT_APP_AUTHORIZATION_API= <<Bearer token>>`

## Available Scripts

In the root of Front_End directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

***

## Back End

create a file called ".env" inside the root folder "/Back_End"

you will need to create this variables:

### `MONGO_URI= <<URI of DB>>`

### `FRONTEND_URL= <<Front End Url>`

### `MONGO_URI_TEST= <<URI of DB used to do testing>>`

## Available Scripts

In the root of Back_End directory, you can run:

### `npm start`

Runs the server in production mode mode using nodemon

### `npm run dev`

Runs the server in development mode using nodemon

### `npm test`

Launches the test runner.

# 2. Description of the routes

Here are the routes

## Front_End

### `Register page`

URL "http://localhost:3000/register"

### `Register page using invitation code`

URL "http://localhost:3000/register/invite/*<< Invitation's code >>*"

### `Generate invitation link`

URL "http://localhost:3000/referral/invitation"

### `Referral summary page`

URL "http://localhost:3000/referral/summary"

***

## Back_End

### `register ENP`

URL "http://localhost:4000/api/users" 

* Type: POST

* Uses bearer token for authorization

* Creates a user without duplicating it

* Receives the user data

### `generate referral link ENP`

URL: "http://localhost:4000/api/referral/generate-link" 

* Type: POST

* Uses bearer token for authorization

* Creates a unique invitation code and returns it

* Receives email and name from a user 

### `referrer list ENP`

URL "http://localhost:4000/api/referral/referrer-list" 

* Type: GET

* Uses bearer token for authorization

* Returns the list with the Users which successfully referred new users

# 3. mongo DB

Resume of the database model

## Collections

### `users`

* keeps the data of the users

### `referrallinks`

* keeps the data of the referral's codes and the reference to the owner's id

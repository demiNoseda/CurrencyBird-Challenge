# Getting Started with FullStack CurrencyBird-Challenge

This challenge requires to done a referrer system.
Was created using the MERN stack.

### In this challenge the requirements are:

*Backend
*Database
*FrontEnd
**Register page
**"Generate referrer link" page
**"Referrer sumarry" page
**Register page with referal link

## Key Topics

1. Configuration steps to run the project
   *Env Front_End Variables && Scripts
   *Env Back_End Variables && Scripts
2. Description of the routes
   *Front_End
   **Register page
   **Register page using invitation code
   **Generate referal invitation page
   **Referral summary page
   *Back_End
   ** register ENP
   ** generate referral link ENP
   ** Referral summary ENP
3. mongo DB
   *Collections

# 1. Configuration steps to run the project

To execute the project you will need to install dependencies ,run this command in the Front_End & Back_End root folder:

### `npm i`

## ENV Variables

This project uses dotENV variables so you will need:

## Front End

- create a file called ".env" inside the root folder "/Front_End"

you will need to create this variables:

### `REACT_APP_BACKEND_URL`

### `REACT_APP_FRONTEND_UR`

### `REACT_APP_AUTHORIZATION_API=<<Your Authorization Password>>`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Back End

create a file called ".env" inside the root folder "/Back_End"

you will need to create this variables:

### `MONGO_URI=`

- put your URI of mongoDB

### `FRONTEND_URL`

### `MONGO_URI_TEST=<<URI of DB used to do testing>>`

- put your URI of mongoDB used to do testing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in production mode mode using nodemon

### `npm run dev`

Runs the server in development mode using nodemon

### `npm test`

Launches the test runner.

# 2. Description of the routes

Here are the routes

## Front_End

###Register page

URL "http://localhost:3000/register"

###Register page using invitation code

URL "http://localhost:3000/referral/invitation/<<invitation Serial>>"

###Generate referal invitation

URL "http://localhost:3000/referral/invitation"

###Referral summary page

URL "http://localhost:3000/referral/summary"

## Back_End

### register ENP

URL "http://localhost:4000/api/users", uses bearer token for authorization

*Type POST

*Creates a user without duplicating it

### generate referral link ENP

URL: "http://localhost:4000/api/referral/generate-link", uses bearer token for authorization

*Type POST

*Creates a unique invitation code and returns it

### referrer list ENP

URL "http://localhost:4000/api/referral/referrer-list", uses bearer token for authorization

*Type GET

*Returns the list with the referrer wich

# 3. mongo DB

Resume of the database model

## Collections

### `users`

*keeps the data of the users

### `referrallinks`

*keeps the data of the referral's codes and the reference to the owner's id

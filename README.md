# 🐺 Week 3 - Backend Challenge

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select Open Preview)

<!-- **Rules for this challenge**

See RULES.md  -->
<!--
**Second opinion**

- As per Codaisseur rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com -->

#### Duration

- This challenge will end at 16.00h.

#### Passing grade

This challenge is graded in red, yellow or green. Meaning of each grade:

- 📕 Red: you haven't completed the two mandatory sections. `Fail grade`.

- 📒 Yellow: you've completed both mandatory sections. `Pass grade`.

- 📗 Green: you've completed both mandatory sections + one bonus section. `Pass with honor grade`.

🚨 **If you've completed both sections, but it's not fully functional, you might still downgrade to a red.**

#### Results feedback

Correcting this assessments takes time. Please be patient with regards to getting the results of your assessments. Results will go out the following week between Monday and Tuesday.

**How to make and submit your work**

- create a directory with the `mkdir` to start your `api`
- add git and npm to the directory with `git init` & `npm init -y`
- create your .gitignore and add `/node_modules` to its list
- go to `github.com` and:
  - create a new **`private`** repository
  - make sure **NOT** to initialize with a README/.gitignore as it will give you errors when you try to push
  - Add the evaluator to your repository as a `collaborator` (karlaevelize, swendude, and matiasgarcia91)
- add your newly created git repository as a remote to your `api`
- push the initial version of your `api`
- go to elephantSQL and create a new instance for your `database`
- create a `index.js` and start building your `api` and `database`
- **remember** to connect your local server to your remote `database` created in elephantSQL once you have added sequelize to your project

## Self Assessment part

- After you finish the challenge, go and fill up this form:
  👉 [Backend Challenge Form](https://forms.gle/47rD5FHdr5WoJ1YB7)

## Learning goals & some tips

These are the learning goals we will be testing:

- Create an express server with separate routes
- Create and run a remote PostgreSQL instance in ElephantSQL
- Create an ORM database and define relations between models using sequelize-cli
- Build a CRUD REST api
- Implement authentication and use middlewares
- Using npm to install packages, run scripts and write your own npm scripts (e.g. npm run dev)
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things this past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverlow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

**TIP: Focus on the required features first!** Before moving to the bonus sections of this challenge, focus on implementing the madatory parts, then move on to the next ones.

## What are we building?

We are building an api with an ORM managed database containing information on teams and its players.

Our api will consist of 3 routes:

- users
- houses
- characters

Each one route will contain several endpoints.

Our api will have an authentication middleware ready to be used to make routes protected. You can get this middleware from [here](https://github.com/Codaisseur/course-content-exercises/blob/master/week-5/imageboard-server/auth/middleware.js)

## Required Features

### ❗ Feature 1 - Create database models & migrations with the appropriate relations

Remember to stick to some standard when naming your models and columns! It can be any as long as you are consistent but we recommend camelCase and singular, example: `house`, `houseId`.

## Entities

### User

| Key      | Data type | required | Notes                           |
| -------- | --------- | -------- | ------------------------------- |
| id       | Integer   | Yes      | Already added by model:generate |
| name     | String    | Yes      |                                 |
| email    | string    | Yes      | Unique: true                    |
| password | string    | Yes      |                                 |

### House

| Key     | Data type | required | Notes                           |
| ------- | --------- | -------- | ------------------------------- |
| id      | Integer   | Yes      | Already added by model:generate |
| name    | String    | Yes      |                                 |
| sigil   | string    | No       |                                 |
| head    | string    | No       |                                 |
| extinct | Boolean   | Yes      |                                 |

- House has several characters (One to Many)

### Character

| Key   | Data type | required | Notes                           |
| ----- | --------- | -------- | ------------------------------- |
| id    | Integer   | Yes      | Already added by model:generate |
| name  | String    | Yes      |                                 |
| age   | Integer   | Yes      |                                 |
| alive | Boolean   | Yes      |                                 |

- Character belongs to a House

### ❗ Feature 2 - Create seed files & seed

- Seed all the entities with data

### ❗ Feature 3 - Start a server

- There's a file called index.js in your repository
- Running index.js starts an express server which listens on port 4000
- Package.json contains a script called `server`, which runs the index.js file with node

### ❗ Feature 4 - Write a few routes

- GET all houses `localhost:4000/houses`
- GET a specific house, including all its characters `localhost:4000/houses/:id`
- POST create a new character `localhost:4000/characters`
- PUT update a character age `localhost:4000/characters/:id`

## Bonus Features

### ➕ Bonus 1 - Validate POST character route

- Creating a new character (`POST - /characters`) shouldn't be possible if the client does not provide `name`, `age`,`alive`, and `houseId`, we also want to check if a house with the `houseId` provided exists. The endpoint should respond with an appropriate message and status code

### ➕ Bonus 2 - Get all characters that are alive from the house name given

- Going to `localhost:4000/characters/alive/:houseName` returns an array characters that are alive and belong to the house specified

### ➕ Bonus 3 - Create User

- POST the user info (name, email, password) to `localhost:4000/users/signup` to create a new user. Creating a user is only possible if `name`,`email`, and `password` is provided, and password is at least 6 characters long.

### ➕ Bonus 4 - User login

Use `jsonwebtoken` package and the [auth/jwt.js](https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/04-jwt) file

- POST user credentials to login (email, password)

### ➕ Bonus 5 - Delete a specific character

- DELETE a specific character by id, this route is protected by your authorization middleware

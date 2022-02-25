
# Travel Lovers

## Table of Contents
* [Description](#description)
* [Tools Used](#tools-used)
* [Installation Instructions](#installation-instructions)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Description
Travel Lovers is an application that allows a travel enthusiast to create an account to log past, upcoming, and bucket-list trips.

## Tools Used
* Heroku
* Express.js
* MySQL2
* Sequelize
* Jest
* Insomnia
* Handlebars.js
* Sass
* Bulma
* jQuery
* bcrypt

## Installation Instructions

- You do not need to install anything to run this application. Simply visit the Heroku link at the bottom of the Usage section to use the app.

- If you would like to test the app, follow the instructions in the Test section.

## Usage 
### User Story
AS A travel enthusiast </br>
I CAN visit the Travel Lovers website </br>
SO THAT I can add, edit, and delete places I have visited, plan to visit, and want to visit </br>
WHEN I visit the site for the first time </br>
THEN I am presented with the login page, which includes an account login form and account sign-up form </br>
WHEN I choose to sign up </br>
I MUST use a username, email, and password </br>
WHEN I click on the sign-up button </br>
THEN my user credentials are saved and I am logged into the site </br>
WHEN I revisit the site at a later time and choose to login </br>
THEN I am prompted to enter my email and password </br>
WHEN I am signed in to the site </br>
THEN I see navigation links for the homepage, dashboard, and logout </br>
WHEN I click on the homepage option in the navigation </br>
THEN I am taken to the homepage and presented with a welcome image </br>
WHEN I click on the dashboard option in the navigation </br>
THEN I am taken to the dashboard and presented with past, upcoming, and bucket-list trip categories via kanban board </br>
FOR EACH kanboard board category </br>
I CAN add, edit, and delete; past, upcoming, and bucket-list trips </br>
OFFERING a travel enthusiast an organized travel log

### Deployed Application
Heroku Link: https://travel--lovers.herokuapp.com/

## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Tests
1. Download Node.js and MySQL
### Node.js Installation

Make sure that you have Node.js installed on your computer by entering node -v in the command line. If successful, the command prompt will return a version number. If not, try reinstalling Node.js by following this link: https://nodejs.org/en/ and clicking on the LTS version. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### MySQL Installation

To install MySQL, visit the MySQL website in the following link: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/. Once there, look for the correct installation guide for your computer under `Table of Contents` and follow the instructions on the page. 

2. Clone the repository from GitHub
Once Node.js and MySQL are downloaded, click on the green code button in GitHub and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory.

3. Before starting the server you will need to configure the .env-example file to a .env file and put in the database name, your MySQL username, your MySQL password, and a secret for the session. The secret can be any combination of letters, numbers or special characters. If you do not make a .env file, THE CODE WILL FAIL. This is because environmental variables are set up for the database name, your MySQL username and password, and the secret session id.

4. Run `npm install` in the bash terminal to download the application dependencies

5. Log into MySQL by running `mysql -u root -p` in the command line and enter your MySQL password. 

6. Run `source db/schema.sql` to create the travel_lovers_db database. If you would prefer to have preseeded data, run `npm run seeds` instead.

7. To exit MySQL run `quit`. 

8. Then you can run `npm start` to start the server. This will run SASS and Nodemon at the same time. 


### Jest Test
* Run `npm test` to run Jest for tests on constructors
### Insomnia Routes
Insomnia was used to seed and test the routes for this app. There is no command for running these tests. 
1. To test the application, download insomnia. For more information on Insomnia, follow this link: https://docs.insomnia.rest/.

2. Run `npm run seeds` in the command-line to get preseeded data. 

3. Run `npm start` to start the server

4. Go to Insomnia and test for the route you want to test. Make sure to change the route from GET to POST, PUT, Or DELETE depending on what you want to test for. 

5. The routes will be as follows (change users to posts or comments if you would like to test those routes and change :id to the id of the route you are testing for):

#### Insomnia URL Examples
- GET (all users): http://localhost:3001/api/users 
- GET (one user): http://localhost:3001/api/users/:id
- POST: http://localhost:3001/api/users
- PUT: http://localhost:3001/api/users/1
- DELETE: http://localhost:3001/api/users/2

#### User Route Screenshots

- GET (all users): ![get-all-users](https://user-images.githubusercontent.com/91860506/155267388-758fb92a-10fa-472d-9b2d-db3bba1e585a.png)
- GET (one user): ![get-user-id](https://user-images.githubusercontent.com/91860506/155267408-b0306e94-1123-45e1-8a0f-c0673f31f69f.png)
- POST: ![post-user](https://user-images.githubusercontent.com/91860506/155267423-17beae31-ad4a-487a-ab03-cd7bed5e240d.png)
- PUT: ![put-user](https://user-images.githubusercontent.com/91860506/155267432-d3a9a5ce-c281-49cb-bc17-e45b63b07d82.png)
- DELETE: ![delete-user](https://user-images.githubusercontent.com/91860506/155267371-b4e3d96b-a48a-48ca-9d64-cdf13aab3f00.png)

#### Place Routes Screenshots

- GET (all places): ![get-all-places](https://user-images.githubusercontent.com/91860506/155267380-89507b61-a957-4bbf-9d26-a01b63cc25de.PNG)
- GET (one place): ![get-places-id](https://user-images.githubusercontent.com/91860506/155267400-19b6c594-2947-44d8-8253-2f172f3280cf.PNG) 
- POST: ![post-places](https://user-images.githubusercontent.com/91860506/155267417-29cf5a3e-2b25-4db3-bd69-7ec51e6c29d1.PNG)
- PUT: ![put-user](https://user-images.githubusercontent.com/91860506/155267432-d3a9a5ce-c281-49cb-bc17-e45b63b07d82.png)
- Delete: ![delete-places](https://user-images.githubusercontent.com/91860506/155267361-3b8631cc-fcbd-49b0-b689-45f6f9931cd4.PNG)

## Questions
If you have any questions about this projects, please contact me directly at nicnolen@gmail.com. You can view more of my projects at https://github.com/nicnolen.





# Travel Lovers

## Description
Travel Lovers is an application that allows a travel enthusiast to create an account to log past, upcoming, and bucket-list trips.

## Table of Contents
* [License](#license)
* [Toolbox](#toolbox)
* [Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Toolbox
* Heroku
* Express.js
* MySQL2
* Sequelize
* Jest
* Handlebars.js
* Sass
* Bulma
* jQuery
* bcrypt

## Usage 
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

## Tests
### Contributing to the application
* Clone the repository from GitHub
* Download Node.js and MySQL
* Run `npm install` in the bash terminal to download the application dependencies
* Log into MySQL and run `source db/schema.sql` - This will create the travel_lovers_db (database)
* Thereafter you can run `quit` to exit MySQL
* Before starting the server you will need to configure the .env file with your database username and password
* Then you can run `npm start` to start the server
* NOTE: The application has a seeds folder for testing purposes. Feel free to add more!
### Jest Test
* Run `npm test` to run Jest for tests on constructors
### Insomnia Routes
![delete-places](https://user-images.githubusercontent.com/91860506/155267361-3b8631cc-fcbd-49b0-b689-45f6f9931cd4.PNG)
![delete-user](https://user-images.githubusercontent.com/91860506/155267371-b4e3d96b-a48a-48ca-9d64-cdf13aab3f00.png)
![get-all-places](https://user-images.githubusercontent.com/91860506/155267380-89507b61-a957-4bbf-9d26-a01b63cc25de.PNG)
![get-all-users](https://user-images.githubusercontent.com/91860506/155267388-758fb92a-10fa-472d-9b2d-db3bba1e585a.png)
![get-places-id](https://user-images.githubusercontent.com/91860506/155267400-19b6c594-2947-44d8-8253-2f172f3280cf.PNG)
![get-user-id](https://user-images.githubusercontent.com/91860506/155267408-b0306e94-1123-45e1-8a0f-c0673f31f69f.png)
![post-places](https://user-images.githubusercontent.com/91860506/155267417-29cf5a3e-2b25-4db3-bd69-7ec51e6c29d1.PNG)
![post-user](https://user-images.githubusercontent.com/91860506/155267423-17beae31-ad4a-487a-ab03-cd7bed5e240d.png)
![put-user](https://user-images.githubusercontent.com/91860506/155267432-d3a9a5ce-c281-49cb-bc17-e45b63b07d82.png)
![update-places](https://user-images.githubusercontent.com/91860506/155267441-ded4a283-a411-4be6-8e67-b6e893018f64.PNG)

## Questions
If you have any questions about this projects, please contact me directly at nicnolen@gmail.com. You can view more of my projects at https://github.com/nicnolen.




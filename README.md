User Management System
Project Overview
A full-stack web application for user registration, login, and profile management. Built with Node.js, Express, MongoDB, and Mongoose.

Features
User registration with MongoDB storage

Secure user login system

User profile pages

RESTful API architecture

Responsive HTML/CSS interface

Technology Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Frontend: HTML, CSS, JavaScript

Environment: dotenv for configuration

Project Structure

WEB2Assignment3/
├── public/
│   ├── css/style.css
│   ├── regpage.html
│   ├── loginpage.html
│   └── user.html
├── server.js
├── db.js
├── package.json
├── .env
└── README.md
Installation
Clone the repository

git clone https://github.com/ValiCoder/WEB2-Task3.git
cd WEB2-Task3
Install dependencies

npm install
Configure environment
Create .env file:

MONGO_URI=mongodb://localhost:27017/userdb
PORT=3000
Start MongoDB

mongod
Run the application

npm start
Access at: http://localhost:3000

API Endpoints
Method	Endpoint	Description
GET	/	Home page
GET	/register	Registration form
POST	/register	Create new user
GET	/login	Login form
POST	/login	Authenticate user
GET	/user/:id	User profile
Database Schema
javascript
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
Application Flow
User registers at /register - data stored in MongoDB

User logs in at /login - credentials verified

Redirected to /user/:id - personal profile displayed

Security Notes
This is a learning project

For production: implement password hashing, session management, and input validation

Future Improvements
Password encryption

Email verification

Password reset functionality

User profile editing

Session management

Screenshots
See included PDF document for application screenshots and workflow documentation.

Screenshots:

<img width="982" height="226" alt="image" src="https://github.com/user-attachments/assets/bbc0a2e9-b5f8-4fed-bf83-5bcdff6396d3" />
<img width="992" height="684" alt="image" src="https://github.com/user-attachments/assets/0086c321-69f1-4a0c-8a90-6a6b8f6cbc0d" />
<img width="838" height="759" alt="image" src="https://github.com/user-attachments/assets/2b0421a5-c6ce-43b3-8bd6-e36fc4563659" />
<img width="880" height="392" alt="image" src="https://github.com/user-attachments/assets/aaad20ed-e9ba-4610-9114-cc81a24f05ff" />


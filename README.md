Express CRUD API

A simple REST API built with Node.js and Express.js that demonstrates basic CRUD operations for posts and accounts using in-memory data storage

Features
Create, Read, Update, Delete (CRUD) operations
RESTful routing
Express.js server setup
Basic controller structure

Project Structure
.
├── controller/
│   ├── postController.js
│   └── accountController.js
├── routes/
│   └── postRoutes.js
├── index.js
├── package.json

API Endpoints

Posts

GET /posts - Get all posts
GET /posts/:id - Get post by ID
POST /posts - Create post
PUT /posts/:id - Update post
DELETE /posts/:id - Delete post

Tech Stack

Node.js
Express.js

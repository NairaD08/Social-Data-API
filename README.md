# Social-Data-API

## Description

This API serves as the backend for a social media platform, allowing users to share their thoughts, react to friends' thoughts, and manage their friend lists. Built using Express.js and MongoDB, this API is designed to handle large amounts of unstructured data efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NairaD08/social-data-api.git
   Navigate to the project directory:
   cd social-data-api
   Install the required dependencies:
   npm install
   Set up your MongoDB database. You can use MongoDB Atlas or a local MongoDB instance.
   Create a .env file in the root directory and add your MongoDB URI:
   MONGODB_URI=your_mongodb_uri
   Start the server:
   npm start
   Usage
   Once the server is running, you can test the API using Insomnia or any other API client.
   ```

API Routes
Users
GET /api/users - Retrieve all users.
GET /api/users/:userId - Retrieve a single user by ID.
POST /api/users - Create a new user.
PUT /api/users/:userId - Update a user's information.
DELETE /api/users/:userId - Delete a user.
Thoughts
GET /api/thoughts - Retrieve all thoughts.
GET /api/thoughts/:thoughtId - Retrieve a single thought by ID.
POST /api/thoughts - Create a new thought.
PUT /api/thoughts/:thoughtId - Update a thought.
DELETE /api/thoughts/:thoughtId - Delete a thought.
Reactions
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought.
License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

Questions
For any questions or feedback, please contact:

GitHub: NairaD08
Email: naira.davtyan08@gmail.com

Feel free to customize the sections such as the repository link, your username, and contact information as needed. This README provides a clear overview of the project, installation instructions, usage details, and API routes, meeting the acceptance criteria you specified.

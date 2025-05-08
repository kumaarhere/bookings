<<<<<<< HEAD
# bookings
=======
# Basic Activity Booking API

A simple REST API for booking group activities.

## Features

- User Registration / Login
- Public Activity Listing
- Activity Booking (Auth Required)
- View My Bookings

## Technologies Used

- Node.js + Express.js
- MongoDB
- JWT Authentication
- bcryptjs for secure password storage

## Setup Instructions

1. Clone the repo
2. Create `.env` file with DB connection and JWT secret
3. Run `npm install`
4. Start server: `node server.js`
5. Test with provided Postman collection

## Endpoints

| Method | Route              | Protected | Description              |
|--------|--------------------|-----------|--------------------------|
| POST   | /api/auth/register | No        | Register new user        |
| POST   | /api/auth/login    | No        | Login and get JWT token  |
| GET    | /api/activities    | No        | List available activities|
| POST   | /api/bookings      | Yes       | Book an activity         |
| GET    | /api/bookings/me   | Yes       | Get current user bookings|

## Live URL (if hosted)

[https://yourapp.onrender.com ](https://yourapp.onrender.com )
>>>>>>> master

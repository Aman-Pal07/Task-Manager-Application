# TMA (Team Management Application)

## Overview
TMA (Team Management Application) is a full-stack web application designed to streamline team collaboration and management. This project includes:
- **Backend**: Built with Node.js, Express, and MongoDB, featuring secure authentication and email services.
- **Frontend**: A modern React and Next.js interface, styled with Tailwind CSS and equipped with advanced animations.

## Features
### Backend:
- User Authentication with JWT and bcrypt
- Secure Password Hashing
- Email Notifications using Nodemailer
- Integration with Handlebars for Email Templates
- Asynchronous Request Handling
- Cross-Origin Resource Sharing (CORS) support

### Frontend:
- Interactive UI built with Next.js
- Advanced animations using Framer Motion
- Responsive design with Tailwind CSS
- Real-time charts using Recharts
- Notifications with React Hot Toast

## Tech Stack
### Backend:
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Nodemailer**: Email sending service
- **JWT**: Secure token-based authentication

### Frontend:
- **React**: Component-based UI framework
- **Next.js**: Server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Recharts**: Data visualization

## Installation
### Prerequisites
- Node.js
- MongoDB

### Clone the Repository
```bash
git clone https://github.com/yourusername/TMA.git
cd TMA
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts
### Backend
- **`npm start`**: Start the backend server using Nodemon

### Frontend
- **`npm run dev`**: Start the Next.js development server
- **`npm run build`**: Build the production-ready application
- **`npm start`**: Start the production server

## Folder Structure
```
TMA
├── backend
│   ├── server.js
│   ├── models
│   ├── routes
│   ├── controllers
│   └── utils
└── client
    ├── pages
    ├── components
    ├── styles
    ├── public
    └── utils
```
---

Feel free to contribute to this project by submitting issues or pull requests. For any questions, reach out to [Email](amannathpal@gmail.com).


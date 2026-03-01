# CS 465 – Full Stack Development Portfolio Project
## Travlr Getaways Web Application

### Repository
https://github.com/Shawn910boi/CS-465

---

## Project Overview

The Travlr Getaways project is a full stack web application developed as part of Southern New Hampshire University’s CS 465 course. The application provides both a customer-facing website and an administrative single-page application (SPA) used to manage travel trip data. The final iteration includes secure authentication using JSON Web Tokens (JWT) to protect administrative functionality.

This project demonstrates frontend development, backend API design, database integration, and secure authentication practices.

---

# Architecture

### Frontend Development Comparison

This project used multiple frontend approaches:

**Express HTML**
- Server-rendered pages were used for the customer-facing website.
- Express dynamically delivered HTML views using templates.
- This approach is simple and fast for traditional web pages.

**JavaScript**
- JavaScript enhanced interactivity and handled communication between the frontend and backend APIs.
- It allowed asynchronous requests without refreshing pages.

**Single-Page Application (SPA)**
- The Angular SPA was developed for administrative features.
- Unlike Express HTML, the SPA loads once and dynamically updates content.
- This provides a smoother user experience and faster navigation.

The SPA architecture separates presentation logic from server logic, improving scalability and maintainability compared to traditional server-rendered pages.

---

### Why MongoDB (NoSQL) Was Used

The backend used MongoDB because it is a NoSQL database that stores data in flexible JSON-like documents. This structure works well with JavaScript applications because objects can move between the frontend, backend, and database without heavy transformation.

MongoDB also allows:
- Flexible schemas
- Easy scalability
- Faster development for evolving applications

---

# Functionality

### JSON vs JavaScript

JSON (JavaScript Object Notation) is a lightweight data format used to transfer data between systems, while JavaScript is a programming language.

JSON ties together frontend and backend development because:
- The backend API sends responses as JSON.
- The frontend reads and displays JSON data.
- MongoDB stores data in a JSON-like structure.

This creates a consistent data flow across the entire application.

---

### Refactoring and Reusable UI Components

During development, code was refactored multiple times to improve organization and efficiency. Examples include:

- Separating API routes into the `app_api` folder
- Moving database logic away from frontend rendering
- Implementing reusable Angular components for admin features

Benefits of reusable UI components:
- Reduced duplicate code
- Easier maintenance
- Faster feature development
- Consistent user interface design

---

# Testing

### Methods, Endpoints, and Security

API testing ensured that endpoints correctly handled HTTP methods such as:

- **GET** – Retrieve trip data
- **POST** – Create new trips
- **PUT** – Update existing trips
- **DELETE** – Remove trips

Testing was performed using tools like Postman to verify responses and confirm proper data handling.

Security added complexity because protected endpoints required authentication tokens. JSON Web Tokens (JWT) were implemented so that only authorized administrators could access or modify data. Requests without valid tokens returned authorization errors, ensuring secure access control.

---

# Reflection

### Professional Growth

This course significantly helped me progress toward my professional goal of becoming a full stack developer. I gained hands-on experience building an application from frontend interface to backend database integration.

### Skills Developed

Throughout this course, I developed and strengthened skills in:

- Node.js and Express server development
- RESTful API design
- MongoDB database integration
- Angular single-page application development
- Authentication using JWT
- Debugging and API testing
- Git and GitHub version control

These skills make me a more marketable candidate by demonstrating my ability to design, build, secure, and deploy a full stack application using modern web technologies.

---

## Technologies Used

- Node.js
- Express.js
- Angular
- MongoDB
- JavaScript
- HTML/CSS
- JSON Web Tokens (JWT)
- Git & GitHub

---

## How to Run the Project

```bash
git clone https://github.com/Shawn910boi/CS-465.git
npm install
npm start
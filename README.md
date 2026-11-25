# Employee Management System (EMS)

A web-based CRUD application built with React.js for managing employee records. Authenticated users can add, view, update, and delete employee details, with Firebase for login/session handling, Axios with JSON Server for data, Tailwind CSS for styling, and export options for Excel and PDF.

## Features
*Authentication:* Login, registration, password reset, and protected routes via Firebase.
*Employee CRUD:* Add, view, edit, and delete employee records.
*Data Export:* Export employee data to Excel and PDF.
*Responsive UI:* Styled with Tailwind CSS.

## Tech Stack
React.js (Vite), Tailwind CSS
Firebase Auth
Axios, JSON Server (src/json/db.json)

## How to Run Locally
Install dependencies:
   ```bash
   npm install

1. Start JSON Server:
npx json-server --watch src/json/db.json --port 3000

2. Start the React app:
npm run dev


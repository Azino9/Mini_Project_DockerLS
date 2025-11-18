# Fullstack Docker App

## Project Overview
This is a full-stack application that includes:
- **React Frontend**: A React-based UI for the application
- **Express Backend**: A Node.js/Express API server
- **PostgreSQL Database**: A relational database for data persistence

## Project Structure
```
fullstack-docker-app/
├── backend/
│   ├── app.js                 # Express server with PostgreSQL integration
│   ├── package.json           # Backend dependencies
│   └── Dockerfile             # Docker configuration for backend (empty for now)
├── frontend/
│   ├── package.json           # Frontend dependencies
│   ├── Dockerfile             # Docker configuration for frontend (empty for now)
│   └── src/
│       └── App.js             # Main React component
├── db-data/                   # Database volume directory
├── docker-compose.yml         # Docker Compose configuration (empty for now)
├── .env                       # Environment variables (empty for now)
└── README.md                  # This file
```

## Technologies Used
- **Frontend**: React 18.2.0
- **Backend**: Node.js with Express 4.18.2
- **Database**: PostgreSQL (pg client 8.7.3)
- **Containerization**: Docker & Docker Compose (to be configured)

## Backend Features
The Express backend (`backend/app.js`) includes:
- Connection to PostgreSQL database
- Environment variable configuration for database connection
- REST API endpoint `/api` that returns the current server time from the database

## Frontend Features
The React frontend (`frontend/src/App.js`) includes:
- Fetches data from the backend API
- Displays the message received from the Express server
- Proxy configuration to connect to the backend on port 5000

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (if running locally)
- Docker & Docker Compose (for containerized deployment)

### Local Development Setup

#### Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   - `DB_HOST`: PostgreSQL host (default: localhost)
   - `DB_USER`: Database user (default: postgres)
   - `DB_PASSWORD`: Database password (default: postgres)
   - `DB_NAME`: Database name (default: testdb)
   - `DB_PORT`: Database port (default: 5432)

4. Start the backend server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000`.

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000` and proxy API requests to the backend.

## Docker Setup
Docker configuration files (`Dockerfile` and `docker-compose.yml`) are prepared for future containerization.

## Future Enhancements
- Complete Docker configuration for all services
- Add environment variable configuration in `.env`
- Implement database migrations
- Add authentication and authorization
- Expand API endpoints
- Enhance frontend UI/UX

## Project Status
This project is currently in the initial setup phase with basic functionality implemented.

## Repository
GitHub Repository: [fullstack-docker-app](https://github.com/Azino9/Mini_Project_DockerLS)

## License
This project is for educational purposes.

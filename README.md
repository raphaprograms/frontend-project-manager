# Resources
Advanced NodeJS pt1
https://codewithpawan.medium.com/backend-interview-questions-and-answers-part-1-comprehensive-guide-to-advanced-node-js-0fb80ac99427

Advanced NodeJS pt2
https://codewithpawan.medium.com/backend-interview-questions-and-answers-part-2-comprehensive-guide-to-advanced-node-js-19b6b98ff914

Express Routes
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes

Merge Params
https://javascript.plainenglish.io/understanding-mergeparams-true-in-express-js-f94939b45d72

# Pro-Tasker Frontend

A React-based project management application with user authentication and task tracking.

## Features

- User registration and login
- Create, view, update, and delete projects
- Create, view, update, and delete tasks within projects
- Kanban-style task board (To Do, In Progress, Done)
- Protected routes for authenticated users
- Responsive design

## Tech Stack

- React 18
- TypeScript
- React Router v6
- Axios for API calls
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v18+)
- Backend API running (see backend README)

### Installation

1. Clone the repository
git clone <https://github.com/raphaprograms/frontend-project-manager>
cd frontend
2. Install dependencies
npm install
3. Create a `.env` file in the root directory

4. Start the development server
npm run devThe app will be running at `http://localhost:5173`

The API will be running at http://localhost:4000

# API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login and receive JWT |
| GET | `/api/users/logout` | Logout user |

### Projects (Protected - Requires JWT)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects for logged-in user |
| GET | `/api/projects/:projectId` | Get a single project |
| POST | `/api/projects` | Create a new project |
| PUT | `/api/projects/:projectId` | Update a project |
| DELETE | `/api/projects/:projectId` | Delete a project |

### Tasks (Protected - Requires JWT)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects/:projectId/tasks` | Get all tasks for a project |
| GET | `/api/projects/:projectId/tasks/:taskId` | Get a single task |
| POST | `/api/projects/:projectId/tasks` | Create a new task |
| PUT | `/api/projects/:projectId/tasks/:taskId` | Update a task |
| DELETE | `/api/projects/:projectId/tasks/:taskId` | Delete a task |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 4000) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `FRONTEND_URL` | Frontend URL for CORS |


# Deployment
Deployed on Render
Live URL: https://master-task-backend.onrender.com/

## Environment Variables
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend API URL |

## Deployment

Deployed on [Netlify](https://netlify.com)

Live URL: `https://rn-frontend-rtt-54.netlify.app/`

### Netlify Configuration

Set the following environment variable in Netlify dashboard:
- `VITE_BACKEND_URL` = https://master-task-backend.onrender.com

## Related

- [Backend Repository](https://master-task-backend.onrender.com)

Create a .env file in the root directory
VITE_BACKEND_URL=http://localhost:4000

Start the development server
npm run dev
The app will be running at http://localhost:5173

### Project Structure 
src/
├── clients/          # API client configuration. 
├── components/       # Reusable UI components. 
├── context/          # React Context providers. 
├── hooks/            # Custom React hooks. 
├── pages/            # Page components. 
├── types/            # TypeScript interfaces. 
├── App.tsx           # Main app with routing. 
└── main.tsx          # Entry point. 

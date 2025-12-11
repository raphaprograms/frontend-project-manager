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
git clone <repository-url>
cd frontend
```

2. Install dependencies
npm install

API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and receive JWT
GET	/api/users/logout	Logout user

Projects (Protected - Requires JWT)
Method	Endpoint	Description
GET	/api/projects	Get all projects for logged-in user
GET	/api/projects/:projectId	Get a single project
POST	/api/projects	Create a new project
PUT	/api/projects/:projectId	Update a project
DELETE	/api/projects/:projectId	Delete a project
Tasks (Protected - Requires JWT)

Method	Endpoint	Description
GET	/api/projects/:projectId/tasks	Get all tasks for a project
GET	/api/projects/:projectId/tasks/:taskId	Get a single task
POST	/api/projects/:projectId/tasks	Create a new task
PUT	/api/projects/:projectId/tasks/:taskId	Update a task
DELETE	/api/projects/:projectId/tasks/:taskId	Delete a task


Deployment
Deployed on Render
Live URL: https://master-task-backend.onrender.com/


## DeploymentDeployed on [Netlify](https://netlify.com)Live URL: `https://rn-frontend-rtt-54.netlify.app/`



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

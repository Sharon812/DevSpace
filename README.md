# DevSpace

> A developer-focused workspace for managing projects, tasks, notes, and development workflows.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-devspace.sharonp.pro-111111?style=flat-square)](https://devspace.sharonp.pro)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-111111?style=flat-square&logo=vercel)](https://vercel.com/)
[![Backend](https://img.shields.io/badge/Backend-AWS%20EC2-FF9900?style=flat-square&logo=amazon-aws)](https://aws.amazon.com/ec2/)

DevSpace is a full-stack developer workspace built to bring project planning, task management, notes, and development workflow into one focused application.

The project is being built as a production-style SaaS application, with an emphasis on clean frontend architecture, authentication, API design, authorization, responsive UI, and real deployment infrastructure.

## Why DevSpace?

While working on software projects, development work can become scattered across task lists, notes, documents, and different tools.

DevSpace is an attempt to solve that problem with a developer-oriented workspace:

```text
User
 └── Projects
      ├── Tasks
      └── Notes
```

The goal is not to recreate a large platform like Jira or Notion. Instead, DevSpace focuses on a smaller, cohesive workflow for developers:

**Plan → Build → Track → Document**

---

## Current Status

**Version:** V0.1 — Foundation / Early Access

The current release establishes the application's production foundation:

- Responsive application shell
- Dashboard foundation
- Project / task / settings navigation
- JWT-based authentication
- Register / login / logout
- Protected routes
- Persistent authentication
- Form validation and loading/error states
- Production frontend deployment
- Production backend deployment
- HTTPS API
- MongoDB Atlas integration
- Nginx reverse proxy
- PM2 process management

Feature development is continuing incrementally.

---

## Features

### Authentication

- User registration
- User login
- User logout
- JWT authentication
- HTTP-only authentication cookies
- Protected API routes
- Protected frontend routes
- Persistent authentication after refresh
- Password hashing with bcrypt
- Authentication loading and error states

### Application Shell

- Responsive sidebar navigation
- Dashboard
- Projects
- Tasks
- Settings
- User account section
- Dynamic page titles
- Global search interface
- Keyboard shortcut for search (`Ctrl + K` / `⌘ + K`)

### Coming Next

- Project CRUD
- Project status and deadlines
- Task CRUD
- Task priorities and labels
- Kanban task board
- Drag-and-drop task management
- Project-specific notes
- Project progress tracking
- Global project/task/note search
- Dashboard analytics
- Profile and account settings
- Dark mode

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- Base UI
- Lucide React
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS
- HTTP-only cookies

### Infrastructure

- AWS EC2
- Nginx
- PM2
- MongoDB Atlas
- Vercel
- HTTPS / Let's Encrypt

---

## Architecture

DevSpace follows a client/API architecture:

```text
┌───────────────────────┐
│       React App       │
│  React + TypeScript   │
└───────────┬───────────┘
            │
            │ Axios
            ▼
┌───────────────────────┐
│     Express API       │
│       Node.js         │
└───────────┬───────────┘
            │
       Auth Middleware
            │
            ▼
┌───────────────────────┐
│     Controllers       │
│      / Services       │
└───────────┬───────────┘
            │
          Mongoose
            │
            ▼
┌───────────────────────┐
│    MongoDB Atlas      │
└───────────────────────┘
```

### Frontend structure

```text
frontend/
└── src/
    ├── components/
    │   ├── ui/
    │   └── layouts/
    ├── context/
    ├── lib/
    ├── pages/
    ├── routes/
    ├── services/
    ├── App.tsx
    └── main.tsx
```

The frontend uses reusable components, Context API for authentication state, custom hooks, protected routes, and an API service layer.

### Backend structure

```text
backend/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── app.js
    └── server.js
```

The backend separates application setup from server startup and uses middleware for authentication and request handling.

---

## Authentication Flow

DevSpace uses JWT authentication with an HTTP-only cookie.

```text
Login
  ↓
Express API
  ↓
Validate credentials
  ↓
bcrypt password verification
  ↓
Generate JWT
  ↓
Set HTTP-only cookie
  ↓
Authenticated requests
  ↓
JWT middleware
  ↓
Identify current user
```

The JWT identifies the authenticated user, while resource ownership checks are used separately to determine whether that user is authorized to access a project, task, or note.

---

## Deployment

DevSpace is deployed as a real client/API application rather than being run only locally.

### Frontend

**Vercel**

`https://devspace.sharonp.pro`

### Backend

**AWS EC2**

`https://api.devspace.sharonp.pro`

The backend runs behind:

```text
Internet
   ↓
Nginx
   ↓
Node / Express
   ↓
PM2
   ↓
MongoDB Atlas
```

HTTPS is configured for the API, and the Node process is managed by PM2.

---

## Local Development

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account or local MongoDB instance
- Git

### Clone

```bash
git clone <your-repository-url>
cd DevSpace
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Never commit `.env` files or production secrets to the repository.

---

## API Foundation

The current backend includes authentication endpoints such as:

```text
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

Protected endpoints use authentication middleware to identify the current user before accessing protected resources.

---

## Roadmap

### Phase 1 — Foundation
- [x] Project setup
- [x] React + TypeScript frontend
- [x] Express backend
- [x] MongoDB connection
- [x] Authentication
- [x] Protected routes
- [x] Production deployment
- [x] Application shell
- [x] Global search UI

### Phase 2 — Core Workspace
- [ ] Projects
- [ ] Tasks
- [ ] Notes
- [ ] Project progress
- [ ] Kanban board
- [ ] Global search
- [ ] Dashboard analytics

### Phase 3 — Developer Workflow
- [ ] Activity history
- [ ] Comments
- [ ] Notifications
- [ ] File attachments
- [ ] Markdown / richer notes
- [ ] Calendar / deadlines

### Phase 4 — Collaboration
- [ ] Teams
- [ ] Project invitations
- [ ] Roles and permissions
- [ ] Real-time updates
- [ ] Shared project activity

### Future Exploration
- GitHub integration
- Repository/project linking
- Developer workflow automation
- Advanced project analytics

---

## Engineering Focus

DevSpace is also a learning project focused on building production-style engineering skills.

Areas being practiced include:

- React component architecture
- TypeScript
- Authentication and authorization
- REST API design
- MongoDB data modeling
- API error handling
- State management
- Protected routing
- Responsive UI architecture
- Drag-and-drop interfaces
- Data aggregation
- Production deployment
- Reverse proxies
- HTTPS
- Process management
- Environment configuration

The project is intentionally being developed feature-by-feature rather than building the entire product in one pass.

---

## Screenshots

Screenshots will be added as the core workspace features are completed.

Planned sections:

- Dashboard
- Project overview
- Task board
- Notes
- Global search
- Settings

---

## Author

**Sharon P.**

Junior Full-Stack / MERN Developer

- Portfolio: https://sharonp.pro
- DevSpace: https://devspace.sharonp.pro

---

## License

This project is currently intended as a portfolio and learning project.

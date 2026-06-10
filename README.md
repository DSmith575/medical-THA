> This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.

## Project Overview

- **Backend**: Express API with Prisma and PostgreSQL, exposing category and procedure data.
- **Frontend**: Vite-powered React application using TanStack Router and TanStack Table for data display.
- **Goal**: Display dataset values in a searchable, filterable, category-organized table on the homepage.

## Technology Choices

> I am using Node v24.11.1

- **Backend**
  - Node.js + Express for a small REST API, this is what I am most comfortable with at my current experience.
  - Prisma for schema-driven database access, again personal preference for comfort.
  - PostgreSQL for relational data storage
- **Frontend**
  - Vite for fast development and build performance
  - React with TanStack Router for routing
  - TanStack Table for table rendering and sorting
  - Tailwind CSS for utility-first styling, I find tailwind easier to use rather than normal CSS.  
  It does have a negative with potential code bloat.

## Installation

### Backend

1. Open a terminal in `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following values:
   ```env
   API_BASE_URL=http://localhost:3001/
   PORT=3001
   DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres"
   ```
4. Start PostgreSQL locally. Using Docker:
   ```bash
   docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres
   ```
5. Generate Prisma client, apply migrations, and seed the database:
   ```bash
   npm run generate
   npm run migrate
   npm run seed
   ```

*Optional*: View dataset has been seeded correctly.  
`npx prisma studio` || http://localhost:3001/api/categories

### Frontend

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the backend base URL:
   ```env
   VITE_API_BASE_URL=http://localhost:3001
   ```

## Running Locally

### Start the backend

In `backend/`:
```bash
npm run dev
```

### Start the frontend

In `frontend/`:
```bash
npm run dev
```

Open the frontend app at the address reported by Vite.

## API

The frontend loads data from the backend endpoint:

- `GET http://localhost:3001/api/categories`

This endpoint returns categories with nested procedures used to render the homepage table.

## Assumptions and Limitations

- The application is a demo and not built for production-grade healthcare use.
- The frontend assumes the backend is running locally on `http://localhost:3001`.
- There is no authentication, authorization, or multi-tenant support.
- Error handling is minimal and optimized for clarity over resilience.
- Some components are missing styling. (Not important)
- The dataset is loaded from one service endpoint and rendered in a single frontend route.

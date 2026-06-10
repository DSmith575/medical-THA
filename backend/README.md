> This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.

# Getting Started

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

6. Run the server:  
   ```npm run dev```

*Optional*: View dataset has been seeded correctly.  
`npx prisma studio` || http://localhost:3001/api/categories
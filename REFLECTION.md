# Reflection

## Tradeoffs

- Vite/React for the Frontend as it is what I am most comfortable with.
- Chose **TanStack Table** for flexible table rendering and row expansion support over building a custom table component.
- Used Prisma for as the ORM, this is personal preference.
- Used **custom hooks** (`useCategories`, `useFilteredCategories`, `useExpandedState`) to isolate data fetching, filtering, and UI state.
- Kept the UI single-page and data-driven to minimize complexity and meet the assessment scope.
- Opted for **simple API structure** with one endpoint to reduce backend surface area.

## What Worked Well

- The table layout and expandable rows were implemented cleanish with reusable column definitions.
- The backend and frontend were decoupled by exposing a single categories endpoint.
- Refactoring toward reusable hooks improved separation of concerns.

## What Could Be Improved

- Add unit and integration tests for frontend hooks and backend routes.
- Introduce proper loading and error UI states in the frontend.
- Add filtering or search controls directly in the table header.
- Support pagination for larger datasets.
- Add stronger validation and structured error responses in the backend.

## AI Tooling and Assistance

- Used AI guidance to shape the documentation and improve clarity.
- Relied on code generation patterns for initial table rendering, fixed details afterwards. (Errors, incorrect layout, breaking down components)
- Used AI to turn the sample dataset into a json readable format for seeding into the backend.
- Used AI 
- Verified generated files against existing repository structure.

## Assumptions

- The dataset in the backend is relatively small and can be rendered in one client-side table.
- The user environment includes Docker for PostgreSQL or an equivalent local database.
- The frontend is served from Vite in development mode.

## Next Steps

- Add explicit frontend search input and filtering controls.
- Expand the backend API with additional dataset endpoints if needed.
- Further expand the backend API with better CRUD functions.
- Harden configuration with environment validations and optional production build docs.

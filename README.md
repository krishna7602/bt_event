# BT Event Monorepo

The project is organized as two sibling folders:

- `frontend/` for the React app
- `backend/` for the Express/MongoDB API

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

## Run Backend

```bash
cd backend
npm install
npm start
```

The frontend reads site content from the backend config API at `/api/config`. The admin dashboard is available at `/admin` in the frontend app.
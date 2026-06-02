# BT Event Conference Site

This repo is now split into a React frontend and an Express/MongoDB backend.

## Frontend

The Vite app is the frontend. It reads site content from the backend config API and exposes an admin dashboard at `/admin`.

Run it with:

```bash
npm install
npm run dev
```

## Backend

The backend lives in `backend/` and serves the site config API on port `5000`.

Run it with:

```bash
cd backend
npm install
npm run dev
```

## Admin

Open `/admin`, enter the admin token, and update the conference content. The default token is `admin123` unless you override `ADMIN_PASSWORD` in the backend environment.

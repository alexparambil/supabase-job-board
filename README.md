
# Supabase Job Board

A lightweight job board built with React, Vite, and Supabase.  
Supports Google OAuth login via Supabase Auth and displays a list of mock job postings.

---

## Features

- Google login using Supabase Auth
- Light/dark theme toggle
- Filter jobs by search, location, type, and experience
- Fully responsive UI
- Powered by Vite + TailwindCSS

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- Supabase
- Vercel for deployment

---

## Live Demo

[View the deployed app on Vercel](https://your-vercel-project-url.vercel.app)

> Replace the link above with your actual Vercel deployment URL

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/alexparambil/supabase-job-board.git
cd supabase-job-board
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root and add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

> You can find these in your Supabase dashboard under Settings → API

---

### 4. Run Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Notes

- Job data is mocked and not stored in the database.
- No user table was created as data persistence was not required.
- Login state is handled client-side using Supabase session tracking.

---

## Folder Structure

```
src/
├── components/         # Reusable UI components
├── services/           # Supabase client setup
├── contexts/           # Theme context
├── App.tsx             # Main app logic with login and job board
├── main.tsx            # Entry point
├── index.css           # Tailwind and global styles
```

---

## Author

Alex Varghese
GitHub: https://github.com/alexparambil  


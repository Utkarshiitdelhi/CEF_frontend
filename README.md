## Official Website for Civil Engineering Department's Civil Engineering Forum at IIT Delhi.

This is a React + Vite project styled with TailwindCSS.

### Setup

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Production build

```bash
npm run build
npm run preview
```

### Routes

The app uses React Router for top-level navigation:

- `/` — Home (contains About, Team, Events, Alumni, Contact Us sections)
- `/competitions` — Competitions page
- `/guest-sessions` — Guest Sessions page
- `/magazine` — Magazine page

Navbar links for Competitions, Guest Sessions, and Magazine navigate to these pages. Other links (About, Team, Events, Alumni, Contact Us) link to anchored sections on the Home page.

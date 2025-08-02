# Multi Theme App

A modern theme-switchable React + TS app built using Vite, Redux Toolkit, RTK Query, and redux-persist. This app fetches and displays products, allows switching between multiple themes, layouts, supports font scaling, and features a responsive sidebar layout.

---

## Tech Stack

- Vite – fast React bundler & dev server
- React - modern SPA library
- Redux Toolkit – for state management
- RTK Query – for data fetching
- redux-persist – for state persistence
- CSS Modules – scoped styling per component

---

## Features

- Theme switching: Choose from Minimal, Dark, and Playful themes
- Font scaling: Toggle between small, medium, and large font sizes
- Responsive design: Compatible for all the screens
- Component-based: Clean, reusable, and maintainable components
- redux-persist: Persists UI preferences across reloads
- RTK Query: Efficient data fetching with caching and auto-refetch

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Raj0168/multi-theme-switcher.git
cd multi-theme-switcher
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
│
├── components/          # Reusable UI components
│   ├── header/
│   ├── footer/
│   ├── sidebar/
│   └── card/
│
├── layouts/            # layout outlet for the application
│   ├── AppLayout.tsx

├── pages/               # Route pages (Home, About, Contact)
├── redux/               # Redux Toolkit setup
│   ├── store.ts
│   ├── slices/          # Theme Slice
│   └── api/             # RTK Query API logic
├── styles/              # Global styles
├── App.tsx              # Main application wrapper
├── main.tsx             # Vite entry point
└── index.html
```

---

## Key Features Explained

### Theme Switching

Themes are applied globally by setting a `data-theme` attribute on the select option. Available themes:

- `theme1`: Minimal
- `theme2`: Dark (includes sidebar)
- `theme3`: Playful (with product cards)

Handled via Redux state and synced in `AppLayout.tsx`.

### Font Scaling

Three levels of font scaling:

- Small
- Medium
- Large

These are applied using CSS variables like `--fs-small`, `--fs-medium`, etc.

### State Persistence (redux-persist)

`redux-persist` is used to store theme and font settings between page reloads. Only relevant slices are persisted, and storage is handled via `localStorage`.

---

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview built app        |
| `npm run lint`    | Lint the codebase        |

---

## Author

Created by \Raj0168

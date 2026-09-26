# Games Catalog

Catalog of free-to-play PC and browser games from the Free-to-Play Games Database API on RapidAPI: page through the list and open a page for any game. Built in January 2022 as a learning project.

**Live demo:** [react-games-catalog.vercel.app](https://react-games-catalog.vercel.app)

## Features

- Shows the games as a grid of cards, 12 per page, each with the thumbnail, title, a Free label, the short description, the genre and a Windows or browser platform icon.
- Paginates with links to up to four pages on each side of the current one and keeps the page number in the URL (`/games/?page=3`).
- Shows skeleton cards while the list loads.
- The card image and title open the game page (`/games/:id`) with the thumbnail, a Play Now link that opens the game in a new tab, and the first screenshot as a faded background.
- `/` redirects to `/games`, and unknown paths show a not-found page with a link back to the catalog.

## Tech stack

- **Framework:** React 17, TypeScript 4
- **State:** Redux 4, Redux Thunk 2, React Redux 7
- **Data:** Axios 0.24, Free-to-Play Games Database API on RapidAPI
- **Routing:** React Router 6
- **UI:** react-content-loader 6 for the skeleton cards
- **Styling:** SCSS (Dart Sass 1), classnames, local font files
- **Tooling:** Create React App 5 with react-app-rewired 2, ESLint 8 (Airbnb config), Stylelint 14, Prettier 2
- **Hosting:** Vercel

## Getting started

Requires Node.js 16 or 18, Yarn 1 and a RapidAPI key with access to the Free-to-Play Games Database API.

```bash
git clone https://github.com/androfficial/react-games-catalog.git
cd react-games-catalog
yarn install
yarn start
```

Before `yarn start`, create a `.env` file in the project root with these variables:

| Variable | Purpose |
| --- | --- |
| `REACT_APP_RAPIDAPI_KEY` | RapidAPI key, sent in the `x-rapidapi-key` header |
| `REACT_APP_RAPIDAPI_HOST` | RapidAPI host of the Free-to-Play Games Database API, sent in the `x-rapidapi-host` header |
| `ESLINT_NO_DEV_ERRORS` | Optional Create React App setting that shows ESLint errors as warnings in development |
| `TSC_COMPILE_ON_ERROR` | Optional Create React App setting that lets the app compile despite TypeScript errors |

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server, with Stylelint checking the SCSS files |
| `yarn build` | Builds the production bundle into `build/` |

## Project structure

```text
src/
  api/         Axios instance with the RapidAPI headers, list and details requests
  assets/      SVG icons
  components/  App with the routes, game card, pagination, skeleton, not-found page
  hooks/       typed useSelector hook
  pages/       Games (catalog grid) and Game (game page)
  store/       Redux store, thunk actions and reducers for the list and the game
  styles/      SCSS: local fonts, mixins, reset, UI blocks, page styles
  types/       API data and Redux action types
```

## Notes

- The API returns the whole list in one response, so the pagination slices it in the browser, 12 games per page.
- `config-overrides.js` adds the Stylelint webpack plugin to the development build through react-app-rewired.

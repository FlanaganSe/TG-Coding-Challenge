# FE Coding Challenge

A FE web app built with React, Typescript, and one expressJs route

#### Running the server:

```zsh
cd client
npm i
npm run serve
```

#### Running the client:

Note, will fail to fetch data if server is not running on port 3000.

```zsh
cd client
npm i
npm run dev
```

#### Libraries used:

- Vite - For bootstrapping build tooling and development server
- Axios - For fetching api requests from the server
- Zustand - Global state management library (Implementation of this was overkill but the setup and strategy may be better for scaling)
- eslint - Code linting
- Prettier - Code reformatting
- Vitest - Unit testing (needs to be expanded upon, more on this below)
- TailwindCSS - CSS framework
- Typescript - Type checking

#### Extraneous Resources:

- Golf Player SVG ([Sports Line Icons on Reshot](https://www.reshot.com/free-svg-icons/item/golf-player-BTSQDUZXYH/))
- SVG to TSX ([React-SVGR](https://react-svgr.com/playground/))

#### Showcase

![](docs/desktop-complete.png)

![](docs/mobile-complete.png)

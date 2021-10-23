# Olutkerho.fi

Kaikualttiin Helsingin vaikutusvaltaisin Olutkerho

## PLEASE READ / INITIAL SETUP

#### ENSURE YOU HAVE THE FOLLOWING

- Node 14 (for Vercel purposes)
- Typescript ^4.1.2 (Project has this dependency) for React 17
- Use Typescript of this project (bottom right and change typescript version to the one in this project)
- Read section `Developing project` below

1. `yarn` to install packages
2. `yarn start` to develop

## Project structure

```
└─src
  ├── @types
        Global types
  ├── assets
        Contains images and svgs
  ├── atoms
        Base building blocks
  ├── molecules
        Building blocks for pages
  ├── organisms
        Page specific sets
  ├── pages
        Site structure
  ├── pagesWithContext
        Pages with `react-query` and other related components
  ├── providers
        App global contexts
  └── translations
        Contains translations for languages
```

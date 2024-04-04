# Stackoverflow Tags

## Project description
This project contains a list of the most and the least popular tags on Stackoverflow with post count. Users can adeptly administer their sort types and choose page count. Sort and pagination parameters are saved in the URL query. Furthermore, the project boasts a responsive design catering to mobile and desktop environments. Users can see, what kind of technologies are the most popular, and which are the least popular and decide to start to learn them. I learned, how to use MUI, React query, and Storybook. The project is created with Vite.

## Requirements
The project needs Node in [version 18+ or 20+](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (tested with 18.20).

## Used technologies
The project is based on: 
* HTML,
* CSS,
* TypeScript,
* Linter,
* React,
* React-router,
* MUI,
* React-query,
* Storybook.

## API
Tags are downloaded from [tags API desc](https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow) and [tags API asc](https://api.stackexchange.com/2.3/tags?order=asc&sort=popular&site=stackoverflow).

## Site preview
[Tags site](https://amadeuszlisiecki.github.io/tags/)

## Run local project
- Install ```npm i```
- Run ```npm start```
- Go to the browser and type localhost:5173/tags in the URL.

## Storybook
The project has designed a Storybook.
Run ```npm run storybook``` to see the use of components.
Stories are saved in the src/stories directory.

## License
The MIT License (MIT) is described in [license file](/LIICENSE.txt).

[![Build Status](https://travis-ci.com/caocmai/react-themoviedb.svg?branch=main)](https://travis-ci.org/caocmai/react-themoviedb)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/caocmai/react-themoviedb)
# React + ThemovieDB API 
This web app makes requests to [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction) and display its content using just React Components. This project is currently deployed to both [gitHub pages](https://caocmai.github.io/react-themoviedb) and on [my site](https://caothemoviedb.dev.caomai.live/#/).

## Technologies Used
- [Reactjs v17.0.1](https://reactjs.org/)
- [TravisCI](https://travis-ci.com/)
- [Docker](https://www.docker.com/)

### Run Using NPM or Yarn
To run this project make sure you have [nodejs](https://nodejs.org/en/) installed. 

To install dependencies using NPM: ```$ npm install```

To run: ```$ npm run start```

Or using yarn to run project

To install dependencies using Yarn: ```$ yarn install```

To run: ```$ yarn run start```

The project will be accessible at http://localhost:3000/

### Run Using Docker
Alternatively, you can run this project with just Docker. In order to use any Docker commands you must have [Docker](https://www.docker.com/) installed on your computer.

Build the project:

```$ docker-compose build```

Then to run that build:

```$ docker-compose up```

The project will be accessible at http://localhost:3000/

## Screenshot
![](screenshots/screenshot2.png)

## Author
- [Cao](https://www.makeschool.com/portfolio/cao-mai)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
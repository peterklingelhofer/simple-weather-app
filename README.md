## ☀️ Simple Weather App

A minimal, lightweight weather application.

## 🌤 Description

Welcome to Simple Weather App. This application provides users with current conditions and hourly forecast data, with the capacity to search by U.S. Zip Code. Users can add multiple locations to their list of stored places, to check on weather conditions for their favorite places.

## 📦 Tech Stack

**React, TypeScript, Redux, Redux-Persist**

```javascript
"dependencies": {
    "@material-ui/core": "4.11.3",
    "@reduxjs/toolkit": "1.4.0",
    "@testing-library/jest-dom": "5.11.4",
    "@testing-library/react": "11.0.2",
    "@types/fontfaceobserver": "0.0.6",
    "@types/jest": "25.1.4",
    "@types/node": "14.6.4",
    "@types/react": "17.0.0",
    "@types/react-dom": "16.9.8",
    "@types/react-redux": "7.1.9",
    "@types/react-router-dom": "5.1.5",
    "@types/react-test-renderer": "16.9.3",
    "@types/rimraf": "3.0.0",
    "@types/shelljs": "0.8.8",
    "@types/styled-components": "5.1.3",
    "@types/testing-library__jest-dom": "5.9.2",
    "@types/webpack": "4.41.22",
    "@types/webpack-env": "1.15.2",
    "chalk": "4.1.0",
    "cross-env": "7.0.2",
    "eslint-config-prettier": "6.11.0",
    "eslint-plugin-prettier": "3.1.4",
    "eslint-plugin-react-hooks": "4.1.0",
    "fontfaceobserver": "2.1.0",
    "husky": "4.2.5",
    "i18next": "19.7.0",
    "i18next-browser-languagedetector": "6.0.1",
    "i18next-scanner": "2.11.0",
    "inquirer": "7.3.3",
    "inquirer-directory": "2.2.0",
    "jest-styled-components": "7.0.3",
    "lint-staged": "10.3.0",
    "node-plop": "0.26.2",
    "plop": "2.7.4",
    "prettier": "2.1.1",
    "react": "16.13.1",
    "react-app-polyfill": "1.0.6",
    "react-dom": "16.13.1",
    "react-helmet-async": "1.0.6",
    "react-i18next": "11.7.2",
    "react-modal": "3.12.1",
    "react-redux": "7.2.1",
    "react-router-dom": "5.2.0",
    "react-scripts": "4.0.1",
    "react-test-renderer": "16.13.1",
    "redux-injectors": "1.3.0",
    "redux-persist": "6.0.0",
    "redux-saga": "1.1.3",
    "rimraf": "3.0.2",
    "sanitize.css": "12.0.1",
    "serve": "11.3.2",
    "shelljs": "0.8.4",
    "styled-components": "5.1.0",
    "stylelint": "13.7.0",
    "stylelint-config-recommended": "3.0.0",
    "stylelint-config-styled-components": "0.1.1",
    "stylelint-processor-styled-components": "1.10.0",
    "ts-node": "9.0.0",
    "typescript": "4.1.3",
    "web-vitals": "0.2.4"
  },
```

## 🔧 Installation & Start

⚠️ Using [Yarn Package Manager](https://yarnpkg.com) is recommended over `npm`.

Clone this repository, install dependencies, and start the local server.

```bash
git clone https://github.com/peterklingelhofer/simple-weather-app.git
cd simple-weather-app
yarn install
yarn start
```

## 🔖 Environment Variables

Retrieve an API key from [OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap').
After you got your API key, create a **.env** file in outermost/root directory, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.

```
REACT_APP_OPEN_WEATHER_MAP_API_KEY=YOUR_KEY
```

## 📚 Contributing

Contributing to others’ projects is an avenue to learn new software development skills and experience new technologies. The pull request is how your personal contributions will be added to the project. The following is an overview of the Git project management workflow:

Search project for contribution instructions and follow them if present.
Fork project repo from your personal Github account.
Copy the fork and clone repo onto your local machine.
Add the original repository (the you forked) as a remote called upstream.
If you created your fork a while ago be sure to pull upstream changes into your local repository.
Create a new branch to work on! Branch from develop if it exists, else from master.
Implement/fix your feature, comment your code.
Follow the code style of the project, including indentation.
If the project has included tests use them.
Add additional tests or convert existing tests as necessary.
Add or convert project documentation as needed.
Push your working branch to your forked repo on Github.
Make a pull request from your forked repo to the origin master or development branch if present.
Once your pull request is merged, pull down upstream master to your local repo and delete any additional branch(es) you may have created.
Commit messages should be written in present tense describing what the committed code does and not what you changed in the code.

## 📖 References

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap')

## 📑 License

ISC License (ISC)
Copyright 2021

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## 📇 Contact

peterklingelhofer@gmail.com

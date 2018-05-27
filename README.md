# React-Info-List

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


You can find the most recent version how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Current technologies stack:
* React
* Redux
* Semantic UI

## Instruction

In the project directory:

### `npm install`
Install all dependencies

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder.

### `serve -s build`
Run static server, should be installed serve `npm install -g serve`

## Technical requirements

Your task is to create onepage application with list of clients and their details using [React](https://reactjs.org/) and [Semantic-UI framework](https://semantic-ui.com/). Clients data are stored in 'clients.json' which will be loaded dynamicaly via XHR.

### Client list
Every item will display smaller avatar(in json there is only one avatar size, so feel free to resize it). Next to the avatar there will be clients name and job title. When user clicks on an item, it will display client's details on the right.

### Search
Above this list there will be search bar. It will search all informations, not only those showed in the clients list. Results will be displayed instead of list of clients and they will show instantly as user starts to type.

### Client's details
Pretty self-explanatory, on the left there will be full size avatar(128x128px), next to it big clients name, smaller job title and company name ("{job.title}-{job.company}") below this name. Next there will be all other clients informations like address, and contact informations.

### requirements
- [X] use Redux (any implementation) for data management
- [X] work inside git repository (commit changes as much as possible)

### will be a plus
- [X] using [Reselect](https://github.com/reduxjs/reselect)
- [ ] 100% unit test scoverage
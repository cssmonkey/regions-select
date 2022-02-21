## Project overview

This App is built using [redux-toolkit](https://redux-toolkit.js.org/) for state management and React for the UI.

The UI displays a simple stepped process which allows a user to view country information after first selecting a region and then a country.

### State management

The state comprises of a single "slice" called region. The slice is split into the following:

- actions: actions are dispatched to update state and fetch data from API
- reducer: the reducer determines the changes to state after recieving an action
- selectors: these are helpful function which return data derived from state

### UI

The UI is split into common and unique components. The common components are small reusable elements. The unique components generally comprise of the smaller common components and where integration with redux state takes place.

### Styles

SASS is used for styling following BEM naming convention. Core stlyes are set in /styles folder loosly following the [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) methodology for organisation. The core styles are where reusable sass mixins, vars and base styles are set. Component level SASS is stored alongside the react component for clear visibility.

## `Running the App`

**Ensure all dependencies are installed by runing `npm install` within the project directory**

Then run `npm run start`. This runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Other available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

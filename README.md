# ACME Panel

A customer asked us to help them to develop a [Grafana](https://grafana.com) clone. 

Grafana is a tool to monitor, create alerts and display dashboards on top of different backends (Prometheus, Influx, Graphite). 

The first user stories we want to tackle are related to alerts.

When configuring an alert, we are defining certain system conditions the backend should monitor such as CPU or Memory usage percentage.

Once those conditions are met, the backend will turn that alarm on and notify all the recipients about it.

Alarms cannot be turned off as they automatically shut down once the system status changes and the trigger conditions are not met anymore

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn storybook`

Will launch [Storybook](https://storybook.js.org/) in `localhost:6006`
 
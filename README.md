# ACME Panel

## Requirement

> A customer asked us to help them to develop a [Grafana](https://grafana.com) clone. 
> Grafana is a tool to monitor, create alarms and display dashboards on top of different backends (Prometheus, Influx, Graphite). 
> The first user stories we want to tackle are related to alarms.
> When configuring an alarm, we are defining certain system conditions the backend should monitor such as CPU or Memory usage percentage.
> Once those conditions are met, the backend will turn that alarm on and notify all the recipients about it.
> Alarms cannot be turned off as they automatically shut down once the system status changes and the trigger conditions are not met anymore

## Demo

There's live demo built and deployed automatically at [https://acme-panel.vercel.app](https://acme-panel.vercel.app)

## Conventions

* Using [Semantic Commit Messages](https://www.conventionalcommits.org/en/v1.0.0/)
* ESlint + Prettier for code formatting (@TODO post-commit hook?)

## Notes 

I choose not to use Redux now due to the simplicity of the app. Still, the state is shared between the 2 pages.

I picked MaterialUI as I'm familiar with it and is very straightforward to use. The layout is based on one of their templates called "Dashboard", with a custom dark theme.

I started following an atomic-design-like folder structuring but later decided to simply split the UI in 2 parts: `shell` and `pages`. 

Each folder inside `pages` also contains folders with the components used in that page. No component was shared between the only 2 pages this app features. 


## Running the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn storybook`

Will launch [Storybook](https://storybook.js.org/) in `localhost:6006`

### `yarn test`

Will run Jest tests
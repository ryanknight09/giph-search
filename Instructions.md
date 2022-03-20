# Geode IP Giphy Search Build, Test, and Start Instructions

## Introduction

This repository is an NX.Dev mono repo. All apps, libs, components, and tests are wired together via @nrwl generators. This ensures consistant typescript imports, low barier to entry test setup, and ofcourse, ready to go build tools.

For a quick start overview on: @nrwl [Scale your React development with Nx](https://www.youtube.com/watch?v=sNz-4PUM0k8&t=2s)

You will notice we have an apps folder that container any and all applications with there respective e2e integration test folders as well. About 20% of the applications code should live in here: routing, api data state manegement, containers etc.

Next we have lib folders. The libs folder contains the other 80% of the code base. We have a shared lib for components that can be reused by any present or future application. Also there is an app specific lib folder for code that mostly belongs to our geo-ip app. It helps to have dedicated lib folders so that our app directories stay light weight and domain specific to the app without the worry of buisness logic.

## Start Instructions

If you do not have node installed you will need to. v >= 14.0

`npm install -g nx` to globally install nx.

Make sure you have nx installed to run the project. Also cd into the geo-ip main directory and run `npm install` to bootstrap all node the dependancies.

geo-ip/ <-------------------- This is the root where we should be running all commands, do not cd any lower
├── apps/
├── libs/
├── tools/
├── workspace.json
├── nx.json
├── package.json
└── tsconfig.base.json

!!! add the API KEY to the .env file located under: geo-ip/apps/geo-ip so that the app will fetch data properly.

Run `nx serve geo-ip --port 8080` to start the development server.

Notice the start script is generic and not like the normal React scripts. This allows us to start any app regardless of the framework. Dev ops will thank us later.

## Running unit tests

Run `nx run geo-ip:test` to execute the unit tests for the geo-ip application.
Run `nx run geo-ip-ui-shared:test` to execute the unit tests for the geo-ip-ui-shared lib.
Run `nx run shared-ui-header:test` to execute the unit tests for the shared-ui-header lib.

For speed you can run `nx run-many --target test --all` to target all tests.

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e geo-ip` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Build

Run `nx build geo-ip` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects

## Improvements that should be made

An Nx workspace may seem overwhelming at first, however it is very easy to follow when you grasp the fundamentals.

> It can be hard to think in terms of apps vs libs directories and where code should live. I would spend more time on project layout within each of the directorries to get a better sense of organization.

> Testing is always a trade off for coverage vs putting out product. Given more time I will always address testing. I did not get too deep on api testing with this project as well as testing the state of data (loading, error, success). This would be something to beef up. I am mainly testing that things render in isolation, click handlers are fired with correct params, as well as integration tests to make sure what that is supposed to be on the screen is rendering on the screen.

> I love the idea of test driven development but its very tricky on the front end since you are dealing visual UI. Personally I am slow with this practice, and I choose speed over a purest mentality.

> For this challend I thought a central theme designa and configuration was a bit overkill but should be a must in any application so that changes for all button colors, h1's etc are easy to do on the fly.

> Responsive design can be improved. I would spend more time making the gif cards larger and vertically stacked on narrower windows and devices. Wire frames make this task much easier :)

> The data fetching was used with React Query. Its nice since it has built in state manegememnt via its cache, and it handles (succes, error, loading, refetch) functions vs having to write it manually. I would convert this soely over to an Apollo graphql client since the lifecycle, and external state manegemt is much more robust. Also testing is much easier and more fluent to mock with Apollo than that of other REST data source frameworks.

> Last, but certainly not least would be to improve accesibility and Google light house scores. Its often overlooked and this repo is no exception. It is an after thought for time and efficiency. I like Material UI in that they have a lot of built in aria-labels etc, to give decent coverege out of the box.

## Feedback

This was a great challenge! It covers a large chunck of front end challenges. The search debouncing is a nice touch as it is an easily overlooked and common practice.
I like that the challenge is open ended so that as a candidate I can work with what I am familiar with.

Thanks for the opportunity to write this and for your time!

-Ryan

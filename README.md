# Tabel of Content <!-- omit in toc -->

- [Preview](#preview)
- [How to build](#how-to-build)
  - [biuld sripts](#biuld-sripts)
- [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
- [todo's](#todos)
  - [bugs](#bugs)
  - [future work](#future-work)

---

# Preview

<iframe width="560" height="315" src="https://www.youtube.com/embed/gScUbiTkdR8?start=92" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# How to build

first you need

- [node](https://nodejs.org/en/) installed
- [yarn](https://classic.yarnpkg.com/en/) insatlled
- you have the [server repo](https://github.com/khali70/learning-node)
- your `mongoDB key` the DB for the server

## biuld sripts

inside the [server](https://github.com/khali70/learning-node) folder run `yarn run dev`

update the clinet dir in the [server folder](https://github.com/khali70/learning-node) package.json file

the client script

```diff
- cd ../../client/ && yarn start
+ cd ${the client folder dir} && yarn install && yarn start
```

# Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:1250](http://localhost:1250) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# todo's

- [ ] doc redux actions
- [ ] doc redux reducers
  - [ ] auth
  - [ ] comment
  - [ ] dishes
  - [ ] favorites
  - [ ] feedback
  - [ ] leadres
  - [ ] promotions
  - [ ] store
  - [ ] form

## bugs

- [ ] refresh the token
- [ ] change route animation
- [ ] add the admin panale add,del,updata dishes get users,add
- [ ] register user
- [ ] remeberme
- [ ] add date to the comments at [addCommentBtn](src/Components/switch/Menu/addCommentBtn.js)

## future work

- [x] chang the name to `addCommentBtn.js`
- [ ] add the Oauth with facebook

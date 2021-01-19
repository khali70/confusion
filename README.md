# tabel content <!-- omit in toc -->

- [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
  - [App Structure](#app-structure)
- [fixed Copmonent](#fixed-copmonent)
  - [Header](#header)
  - [Footer](#footer)
- [Dynamic Component](#dynamic-component)
  - [Home](#home)
  - [Menu](#menu)
    - [menuComponent<br>](#menucomponent)
    - [Dish Info](#dish-info)
    - [Dish Details](#dish-details)
  - [Favorites](#favorites)

---

# Available Scripts

untill now there's now scripts yet.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:1250](http://localhost:1250) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

in this app there is no test script

## App Structure

this app consit of main Componet which is `App.js` this main Componet us `React-Router` to route to other screen[home - menu - contact - favorites - aboutus]
there is fixed component [navbar - footer]<br>
`props` from `Redux`

- `fetchComments()`
- `fetchDishes()`
- `fetchPromos()`
- `fetchLeaders()`
- resetFeedForm()
- dishes
- loading
- dishErr
- comments
- commentsErr
- promotions
- promoErr
- leaders
- leadersErr
- favorites
  - dishes []
  - userid

# fixed Copmonent

## Header

the Header consist of hearder and navbar

> ### Navbar
>
> have the links for `navigation` to the other screens<br>
> have the `login button`
>
> ### Jumbotron
>
> the header for the app with `no funtionality`

## Footer

consist of 1st row > 4 col[ 3 - 5 - 4 ]<br>
the `1st col is for nav`

# Dynamic Component

## Home

in this component the `featured` dishes , chiffes displayed

## Menu

### menuComponent<br>

at `/menu` the `menucomponent` map the dishes which pass to it throw the `app.js`

### Dish Info

- at `/menu/:dishid` the `DishInfo` render the dish get the dish form `app.js` as the `ID` at match.params.dishId
- map the comment that it get form the `app.js` and render the `DishDetails.js`

### Dish Details

TODO: chang the name to `AddNewComment.js`
in this compont display btn `submit Comment` onClick open a comment modal with to feilds.<br>

```
rating , comment
```

`props`

- addcomment() from dishinfo from `redux`
- dishId form dishinfo

## Favorites

only the sigened in user can loging this page the favorites reducer fitch the state form local on reload
the `props`

-

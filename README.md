# React Form Unit Test Example
Example of unit testing React form with Jest and Enzyme

This is a simple React form unit test example. On submit, it pops up an alert that displays values from the form. Using yarn as a package manager.

Testing examples include:
- Snapshot testing on stateless component
- Testing props on stateless component
- Text input change handler testing
- Multi Select change handler testing
- Checkbox change handler testing
- Form submit event testing

## Reference
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
- [React Form](https://reactjs.org/docs/forms.html)
- [Test Utilities](https://reactjs.org/docs/test-utils.html)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

## Running Test
```bash
yarn test
```

## Starting the app
```bash
yarn start
```

## Set up
**(1) Create-react-app to create a project.**
When the project folder is already created
```bash
npx create-react-app ./
```

When the folder needs to be created at the same time
```bash
npx create-react-app my-app 
```

Instead of npx, we can also use npm or yarn as below
```bash
npm init react-app my-app
yarn create react-app my-app
```

**(2) Install modules for testing**
create-react-app uses Jest as a unit testing framework. All we need is the two extra modules below.
```bash
yarn add enzyme enzyme-adapter-react-16 --dev
yarn add react-test-renderer --dev
```

**(3) Add bootstrap**
This example uses bootstrap for styling.
```bash
yarn add bootstrap
```

To use bootstrap in the component, import the module as below.
```javascript
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
```

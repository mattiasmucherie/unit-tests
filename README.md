# Welcome to the exercise

First of all, check in the terminal where you ran `npm run test` that all tests pass

## Part 1

- Change the text `Welcome to our counter app` in Header.js to `Welcome to my counter app`.
- A darn it, our test in Header.test.js in now failing, change the variable `expectedHTML` to have the same test that is in Header.js

## Part 2

- In Header.test.js, comment out the test that says 'We just wanna debug'
- Check your terminal now when the tests rerun, you should we the test DOM
- Neat! Now you can comment out that test again, so that our terminal window look a bit cleaner :)

## Part 3

- In Header.test.js write a new test
  - Describe the test: `Header should have attribute role set to heading`
  - We want to query our h1 element and store it in to a variable
  - Then we `expect` our h1 variable to have the attribute `role` set to `heading`

Hints:

- https://testing-library.com/docs/react-testing-library/cheatsheet#queries

## Part 4

Testing with events
In Counter.js we have two buttons, one for increasing the counter and one for decreasing the counter.

- In Counter.test.js it seams like i forgot to do a test for when the `decrease` button is clicked.
- Duplicate the increase button test but query the `decrease` button instead of `increase`
- Then check so that the paragraphTag TextContent is -1 instead of 1 after fireEvent has been triggered

> Note: Do you notice that this test is a async function? This means we can await for something on the screen to happen

## Part 5

Mocking data

- In Header.jsx add a prop called title
- If props.title is set then print `{props.title}` if not show `Welcome to our counter app`

- In Header.test.js now add a new test called `Should render custom prop`
- In the test create a const called titleText that is equal to `Hello world`
- Now render `<Header />` with that title set to titleText

```jsx
const titleText = "Hello world";
const { container } = render(<Header title={titleText} />);
```

- Now check if container has your text?

Note: we will look att more mocking later on

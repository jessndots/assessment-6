### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  1. Use asynchronous callbacks with the setTimeout function.
  2. Use axios to create promises.
  3. Create an async function and the await keyword.

- What is a Promise?
  A promise is a one-time guarantee of a future value, where you can specify code to execute if the promise succeeds (resolve) and if it fails (reject).

- What are the differences between an async function and a regular function?
  Async functions always return promises, allowing JS code to act synchronous even if it isn't. Async functions use the await keyword within the function

- What is the difference between Node.js and Express.js?
  Node is a JS environment that runs server-side, can be used for web apps or scripts. Node packages up all programs used in a project and identifies problems in the code, which can be edited and debugged from within Node. 

  Express is a JS framework that works within Node, similar to Flask for python. Express provides customized components or solutions to speed up development in Node.


- What is the error-first callback pattern?
  Node callbacks follow the error-first pattern, where the callback function's first parameter should be "error", and node will handle the error if it occurs.

- What is middleware?
  Middleware is code that runs in the middle of the request / response cycle. In express, middleware functions can access the req and res objects and call the "next" function.

- What does the `next` function do?
  When the next function is called, Express finds the next route to execute. If the 'next' function is excluded, the request and response cycle will not be finished, as the code would stop running after the middleware function. Any parameter passed to the "next" function is treated by Express as an error. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

1. The code does not allow you to pass in different usernames, as the function name implies. It only gets three users - Elie, Joel, and Matt.

2. Does not handle any errors you may come across

3. Could take a while to run, since the code will not await Joel until Elie is received. This could be improved by using Promise.all or creating the promises before awaiting them.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

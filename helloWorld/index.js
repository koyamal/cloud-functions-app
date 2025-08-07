const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', (req, res) => {
  console.log('hello');
  alert('hello');
  res.send('Hello World!');
});
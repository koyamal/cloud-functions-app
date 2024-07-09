const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', (req, res) => {
  const now = new Date();
  console.log(now);
  if (now.getSeconds() > 30) {
    console.log('over 30');
  } else {
    console.log('under 30');
  }
  res.send(now);
});
const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', (req, res) => {
  const now = new Date();
  console.log(now);
  const result = [];
  if (now.getSeconds() > 30) {
    console.log('over 30');
    result.push("over 30");
  } else {
    console.log('under 30');
    result.push("under 30")
  }
  res.send(`<h1>${result[0]}</h1>`);
});
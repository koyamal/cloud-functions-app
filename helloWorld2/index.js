const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('entryPoint', (req, res) => {
  const now = new Date();
  const result = [];
  if (now.getHours() > 12) {
    console.log('over 12');
    result.push('over 12');
  } else {
    console.log('under 12');
    result.push('under 12');
  }
  res.send(`<h1 style="color: blue">${result[0]}</h1>`);
});
const core = require('@actions/core');
const github = require('@actions/github');
const newman = require('newman');

try {
    const apiKey = '?apikey=' + core.getInput('postmanApiKey');
    const options = {
        collection: 'https://api.getpostman.com/collections/' + core.getInput('collection') + apiKey,
        environment: 'https://api.getpostman.com/environments/' + core.getInput('environment') + apiKey,
    }

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(payload);

    runNewman(options)
  } catch (error) {
    core.setFailed(error.message);
  }

  function runNewman (options) {
    console.log("new");
    newman.run(options, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });
  }
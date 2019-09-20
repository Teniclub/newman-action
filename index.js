const core = require('@actions/core');
const github = require('@actions/github');
const newman = require('newman');

try {
    const options = {
        apiKey: '?apikey=' + core.getInput('postmanApiKey'),
        collection: core.getInput('collection'),
        environment: core.getInput('environment')
    }

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(payload);

    runNewman(options)
  } catch (error) {
    core.setFailed(error.message);
  }

  function runNewman (options) {
    newman.run(options).on('done', (err, summary) => {
      console.log(summary);
      if (err || summary.run.failures.length) {
        core.setFailed('Newman run failed!' + (err || ''))
      }
    })
  }
const core = require('@actions/core');
const github = require('@actions/github');
const newman = require('newman');

try {
    const nameToGreet = core.getInput('who-to-greet');
    const test = core.getInput('postmanApiKey');
    console.log("test");
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
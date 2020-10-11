const util = require('util');

const { prompt } = require('enquirer');
const ghPages = require('gh-pages');

const publishAsync = util.promisify(ghPages.publish);

const deploy = async () => {
  try {
    const response = await prompt({
      type: 'confirm',
      name: 'publish',
      message: 'Are you sure to publish to Github Pages?',
    });

    const { publish } = response;

    if (publish) {
      await publishAsync('build', { message: `docs: update ${new Date().toISOString()}` });
    }
  } catch (err) {
    console.error('Error while deploying to github pages', err);
  }
};

deploy();

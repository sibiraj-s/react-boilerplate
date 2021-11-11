const util = require('node:util');
const prompts = require('prompts');
const ghPages = require('gh-pages');
const { cyan, green, red } = require('picocolors');

const publishAsync = util.promisify(ghPages.publish);

const ghPagesOptions = {
  branch: 'gh-pages',
  message: `docs: update ${new Date().toISOString()}`,
};

const questions = [
  {
    name: 'publishDocs',
    type: 'confirm',
    message: `Do You want to publish the docs to '${cyan(ghPagesOptions.branch)}' branch?`,
  },
];

const publish = async () => {
  try {
    if (process.env.CI) {
      prompts.inject([true]);
    }

    const answers = await prompts(questions);

    if (!answers.publishDocs) {
      return;
    }

    await publishAsync('build', ghPagesOptions);
    console.log(green(`\nDocumentation published successfully to ${cyan('\'gh-pages\'')} \n`));
  } catch (err) {
    console.log(red('Unable to publish docs. Error:'), err);
    process.exit(1);
  }
};

publish();

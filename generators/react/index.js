const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'feature',
        message: 'What feature do you want?',
        choices: [
          {
            name: 'Eslint',
          },
        ],
      },
      {
        type: 'list',
        name: 'lang',
        message: 'What lang are you using?',
        choices: [
          {
            name: 'TypeScript',
          },
        ],
      },
    ]);

    if (answers.feature) {
      if (answers.lang.includes('TypeScript')) {
        this.composeWith(require.resolve('./eslint/typescript'));
      }
    }
  }
};

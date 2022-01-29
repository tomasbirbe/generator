const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: 'list',
        name: 'config',
        message: 'What config do you want?',
        choices: [
          {
            name: 'vscode',
          },
        ],
      },
    ]);

    if (answers.config.includes('vscode')) {
      this.composeWith(require.resolve('./vscode'));
    }
  }
};

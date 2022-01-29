const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async initialize() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "category",
        message: "What do you need?",
        choices: [
          {
            name: "Config",
          },
          {
            name: "React",
          },
        ],
      },
      {
        type: "list",
        name: "feature",
        message: "What feature do you want?",
        choices: [
          {
            name: "Eslint",
          },
        ],
      },
      {
        type: "list",
        name: "lang",
        message: "What lang are you using?",
        choices: [
          {
            name: "TypeScript",
          },
          {
            name: "React",
          },
        ],
      },
    ]);

    if (answers.category.includes("Config")) {
      this.composeWith(require.resolve("./config"));
    }
    if (answers.category.includes("React")) {
      this.composeWith(require.resolve("./react"));

      if (answers.feature.includes("Eslint")) {
        this.composeWith(require.resolve("./react/eslint"));

        if (answers.feature.includes("TypeScript")) {
          this.composeWith(require.resolve("./react/eslint/typescript"));
        }
      }
    }
  }
};

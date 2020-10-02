module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
      description: 'application controller logic',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'controller name please'
      }],
      actions: [{
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.jsx',
          templateFile: 'templates/index.jsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
    }]
  });
};

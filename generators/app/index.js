const Generator = require('yeoman-generator')
module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname //appname为项目生成目录名称
      }
    ])
      .then(answers => {
        // answers => {name: 'user input value'}
        this.answers = answers
      })
  }
  writing (done) {
    const templates = [
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.postcssrc.js',
      'index.html',
      'package.json',
      'README.md',
      'build/build.js',
      'build/logo.png',
      'build/check-versions.js',
      'build/utils.js',
      'build/vue-loader.conf.js',
      'build/webpack.base.conf.js',
      'build/webpack.dev.conf.js',
      'build/webpack.prod.conf.js',
      'config/dev.env.js',
      'config/index.js',
      'config/prod.env.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/router/index.js',
      'src/App.vue',
      'src/main.js',
      'static/.gitkeep'
    ]
    templates.forEach(item => {
      const tmpl = this.templatePath(item)
      const output = this.destinationPath(item)
      // const context = {title: 'Hello cheng~!', success: false}
      const context = this.answers
      console.log(context)
      this.fs.copyTpl(tmpl, output, context)
    })
  }
}

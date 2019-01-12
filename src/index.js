const pluginName = 'HelloworldPlugin';

class HelloworldPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('Hello Plugin!');
    });
  }
}

module.exports = HelloworldPlugin;
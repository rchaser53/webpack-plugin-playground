const pluginName = 'HelloworldPlugin';

class HelloworldPlugin {
  apply(compiler) {
    // for build
    compiler.hooks.run.tap(pluginName, (compiler) => {
      // console.log(compiler, compiler.context)
    });

    // for watch
    compiler.hooks.watchRun.tap(pluginName, (compiler) => {
      // console.log(compiler, compiler.context)
    });

    compiler.hooks.failed.tap(pluginName, (err) => {
      console.log('failed');
      console.error(err);
    })

    // only since second time path error
    compiler.hooks.invalid.tap(pluginName, (err) => {
      console.log('invalid');
      console.error(err);
    })

    compiler.hooks.done.tap(pluginName, (stat) => {
      const hasErrors = stat.hasErrors();
      return;
    });
  }
}


module.exports = HelloworldPlugin;

// compiler.hooks.[failedModule.tap("pluginName", (err) => {
//   console.log(123);
//   console.error(err);
// });
// compiler.hooks.failed.call(err);
// this.hooks.failedEntry.call(entry, name, err);
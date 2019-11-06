
export class ExtractArguments {
  constructor (options) {
    console.log(options)
  }

  apply (compiler) {
    compiler.hooks.normalModuleFactory.tap('ExtractArguments', (factory) => {
      factory.hooks.parser.for('javascript/auto').tap('ExtractArguments', (parser, options) => {
/*        parser.hooks.program.tap('ExtractArguments', expression => {
          console.log('!!!!!!!!!!!!===================!!!!!!!!!!!!!!!!!!')
          JSON.stringify(expression).split('TextInputComponent').length > 1 && console.log(expression);
        });*/

        parser.hooks.call.for('caalll').tap('ExtractArguments', expression => {
          console.log('!!!!!!!!!!!!===================!!!!!!!!!!!!!!!!!!')
          console.log(expression);
        });
      });
    });
  }
}

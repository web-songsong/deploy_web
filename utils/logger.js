const chalk = require('chalk')
const format = require('util').format

/**
 * Prefix.
 */

const prefix = '   deploy_auto'
const sep = chalk.gray('·')

exports.atten = () => {
  console.log(chalk.yellow('======================================================='))
}

exports.log = (...args) => {
  const msg = format.apply(format, args)
  console.log('\n     ', sep, msg)
}

exports.fatal = (...args) => {
  if (args[0] instanceof Error) args[0] = args[0].message.trim()
  const msg = format.apply(format, args)
  console.log(chalk.red(prefix, 'fatal'), sep, msg)
}

exports.success = (...args) => {
  const msg = format.apply(format, args)
  console.log(chalk.white(prefix, 'success:'), sep, msg)
}

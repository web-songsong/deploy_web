const chalk = require('chalk')
const format = require('util').format

/**
 * Prefix.
 */

const prefix = '   deploy_auto'
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 *
 * @param {String} message
 */

exports.log = function(...args) {
  const msg = format.apply(format, args)
  console.log('\n     ', sep, msg)
}

/**
 * Log an error `message` to the console and exit.
 *
 * @param {String} message
 */

exports.fatal = function(...args) {
  if (args[0] instanceof Error) args[0] = args[0].message.trim()
  const msg = format.apply(format, args)
  console.log(chalk.red(prefix, 'fatal'), sep, msg)
}

/**
 * Log a success `message` to the console and exit.
 *
 * @param {String} message
 */

exports.success = function(...args) {
  const msg = format.apply(format, args)
  console.log(chalk.white(prefix, 'success:'), sep, msg)
}

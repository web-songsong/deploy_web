const router = require('koa-router')()
const path = require('path')
const { log, success, fatal } = require('../utils/logger.js')
const exec = require('util').promisify(require('child_process').exec)
const ora = require('ora')
router.get('/deploy/:projectName', async ctx => {
  const dirHome = path.join(__dirname, `../../${ctx.params.projectName}`)
  const shellOperation = `git pull && yarn && yarn deploy`
  const spinner = ora('work').start()

  ctx.body = await exec(shellOperation, { cwd: dirHome, shell: '/bin/zsh' })
    .then(res => {
      spinner.succeed()
      success(shellOperation)
      return 'success'
    })
    .catch(err => {
      spinner.fail()
      fatal(shellOperation)
      log(`检查 ${dirHome} 文件`)
      log(`检查  ${shellOperation} 命令`)
      return 'error'
    })
})

module.exports = router

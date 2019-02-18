const router = require('koa-router')()
const path = require('path')
const { atten, log, success, fatal } = require('../utils/logger.js')
const exec = require('util').promisify(require('child_process').exec)
const ora = require('ora')
router.post('/deploy/:projectName', async ctx => {
  atten()
  if (!ctx.header['user-agent'].includes('GitHub-Hookshot')) {
    fatal('请求来源未知：\n     %s', ctx.header['user-agent'])
    return (ctx.status = 401)
  }
  const { commits } = ctx.request.body
  const dirHome = path.join(__dirname, `../../${ctx.params.projectName}`)
  const shellOperation = `git pull && yarn && yarn deploy`
  const spinner = ora('work').start()

  ctx.body = await exec(shellOperation, { cwd: dirHome, shell: '/bin/zsh' })
    .then(res => {
      spinner.succeed()
      success(shellOperation)
      return ` success : ${commits.message}  `
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

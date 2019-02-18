const Koa = require('koa')
const app = new Koa()
const router = require('./server/index.js')
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
app.use(router.routes())
app.listen(3000)

console.log('server ok!')

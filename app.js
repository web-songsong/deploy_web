const Koa = require('koa')
const app = new Koa()
const router = require('./server/index.js')
app.use(router.routes())
app.listen(6666)

console.log('server ok!')

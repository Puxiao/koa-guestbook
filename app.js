const Koa = require('koa');
const httpConfig = require('./config/config').httpConfig;
const Bodyparser = require('koa-bodyparser');
const router = require('./router/router');

const app = new Koa();

app.use(new Bodyparser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(httpConfig.port);
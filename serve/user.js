const Koa = require('koa');

const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    return ctx.response.json({code:0,msgs:doc, users:users})
});

app.listen(9093);
console.log('app started at port 9093...');
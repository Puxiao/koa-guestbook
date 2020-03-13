const KoaRouter = require('koa-router');
const db = require('../db/mysqlDB');
const path = require('path');
const render = require('art-template');
const CreateMesData = require('../model/CreateMesData');

const router = new KoaRouter();

router.get('/',async (ctx,next) => {
    let list = null;
    try {
        list = await db.getAllMes();
        list.forEach(element => {
            let date = new Date(element.time + 8*60*60*1000);//默认得到的是UTC时间，所以增加8个小时(转换为北京时间)
            element.time = date.toJSON().substr(0,19).replace('T',' ');
        });
    } catch (error) {
        list = [];
    }
    ctx.body = render(path.join(__dirname,'..','view/index.art'),{list});
    await next();
});

router.post('/addmes',async (ctx,next) => {
    ctx.request.body.ip = ctx.ip.replace('::ffff:','');//获取访客ip
    let data = CreateMesData.create(ctx.request.body);
    if(data){
        ctx.set("Access-Control-Allow-Origin","*");//允许非同域名的网页提交信息
        try {
            await db.addMes(data);
            ctx.body = '{"state":1}';
        } catch (error) {
            ctx.body = '{"state":0}';
        }
    }else{
        ctx.body = '{"state":0}';
    }
    await next();
});

router.get('/allmes',async (ctx,next) =>{
    try {
        ctx.body = await db.getAllMes();
    } catch (error) {
        ctx.body = '{}';
    }
});

module.exports = router;
# Koa - GuestBook

## 简介

使用Koa开发的一个访客留言板程序。

代码业务由以下模块组成：

- Koa：http服务框架
- koa-bodyparser：请求参数解析(本项目用到的是POST传值)
- koa-router：Koa路由
- art-template：服务器生成模板网页
- mysql：Nodejs对应mysql


## 数据库
实际数据库使用腾讯云mySQL。

数据库字段结构为：

- id：类型int、长度11、主键、自增、不可为空
- state：类型int、长度1、不可为空
- user：类型varchar、长度10、不可为空
- tel：类型bigint、长度11、可空
- title：类型varchar、长度50、不可为空
- detail：类型varchar、长度300、不可为空
- time：类型bigint、长度20，不可为空
- ip：类型varchar、长度15、不可为空


## 配置

http端口配置、数据库连接配置对应文件为：/config/config.js
你需要将相关配置修改为自己的。


## 反馈

若您在使用中发现有任何bug或建议，可反馈给我，邮箱：yangpuxiao@gmail.com

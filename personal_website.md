---
title: 个人网站的搭建
date: 2018-08-26 00:00:01
tags:
- web
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535477011975&di=94d4c3579ab340a30e1dd6e2051c2757&imgtype=0&src=http%3A%2F%2Fcdn2.hubspot.net%2Fhub%2F153377%2Ffile-1603872811-jpg%2Fkaizen.jpg%3Ft%3D1412948026141
---

> *本文记录的是个人搭建网站的思想，可能有更好的方法。欢迎吐槽。*

## 模块

* Hexo

  利用Hexo快速搭建个人博客的框架，可以选择自己喜欢的主题。

* GitHub

  将博客中.md文档利用GitHub作为存储。

* node.js

  开启一个端口用来监听git仓库中的文档变化，然后在服务器上进行自动部署。

* nginx

  在服务器上运行，配置自己想开发的端口并展示Hexo打包好的静态文件。




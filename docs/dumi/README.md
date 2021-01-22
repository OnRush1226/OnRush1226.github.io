---
title: '入门' #左侧菜单栏中显示的菜单名称/文档标题
#order: 10 #.umirc.ts文件中已经排序了，这里不再生效
nav:
  title: 'dumi' #主页导航栏显示名称
  order: 1
---

# dumi & blog init
## 1. 创建并进入文件夹
``` bash
mkdir hblog && cd hblog
```
## 2. 安装 静态站点脚手架
``` bash
npx @umijs/create-dumi-app --site
```
## 3. 安装 npm
``` bash
npm i
```
> 执行完，目录会多出一个node_modules文件夹 

## 4. 运行项目
``` bash
npx dumi dev
```
## 5. 构建及部署
``` bash
npx dumi duild
```
> 执行完，默认多出一个dist文件夹，构建产物都在里面了
---
layout: doc
title : 'Git'
---

# 一些你可能会用到的Git命令
## 用户信息
用于表明发出Git指令者的身份,你只需要设置一次
```
用户名
$ git config --global user.name "YourName"
用户邮箱
$ git config --global user.email YourEmail@example.com
```
也许你会想要在不同的项目中使用不同的用户信息,你只需要在你需要设置的项目目录下在以上操作过程中去掉 <mark> --global </mark> 选项的命令来配置
```
用户名
$ git config user.name "YourName"
用户邮箱
$ git config user.email YourEmail@example.com
```
## 查询配置
```
列出Git配置
$ git config --list
# 列出所有配置以及配置文件路径
$ git config --list --show-origin
# 查看某一项配置
$ git config <key>
```
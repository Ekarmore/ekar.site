---
layout: doc
title : 'Git'
---

# Git命令
## 用户信息
用于标记你在进行Git操作时的身份信息,你只需要设置一次便可全局使用。
```
用户名
$ git config --global user.name "YourName"
用户邮箱
$ git config --global user.email YourEmail@example.com
```
有时你会想要在不同的项目中使用不同的用户信息,你只需在想要更改用户身份的项目目录下使用去除 <code>--global</code>  选项的Git命令来配置用户信息。
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
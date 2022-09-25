---
layout: doc
title : 'Git'
prev: 'Git | Markdown'
next: 'Get Started | Markdown'
---

# package.json 指北

## package.json 是什么?
package.json是记录项目或模块包的文件,它记录了包括但不限于:项目名称、项目版本、项目描述、项目入口文件、项目依赖模块包信息、项目脚本、项目许可证书、项目贡献者等内容。当我们使用<code>npm install</code>命令时,npm便是根据package.json文件内记录的信息下载依赖。<br/>

同时,如你所见package.json是一个json格式的文件,而不是JavaScript对象。


## name
如果你想要发布一个包，<code>name</code>和<code>version</code>是十分重要和必不可少的信息,

## 仓库
你可以在目录中通过<code>git init</code>命令创建并初始化新的Git仓库,当你需要克隆一个仓库时可以使用<code>git clone `<git-repo>`</code>命令克隆你需要克隆的仓库到本地。


## 操作日志
你可以使用<code>git log</code>与<code>git diff</code>命令来查看操作日志与commit之间的差异。


## 远程协作

## 分支
每一个分支都可以被看作是独立的开发线，你可以创建一个属于自己的分支来进行开发，并且你在此分支的任何操作都不会影响远程仓库，你可以使用<code>git branch</code>命令来对分支进行查看、建立、删除、更该操作。

## 标签
在开发进行到重要的版本时你会希望标记这次的快照,标签的功能便是让你获得这样做的能力。


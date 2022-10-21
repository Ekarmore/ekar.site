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
如果你想要发布一个包，<code>name/包名</code>和<code>version/版本</code>是十分重要且必不可少的信息,它们被视为是该包完全唯一的标识符。当你的包是发布在线上供大家下载使用的,在你对包的内容进行更改时,你应该让<code>version/版本</code>与你对包的更改保持同步,而当你只是在本地环境中作为个人使用,则<code>version/版本</code>的作用并不十分重要,你可以选择不再让它和你对包的更改同步。

顾名思义,<code>name</code>是该包的名称,我们平时简称为包名,它遵守以下规则:

包名不大于214个字符,包含scoped packages的scope

包名不允许包含大写字母

包名可以被当作URL或者命令行的一个参数或文件夹的名称,因此包名应该使用URL-safe的字符进行命名

## Version

<code>version</code>与ß<code>name</code>组合成为package的唯一标识符,如果你打算发布你的包,version应该与包的更新保持同步,反之则无需同步。

## description 与 keywords

使用<code>description</code>为你的包添加说明
使用<code>keywords</code>为你的包添加关键词

<code>description</code>与<code>keywords</code>使得你的包更容易被别人发现,并且<code>description</code>与<code>keywords</code>将会显示在<code>npm search</code>列表中。

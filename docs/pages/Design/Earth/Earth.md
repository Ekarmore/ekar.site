---
layout: doc
title : 'Earth'
---
# 用Spline做一个可以互动的地球 🌍

## 展示
<div class="earthContainer">
<h1 class='text-center mt-5 mb-10'>Our beautiful and only home</h1>
 <iframe class="earth" src='https://my.spline.design/untitled-8a64435d8d1f4464359768064ccb15cb/' />
 <p class="annotation">(使用鼠标/手指拖动地球)</p>
</div>

## Spline是什么?
<p><span><a target="_blank" href="https://spline.design/">Spline</a></span>是一个轻量的、支持即时渲染的3D建模软件,它提供了许多直观且简单的方式让我们可以创造出优美的3D模型且一切都是即时渲染的,并且其中一项功能是它支持为我们构建的模型和场景绑定一系列事件并为我们的项目生成一个可以在线预览的网页并允许我们通过<code>iframe标签</code>让它显示在我们需要的位置,在本篇文章里,我要做的是通过以上方式将一个可互动的地球模型嵌入到本页面中,这个过程包含建模、添加事件以及配置部署。</p>

## 创建Spline项目

Spline可以运行在<a href='https://spline.design/#download' target="_blank">Windows/macOs/Linux</a>中,也可以允许在<a target="_blank" href='https://app.spline.design/signin'>浏览器</a>环境当中,它们都是一样的。<br/>
现在,我假设你已经注册完账号登入并进入Spline的主界面,接下来选择New File 创建一个Spline项目并进入编辑界面。<br/>
当然,也许你会需要 <a href='https://cn.spline.design/' target='_blank'>中文版的Spline</a>


<style>
#操作{
@apply text-red-200 mt-20
}
hr{
@apply mt-20
}
h2{
@apply mt-20
}

</style>
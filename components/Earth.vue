<template>

<!-- <p class="e-title">Our beautiful and only home .</p>  -->
    <main class="earthContainer">
     <iframe class="earth" src='https://my.spline.design/untitled-8a64435d8d1f4464359768064ccb15cb/' />
     <p class="annotation">(使用手指拖动地球)</p>
     <p class="s-title">Spline</p>
     <hr class="s-hr"/>
     <p class="s-text"><span><a href="">Spline</a></span>是一个轻量级的3D即时渲染软件,它提供了许多便捷的功能</p>
    </main>
</template>

<script>
export default {};
</script>

<style>
.annotation{
@apply text-center mt-5 text-sm opacity-60
}
.s-title{
 @apply  font-bold text-3xl mt-10
}
.s-hr{
 @apply opacity-30 mt-5 mb-5
}
.s-text{
 @apply  text-sm md:text-lg mb-20 
}
</style>

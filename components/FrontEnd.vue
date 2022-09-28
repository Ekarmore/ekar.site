<template>
    <section class="des-container">
        <p class="des-title">Front End .</p>
        <hr class="des-hr">
    <p class="des-title-year">2022</p>
    <div class="des-catalog">
      <a class="des-link" href="/pages/FrontEnd/website/website">📝 一个简单的开始</a>  
      <a class="des-link" href="/pages/FrontEnd/Git/Git">📏 px? pt? em? rem?</a>
      <a class="des-link" href="/pages/FrontEnd/Git/Git">📇 一些你可能会用到的Git命令</a>
      <a class="des-link" href="/pages/FrontEnd/Git/Git">🌱 macOs环境下配置mongoDB</a>
      <a class="des-link" href="/pages/FrontEnd/Git/Git">🪄 重新装修你的zsh</a>
      <a class="des-link" href="/pages/FrontEnd/package-json/package-json">📦 package.json 指北</a>  
    </div>
    <p class="fe-footer">Copyright © 2022-present Ekar</p>
    </section>
    
</template>
    
<script>
export default {};
</script>
    
    <style>
 .des-title {
  @apply text-4xl xl:text-5xl  mx-auto mt-10 font-bold;
}
.des-hr {
  @apply w-full mt-10;
}
.des-title-year {
  @apply text-3xl xl:text-3xl  mt-10  font-extrabold;
}
.des-link {
  @apply  mt-5 xl:text-lg opacity-80 hover:opacity-100  border-l border-gray-400 border-opacity-40 p-1 pl-3 xl:mt-5 hover:border-opacity-100  duration-500 ease-in-out
}
.des-menu {
  @apply w-36 mx-auto mt-10  flex flex-col-reverse   items-center justify-center h-96 ;
}
.des-catalog {
  @apply flex justify-between  mx-auto mt-5 xl:mt-10 flex-col-reverse;
}
.des-container {
  @apply w-4/5 xl:w-2/5 mx-auto ;
}
    </style>
    
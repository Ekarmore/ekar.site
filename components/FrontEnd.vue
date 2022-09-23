<template>
    <section class="des-container">
        <p class="des-title">Front End .</p>
        <hr class="des-hr">
    <p class="des-title-year">2022</p>
    <div class="des-catalog">
        <a class="des-link" href="/pages/Git/Git.html">一些你可能会用到的Git命令 📇</a>
    </div>
    </section>
    
</template>
    
    <script>
export default {};
</script>
    
    <style>
    .des-title {
        @apply text-5xl  mx-auto mt-10  font-extrabold
    }
    .des-hr{
    @apply w-full mt-10  
    }
    .des-title-year {
     @apply text-3xl  mt-10  font-extrabold
    }
    .des-link{
    @apply   text-lg  border-l border-gray-400 border-opacity-40 p-1 pl-3 mt-5 hover:border-opacity-100 duration-500 ease-in-out 
    }
   .des-menu{
    @apply  w-36 mx-auto mt-10  flex flex-col-reverse   items-center justify-center h-96 bg-red-200
    }
    .des-catalog{
    @apply flex justify-between  mx-auto  flex-col-reverse
    }
    .des-container{
     @apply xl:w-2/5 mx-auto 
    }
    </style>
    
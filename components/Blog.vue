<template>

  <div class="">
    <div class="catalog flex justify-center flex-wrap justify-items-center w-4/5 mx-auto mt-10">
      <div class="piccard">
        <a class="" href="">
          <p class="textcard hover:text-red-600">Anything</p>
          <img class="imgcard" src="/01.png" alt="">
        </a>
      </div>

      <div class="piccard">
        <a class="" href="">
          <p class="textcard hover:text-red-600">Anything</p>
          <img class="imgcard" src="/01.png" alt="">
        </a>
      </div>

      <div class="piccard">
        <a class="" href="">
          <p class="textcard hover:text-red-600">Anything</p>
          <img class="imgcard" src="/01.png" alt="">
        </a>
      </div>
      <div class="piccard">
        <a class="" href="">
          <p class="textcard hover:text-red-600">Anything</p>
          <img class="imgcard" src="/01.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.piccard {
  margin: 10px 10px 10px 10px;
  position: relative;

}

.textcard {
  color: white;
  position: absolute;
  font-size: 48px;
  top: 50%;
  left: 50%;
  margin-top: -24px;
  margin-left: -96px;
}

.imgcard {
  width: 400px;
}
</style>
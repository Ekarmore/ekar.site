<script>
import { onMounted } from 'vue';

export default {

setup(){

const body = document.querySelector("body");
const element = document.getElementById("g-pointer-1");
const element2 = document.getElementById("g-pointer-2");
const halfAlementWidth = element.offsetWidth / 2;
const halfAlementWidth2 = element2.offsetWidth / 2;

onMounted(
function setPosition(x, y) { 
    element.style.transform  = `translate(${x - halfAlementWidth}px, ${y - halfAlementWidth}px)`;       element2.style.transform  = `translate(${x - halfAlementWidth2}px, ${y - halfAlementWidth2}px)`;
},

body.addEventListener('mousemove', (e) => {
  window.requestAnimationFrame(function(){
    setPosition(e.clientX, e.clientY);
  });
})

)



return {
setPosition,
body,
element,
element2,
halfAlementWidth,
halfAlementWidth2,
}

}



}
</script>


<template>
<div id="g-pointer-1"></div>
<div id="g-pointer-2"></div>
</template>


<style>
body {
  cursor: none;
}
#g-pointer-1,
#g-pointer-2
{
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  background: #999;
  border-radius: 50%;
  background-color: #fff;
  mix-blend-mode: exclusion;
  z-index: 1;
}
#g-pointer-2 {
  width: 42px;
  height: 42px;
  background: #222;
  transition: .2s ease-out;
}
</style>
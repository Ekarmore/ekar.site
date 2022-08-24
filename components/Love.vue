<template>
  <div class="pt-10 pb-20 m-5 rounded-xl border-dashed border">
    <div class="w-auto p-5 mx-auto">
      <p class="animate-bounce text-4xl text-center p-10">❤️</p>
      <p class="text-2xl mb-5 font-bold">
        Hi甜心,<span v-show="getDates.getHours >= 19">晚上好</span
        ><span v-show="12 < getDates.getHours && getDates.getHours < 19"
          >下午好</span
        ><span v-show="6 < getDates.getHours && getDates.getHours < 12"
          >上午好</span
        ><span v-show="0 <= getDates.getHours && getDates.getHours < 6"
          >凌晨好</span
        >呀
      </p>
      <p class="mt-2 text-base">
        现在是<span class="font-bold leading-loose"
          >{{ getDates.getYear }}年{{ getDates.getMonth }}月{{
            getDates.getDate
          }}日{{ getDates.getHours }}时{{ getDates.getMinute }}分{{
            getDates.getSeconds
          }}秒<br />
        </span>
        这意味着我们已经一起走过了:
        <span class="font-bold"
          >{{ getDates.DisYear }}年又{{ getDates.DisMonth }}个月{{
            getDates.DisDay
          }}天{{ getDates.DisHours }}小时{{ getDates.DisMinute }}分{{
            getDates.DisSeconds
          }}秒</span
        >,也就是<span class="font-bold">{{ getDates.Diisday }}</span
        >天!
      </p>
      <p>我</p>
    </div>
  </div>
  <!-- / // -->
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    let themee = ref("深色");
    let name = ref("吐鲁番");
    let theme = ref(null);
    let getDates = reactive({
      getYear: 0,
      getMonth: 0,
      getDate: 0,
      getHours: 0,
      getMinute: 0,
      getSeconds: 0,
      getDateDistance: 0,
      getNow: 0,
      getBegin: 1592320658000,

      DisYear: 0,
      DisMonth: 0,
      DisDay: 0,
      DisHours: 0,
      DisMinute: 0,
      DisSeconds: 0,
      Diisday: 0,
    });
    let job = ref({
      type: "前端",
      salary: "40K",
    });
    function changeInfo() {
      name.value = "李四";
      job.value.type = "后端";
      job.value.salary = "10K";
    }
    function changeDrak() {
      if (theme.value === null) {
        theme.value = darkTheme;
        themee.value = "浅色";
      } else {
        theme.value = null;
        themee.value = "深色";
      }
    }
    setInterval(() => {
      // 获取时间
      getDates.getYear = new Date().getFullYear();
      getDates.getMonth = new Date().getMonth() + 1;
      getDates.getSeconds = new Date().getSeconds();
      getDates.getDate = new Date().getDate();
      getDates.getHours = new Date().getHours();
      getDates.getMinute = new Date().getMinutes();
      getDates.getNow = new Date();
      //计算时间戳差（两个日期之间的毫秒数差）
      getDates.getDateDistance = getDates.getNow.getTime() - getDates.getBegin;
      //计算年差 经过（毫秒数差/1000转化为秒/3600转化为小时/24转化为天/30转化为月/12转化为年）计算得到值使用parsInt()方法取整
      getDates.DisYear = parseInt(
        getDates.getDateDistance / (24 * 1000 * 3600 * 30 * 12)
      );
      //计算方法
      let gap = getDates.getDateDistance % (24 * 1000 * 3600 * 30 * 12);
      getDates.DisMonth = parseInt(gap / (1000 * 3600 * 24 * 30));
      let gap2 = gap % (1000 * 3600 * 24 * 30);
      getDates.DisDay = parseInt(gap2 / (1000 * 3600 * 24)) - 10;
      getDates.Diisday = Math.ceil(
        getDates.getDateDistance / (24 * 1000 * 3600)
      );
      let gap3 = gap2 % (1000 * 3600 * 24);
      getDates.DisHours = parseInt(gap3 / (1000 * 3600));
      let gap4 = gap3 % (1000 * 3600);
      getDates.DisMinute = parseInt(gap4 / (1000 * 60));
      getDates.DisSeconds = parseInt((gap4 % (1000 * 60)) / 1000);
    }, 1000);

    return {
      name,
      changeInfo,
      job,
      changeDrak,
      themee,
      getDates,
    };
  },
};
</script>

<style scoped>
.btn {
  @apply float-right mt-3 mr-5;
}

.head-text {
  @apply inline-block mt-3 ml-5 text-xl;
}

.nheader {
  @apply flex-1;
}
</style>

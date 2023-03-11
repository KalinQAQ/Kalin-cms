<template>
  <div class="overview">
    <my-card title="关于">
      <div class="c-left">
        本项目是基于 Vue3、Vuex、VueRouter、ElementPlus、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </my-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCard from '@/base-ui/card'

export default defineComponent({
  components: {
    MyCard
  },
  name: 'overview',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

<template>
  普通下拉框
  <a-select :options="optionsArr"></a-select>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const optionsArr = ref<any[]>([])

const getRemotData = () => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          key: 1,
          value: '苹果',
          name: 1,
        },
        {
          key: 2,
          value: '香蕉',
          name: 2,
        },
        {
          key: 3,
          value: '橘子',
          name: 3,
        },
      ]);
    }, 3000);
  })
}

onMounted(() => {
  getRemotData()
    .then(data => {
      optionsArr.value = data
    })
})
</script>

<style>
.ant-select {
  width: 200px;
}
</style>
<template>
  <a-select :loading="optLoading" :options="optionsArr"></a-select>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const optLoading = ref(false)
const optionsArr = ref<any[]>([])

const getRemotData = () => {
  return new Promise<any[]>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.5) {
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
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 3000);
  })
}

const initSelect = () => {
  optLoading.value = true
  getRemotData()
    .then(data => {
      optionsArr.value = data
    })
    .catch(err => {
      optionsArr.value = [
        {
          key: -1,
          value: -1,
          disabled: true,
          label: err.message
        }
      ]
    })
    .finally(() => {
      optLoading.value = false
    })
}

onMounted(() => {
  initSelect()
})
</script>

<style>
.ant-select {
  width: 200px;
}
</style>
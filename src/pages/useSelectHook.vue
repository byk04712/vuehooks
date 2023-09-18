<template>
  <a-select v-bind="selectBind"></a-select>
</template>

<script setup lang="ts">
import { useFetchSelect } from '../hooks/useSelect'

const getRemoteData = () => {
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
        ])
      } else {
        reject(new Error('不小心出错了！'))
      }
    }, 3000)
  })
}

const selectBind = useFetchSelect({
  apiFun: getRemoteData
})
</script>

<style>
.ant-select {
  width: 200px;
}
</style>
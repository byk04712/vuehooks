<template>
  <div>
    <p>width: {{ width }}</p>
    <p>height: {{ height }}</p>
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from '../hooks/useWindowResize'
import { useNetworkStatus } from '../hooks/useNetworkStatus'

const { width, height } = useWindowResize()

// 需要断开Wi-Fi连接即可查看控制台输出
useNetworkStatus((status) => {
  console.log('当前联网状态', status)
})
</script>
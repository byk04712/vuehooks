<template>
  <div class="col">
    <SkeletonView
      v-slot="{ result }"
      v-ehb="view"
    >
      <p>接口返回结果: {{ result }}</p>
      <p>获取指定字段: {{ view.getField('data') }}</p>
    </SkeletonView>
  </div>
</template>

<script setup lang="ts">
import SkeletonView from '../components/SkeletonView/index.vue'
import { useAutoSkeletonView } from '../components/SkeletonView/useAutoSkeletonView'
import { listApi } from '../api'

const view = useAutoSkeletonView({
  apiFun: listApi,
  defaultStatus: 'success',
  immediateInMount: false
})
</script>
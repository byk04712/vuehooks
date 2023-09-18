<template>
  <div class="col">
    <SkeletonView
      v-slot="{ result }"
      v-on="bindEvents"
      v-bind="bindProps"
    >
      <p>接口返回结果: {{ result }}</p>
      <p>获取指定字段: {{ getField('data') }}</p>
    </SkeletonView>
  </div>
</template>

<script setup lang="ts">
import SkeletonView from '../components/SkeletonView/index.vue'
import { useAutoSkeletonView } from '../components/SkeletonView/useAutoSkeletonView'
import { listApi } from '../api'

const {
  // execute,
  // result,
  // retry,
  // loading,
  // status,
  getField,
  bindProps,
  bindEvents
} = useAutoSkeletonView({
  apiFun: listApi,
  defaultStatus: 'success',
  immediateInMount: false
})
</script>
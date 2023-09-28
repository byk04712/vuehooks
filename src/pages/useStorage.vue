<template>
  <div>
    刷新后输入框的值还在
    <input type="text" v-model="name">
  </div>
</template>
<script setup lang="ts">
import { computed, unref } from 'vue'
import { useStorage } from '../hooks/useStorage'

const [value, setValue] = useStorage('name')

const name = computed({
  get() {
    return unref(value)
  },
  set(val) {
    setValue(val)
  }
})
</script>
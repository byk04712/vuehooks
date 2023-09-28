<template>
  <input type="text" v-model="text" />
  <button @click="handleCopy">复制</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'

const copyToClipboard = useCopyToClipboard()

const text = ref('')

const handleCopy = () => {
  copyToClipboard(text.value)
  alert('复制成功, 去黏贴看看吧')
}
</script>
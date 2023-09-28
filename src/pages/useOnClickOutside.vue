<template>
  <div>
    你好, 我是内容
    <a-button @click="openDialog">弹窗</a-button>

    <div ref="boxRef" class="box"></div>
    
    <p v-for="i in 30">我是占位</p>
    
    <a-modal ref="modalRef" v-model:open="visible">
      我是弹窗内容
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { useScrollToBottom } from '../hooks/useScrollToBottom'

const visible = ref(false)
const modalRef = ref()
const boxRef = ref()

useOnClickOutside(boxRef, () => {
  console.log('div click outside')
})

/* NG */
useOnClickOutside(modalRef, () => {
  console.log('modal click outside')
})

useScrollToBottom(() => {
  console.log('滚动到底部')
})

const openDialog = () => {
  visible.value = true
}
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  background-color: #ccc;
}
</style>
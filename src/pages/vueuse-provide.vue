<template>

    <h1>你好</h1>
    <ul>
      <li>count: {{ count }}</li>
      <li>double: {{ double }}</li>
    </ul>
    <button @click="increment">Increment</button>

</template>

<script setup lang="ts">
// VueUse 是怎么封装Vue3 Provide/Inject 的?
import { useCounterStore, useProvideCounterStore } from '../hooks/useCounterStore'

// 注入
useProvideCounterStore(200)

// 使用
const { count, double, increment } = useCounterStore()!
</script>
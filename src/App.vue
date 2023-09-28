<template>
  <a-layout>
    <a-layout-header>
      <a-radio-group v-model:value="theme" button-style="solid">
        <a-radio-button value="dark">深色主题</a-radio-button>
        <a-radio-button value="default">默认主题</a-radio-button>
      </a-radio-group>
    </a-layout-header>
    <a-layout-content>
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" ></component>
        </KeepAlive>
      </RouterView>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, effect } from 'vue'
import { useTheme } from './hooks/useTheme'

const changeTheme = useTheme('theme')

const theme = ref('default')

effect(() => {
  changeTheme(theme.value)
})
</script>
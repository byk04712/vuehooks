<template>
  <a-button :disabled="loading" :loading="loading" @click="handleSubmit">Submit</a-button>

  <hr>


  <a-space>
    <a-button :loading="commonLoading" type="primary" @click="onSubmit">提交</a-button>
    <a-button :loading="commonLoading" @click="onCancel">取消</a-button>
  </a-space>
</template>

<script setup lang="ts">
import { useAutoRequest } from '../hooks/useAutoRequest'
import { useAutoLoading } from '../hooks/useAutoLoading'
import { submitApi, cancelApi } from '../api'

// const [loading, submit] = useAutoRequest(submitApi, {
//   loading: false,
//   onSuccess: (res) => {
//     console.log('onSuccess', res)
//   }
// })
const [loading, submit] = useAutoRequest(submitApi)

const handleSubmit = () => {
  submit('aaa')
    .then(res => {
      console.log('submit success', res)
    })
}








const [commonLoading, fetch] = useAutoLoading()
const onSubmit = () => {
  fetch(submitApi('submit'))
    .then(res => {
      console.log('submit res', res)
    })
}

const onCancel = () => {
  fetch(cancelApi('cancel'))
    .then(res => {
      console.log('cancel res', res)
    })
}
</script>
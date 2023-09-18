<!-- 
  骨架屏组件

  在骨架屏组件中，我是用传入的res对象的code属性来判断当前显示的视图状态。长话短说就是， res是接口返回给前端的数据，如
  {
    "code":0,
    "msg":'查询成功',
    "data":{
        "username":"小王",
        "age":20,
    }
  }

  我们假定当code为0时代表成功，不为0表示失败，为-100时表示正在加载，
  当然接口并不会也不需要返回-100，-100是我们本地捏造出来的，只是为了让骨架屏组件显示对应的加载状态。
  在页面中使用时，我们需要先声明一个code为-100的res对象绑定给骨架屏组件，然后在onMounted中调用查询接口，调用成功后更新res对象。

  如果像上面这样使用res对象来给骨架屏组件设置状态的话，就感觉非常的麻烦，
  有时候我们只是要设置一个初始时的加载状态，但是要搞好几行没用的代码，
  但是如果我们把res拆解成一个个参数单独传递的话，父组件需要维护的变量就会非常多了，
  这时我们就可以封装hook来解决这个问题，把拆解出来的参数都扔到hook里面保存。
 -->
<template>
  <div v-if="viewStatus === 'empty'" key="empty" class="empty_view flex-col">
    <span>{{ emptyMsg }}</span>
    <a-button type="default" @click="retryClick">重试</a-button>
  </div>

  <div v-else-if="viewStatus === 'error'" key="error" class="empty_view flex-col">
    <span>{{ errorMsg }}</span>
    <a-button type="default" @click="retryClick">重试</a-button>
  </div>

  <div v-else key="loadingOrContent" :class="[
    placeholderData && viewStatus === 'loading' ? 'skeleton-view-empty-view' : 'skeleton-view-default-view'
  ]"></div>

  <div v-if="viewStatus === 'loading' && !placeholderData" class="loading-center">
    <LoadingOutlined style="font-size: 40px; color: #2a6de5;"></LoadingOutlined>
  </div>
  <slot
    v-else
    :result="placeholderData"
    :status="viewStatus"
    :success="viewStatus === 'success'"
    :mask="viewStatus === 'loading' ? 'skeleton-mask' : ''"
  ></slot>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue'
import { SkeletonProps } from './props'

const props = withDefaults(defineProps<SkeletonProps>(), {
  status: 'loading',
  emptyMsg: '暂无数据',
  errorMsg: '未知错误'
})

const emits = defineEmits(['retry'])

const retryClick = () => {
  emits('retry')
}

const viewStatus = computed(() => {
  const status = props.status

  if (status === 'success') {
    let isEmp = false
    const result = props.result
    if (props.isEmpty) {
      isEmp = props.isEmpty(props.result)
    } else {
      if (Array.isArray(result)) {
        isEmp = result.length === 0
      } else if (!result) {
        isEmp = true
      } else {
        isEmp = false
      }
    }
    if (isEmp) return 'empty'

    return 'success'
  }
  return status
})

const placeholderData = computed(() => {
  if (props.result) {
    return props.result
  }

  return props.placeholderResult
})
</script>

<style>
.clam-box {
  width: 100%;
  height: 100%;
}
.empty_view {
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
}
.empty_img {
  width: 310px;
  height: 218px;
}
.trip_text {
  font-size: 20px;
  color: #999999;
}

.mt4 {
  margin-top: 4px;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.loading-center {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skeleton-view-default-view span,
.skeleton-view-default-view a,
.skeleton-view-default-view img,
.skeleton-view-default-view td,
.skeleton-view-default-view button {
  transition-duration: 0.7s;
  transition-timing-function: ease;
  transition-property: background, width;
}

.skeleton-view-empty-view {
  position: relative;
  pointer-events: none;
}

.skeleton-view-empty-view::before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(180, 199, 255, 0.3) 50%,
    rgba(255, 255, 255, 0.1) 60%
  );
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: loading 1s ease-in-out infinite;
  z-index: 1;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.skeleton-view-empty-view .skeleton-mask {
  position: relative;
}
.skeleton-view-empty-view .skeleton-mask::before {
  content: " ";
  background-color: #f5f5f5;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #f5f5f5;
  top: -1px;
  left: -1px;
  z-index: 1;
}

.skeleton-view-empty-view button,
.skeleton-view-empty-view span,
.skeleton-view-empty-view input,
.skeleton-view-empty-view td,
.skeleton-view-empty-view a {
  color: rgba(0, 0, 0, 0) !important;
  border: none;
  background: #f5f5f5 !important;
}
/* [src=""],img:not([src])*/
.skeleton-view-empty-view img {
  content: url(./no_url.png);
  border-radius: 2px;
  background: #f5f5f5 !important;
}
</style>
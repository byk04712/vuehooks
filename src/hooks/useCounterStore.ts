import { computed, ref } from 'vue'
import { createInjectionState } from '@vueuse/core'

/**
 * createInjectionState：创建可以注入组件的全局状态。
 */
const [ useProvideCounterStore, useCounterStore ] = createInjectionState(
  (initialValue: number) => {
    const count = ref(initialValue)

    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    return { count, double, increment }
  },
  // {
  //   injectionKey: 'counter'
  // }
)

export { useProvideCounterStore, useCounterStore }
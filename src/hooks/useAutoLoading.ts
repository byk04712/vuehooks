import type { Ref } from 'vue'
import { ref } from 'vue'

type AutoLoadingResult = [
  Ref<boolean>,
  <T>(requestPromise: Promise<T>) => Promise<T>
]

export function useAutoLoading(defaultLoading = false): AutoLoadingResult {
  const ld = ref(defaultLoading)

  function run<T>(requestPromise: Promise<T>): Promise<T> {
    ld.value = true
    return requestPromise.finally(() => {
      ld.value = false
    })
  }

  return [ld, run]
}
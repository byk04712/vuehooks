import { onMounted, reactive, ref } from 'vue'

// 定义下拉框接收的数据格式
export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  key?: string
}

// 定义入参格式
interface FetchSelectProps {
  apiFun: () => Promise<any[]>;
}

export function useFetchSelect(props: FetchSelectProps) {
  const { apiFun } = props

  const loading = ref(false)
  const options = ref<SelectOption[]>([])

  const loadData = () => {
    options.value = []
    loading.value = true
    return apiFun()
      .then(data => {
        options.value = data
      })
      .catch(err => {
        options.value = [
          {
            value: -1,
            label: err.message,
            disabled: true
          }
        ]
      })
      .finally(() => {
        loading.value = false
      })
  }
  
  onMounted(() => {
    loadData()
  })
  
  return reactive({
    options,
    loading
  })
}
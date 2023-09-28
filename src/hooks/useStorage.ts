import { ref } from 'vue'

const getItem = (key: string, storage: Storage) => {
  let value = storage.getItem(key)
  if (!value) {
    return null
  }
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

/**
 * 缓存 hook
 * @param key 缓存的 key
 * @param type 缓存类型 session, local, 默认 session
 * @returns 
 */
export function useStorage(key: string, type: 'session' | 'local' = 'session') {
  let storage = null
  switch (type) {
    case 'local':
      storage = sessionStorage
      break
    case 'session':
      storage = localStorage
      break
  }

  const value = ref(getItem(key, storage))

  const setItem = (storage: Storage) => {
    return (newVal: any) => {
      value.value = newVal
      const cacheValue = typeof newVal === 'object' ? JSON.stringify(newVal) : newVal
      storage.setItem(key, cacheValue)
    }
  }

  return [
    value,
    setItem(storage)
  ]
}
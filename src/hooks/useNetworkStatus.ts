import { onMounted, onUnmounted } from 'vue'

interface NetworkStatusFn {
  (status: string): void
}

/**
 * 网络状态
 * @param callback 
 */
export const useNetworkStatus = (callback: NetworkStatusFn = () => {}) => {
  const updateNetworkStatus = () => {
    const status = navigator.onLine ? 'online' : 'offline'
    callback(status)
  }

  onMounted(() => {
    window.addEventListener('online', updateNetworkStatus)
    window.addEventListener('offline', updateNetworkStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateNetworkStatus)
    window.removeEventListener('offline', updateNetworkStatus)
  })
}
/*
  使用滚动到底部

  除了分页列表之外，加载更多（或延迟加载）是加载数据的一种友好方式。 特别是对于移动设备，几乎在移动设备上运行的应用程序都会在其 UI 中加载更多负载。 为此，我们需要检测用户滚动到列表底部并触发该事件的回调
*/
import { onMounted, onUnmounted } from 'vue'


export function useScrollToBottom(callback = () => {}) {

  const handleScrolling = () => {
    // 距底部1像素的样子就可以触发了, 此次还应该加入防抖
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
      callback()
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScrolling)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrolling)
  })
}
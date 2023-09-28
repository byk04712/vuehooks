/*
  目前，模态被用于许多应用程序中。 它对于许多用例（表单、确认、警告等）确实很有帮助。 

  我们经常用它处理的流行操作之一是用户在模式之外单击。 useOnClickOutside 对于这种情况是一个有用的hook。 
 */

import { onMounted, onUnmounted, Ref } from "vue";


export function useOnClickOutside(ref: Ref<any>, callback = () => { }) {

  const handleClickOutside = (event: Event) => {
    if (ref?.value && !ref?.value.contains(event.target)) {
      callback()
    }
  }
  
  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
}
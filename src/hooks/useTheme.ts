/**
 * 更改主题
 */
export const useTheme = (key = '') => {
  return (theme) => {
    document.documentElement.setAttribute(key, theme)
  }
}

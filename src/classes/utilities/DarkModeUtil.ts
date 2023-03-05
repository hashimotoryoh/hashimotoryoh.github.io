export function useDarkMode() {
  const isDarkMode = ref<boolean>(false)
  const htmlDOM = document.getElementsByTagName('html')[0]

  const turnOn = () => {
    isDarkMode.value = true
    htmlDOM.classList.add('dark')
  }

  const turnOff = () => {
    isDarkMode.value = false
    htmlDOM.classList.remove('dark')
  }

  const switchDarkMode = () => {
    isDarkMode.value ? turnOff() : turnOn()
  }

  onMounted(() => {
    isDarkMode.value = htmlDOM.classList.contains('dark')
  })

  return {
    isDarkMode,
    switchDarkMode,
  }
}

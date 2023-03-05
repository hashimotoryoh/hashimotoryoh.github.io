export function useDarkMode() {
  const isDarkMode = ref<boolean>(false)
  const htmlDOM = document.getElementsByTagName('html')[0]

  watch(isDarkMode, (newValue) => {
    if (newValue)
      htmlDOM.classList.add('dark')
    else
      htmlDOM.classList.remove('dark')
  })

  const turnOn = () => {
    isDarkMode.value = true
  }

  const turnOff = () => {
    isDarkMode.value = false
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

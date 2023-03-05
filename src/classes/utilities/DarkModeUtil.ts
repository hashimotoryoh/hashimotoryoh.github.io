export function useDarkMode() {
  const darkMode = ref<boolean>(false)
  const htmlDOM = document.getElementsByTagName('html')[0]

  const turnOn = () => {
    darkMode.value = true
    htmlDOM.classList.add('dark')
  }

  const turnOff = () => {
    darkMode.value = false
    htmlDOM.classList.remove('dark')
  }

  const switchDarkMode = () => {
    darkMode.value ? turnOff() : turnOn()
  }

  onMounted(() => {
    darkMode.value = htmlDOM.classList.contains('dark')
  })

  const isDarkMode = readonly(darkMode)
  return {
    isDarkMode,
    switchDarkMode,
  }
}

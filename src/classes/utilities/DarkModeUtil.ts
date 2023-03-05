import { useCookies } from 'vue3-cookies'

export function useDarkMode() {
  const darkMode = ref<boolean>(false)
  const htmlDOM = document.getElementsByTagName('html')[0]
  const { cookies } = useCookies()

  const turnOn = () => {
    darkMode.value = true
    htmlDOM.classList.add('dark')
    cookies.set('is_dark_mode', darkMode.value.toString())
  }

  const turnOff = () => {
    darkMode.value = false
    htmlDOM.classList.remove('dark')
    cookies.set('is_dark_mode', darkMode.value.toString())
  }

  const switchDarkMode = () => {
    darkMode.value ? turnOff() : turnOn()
  }

  onMounted(() => {
    if (cookies.isKey('is_dark_mode')) {
      darkMode.value = (cookies.get('is_dark_mode') === (true).toString())
      darkMode.value ? turnOn() : turnOff()
    } else {
      darkMode.value = htmlDOM.classList.contains('dark')
    }
  })

  const isDarkMode = readonly(darkMode)
  return {
    isDarkMode,
    switchDarkMode,
  }
}

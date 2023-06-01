import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()
const locale = cookies.isKey('i18n_locale')
  ? cookies.get('i18n_locale')
  : navigator.language

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: locale,
  fallbackLocale: 'en',
  messages: messages,
})

export default i18n

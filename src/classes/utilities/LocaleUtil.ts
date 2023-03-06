import { Locale } from "vue-i18n"
import i18n from '../setup/i18n'
import { useCookies } from 'vue3-cookies'

export function useLocale() {
  const { cookies } = useCookies()

  const switchLocale = (locale: Locale) => {
    // FIXME: 本来であれば $i18n のグローバル変数を支えるはずなのだが…
    i18n.global.locale.value = locale

    cookies.set('i18n_locale', locale)
  }

  return {
    switchLocale,
  }
}

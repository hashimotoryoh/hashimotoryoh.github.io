import { Locale } from "vue-i18n"
import i18n from '../setup/i18n'

export function useLocale() {
  const switchLocale = (locale: Locale) => {
    // FIXME: 本来であれば $i18n のグローバル変数を支えるはずなのだが…
    i18n.global.locale.value = locale
  }

  return {
    switchLocale,
  }
}

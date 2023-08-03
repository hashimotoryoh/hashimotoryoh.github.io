import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheck,
  faImages,
  faLanguage,
  faQrcode,
  faSpinner,
  faStarAndCrescent,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
  faThreads,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCheck,
  faImages,
  faLanguage,
  faQrcode,
  faSpinner,
  faStarAndCrescent,
  faSun,
  faXmark,
)

library.add(
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
  faThreads,
  faTwitter,
  faWhatsapp,
)

const faComponentName = 'fai'
export {
  faComponentName,
  FontAwesomeIcon,
}

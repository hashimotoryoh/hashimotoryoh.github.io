import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faFacebook,
  faGithub,
  faInstagram,
  faLine,
  faTwitter,
)

const faComponentName = 'fai'
export {
  faComponentName,
  FontAwesomeIcon,
}

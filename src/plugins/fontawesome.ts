import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)

const faComponentName = 'font-awesome-icon'
export {
  faComponentName,
  FontAwesomeIcon,
}

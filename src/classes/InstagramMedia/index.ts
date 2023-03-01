import config from './config'
import axios from 'axios'

export function useFetchMedia() {
  const loading = ref(false)
  const media = ref()

  async function fetchMedia(useCache: boolean = true) {
    if (useCache && media.value != undefined) {
      return
    }

    var url = new URL(config.endpoint)
    url.searchParams.set('access_token', config.accessToken)
    url.searchParams.set('fields', 'id,caption')

    loading.value = true
    return await axios.get(url.toString())
      .then(({ data }) => {
        loading.value = false
        media.value = data
      })
      .catch(() => {
        loading.value = false
      })
  }

  return {
    loading,
    media,
    fetchMedia,
  }
}

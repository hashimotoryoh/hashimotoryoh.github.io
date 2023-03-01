import config from './config'
import axios from 'axios'
import type { Media } from './types'

export function useFetchMedia() {
  const loading = ref(false)
  const media = ref<Media[]>()

  async function fetchMedia(useCache: boolean = true) {
    if (useCache && media.value != undefined) {
      return
    }

    var url = new URL(config.endpoint)
    url.searchParams.set('access_token', config.accessToken)
    url.searchParams.set('fields', 'id,caption,media_type,permalink,media_url')

    loading.value = true
    return await axios.get(url.toString())
      .then(({ data }) => {
        loading.value = false
        media.value = data.data
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

export interface Media {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'CAROUSEL_ALBUM' | 'VIDEO' | string
  permalink: URL
  media_url: URL
}

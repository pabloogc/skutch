export interface Artboard {
  name: string,
  files: ArtboardFile[];
}

export interface ArtboardFile {
  url: string,
  thumbnails: Thumbnail[]
}

export interface Thumbnail {
  url: string,
  height?: number,
  width?: number
}
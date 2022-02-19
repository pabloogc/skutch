export interface Artboard {
  name: string,
  isArtboard: boolean,
  files: ArtboardFile[];
}

export interface ArtboardFile {
  url: string,
  height: number,
  width: number,
  scale: number,
  thumbnails: Thumbnail[]
}

export interface Thumbnail {
  url: string,
  height: number,
  width: number
}
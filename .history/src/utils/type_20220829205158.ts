export interface MusicItemType {
  key: string;
  title?: string;
  thumbnail: string;
  artists?: IArtists[];
  duration?: string;
  thumbURL: string;
  name: string;
  dateCreate: number;
  dateRelease: number;
}

//
export interface IArtists {
  imageUrl: string;
}

export interface ITrendingArtistsType extends MusicItemType {
  imageUrl: string;
}

export enum NavigateName {
  PlayList = "PlayList",
  Video = "Video",
}

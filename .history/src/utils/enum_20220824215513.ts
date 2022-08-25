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

interface IArtists {
  imageUrl: string;
}

export enum NavigateName {
  PlayList = "PlayList",
  Video = "Video",
}

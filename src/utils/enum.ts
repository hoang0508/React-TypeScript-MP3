export interface MusicItemType {
  key: string;
  title?: string;
  thumbnail: string;
  artists?: [];
  duration?: string;
  thumbURL: string;
  name: string;
  dateCreate: number;
  dateRelease: number;
}

export enum NavigateName {
  PlayList = "PlayList",
  Video = "Video",
}

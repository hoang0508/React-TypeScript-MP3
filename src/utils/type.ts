export interface MusicItemType {
  key: string;
  songKey: string;
  title?: string;
  thumbnail: string;
  artists?: IArtists[];
  duration?: string;
  thumbURL: string;
  name: string;
  dateCreate: number;
  dateRelease: number;
  highestPosition: number;
  totalWeekInRanked: number;
  oldPosition: number;
}

//
export interface IArtists {
  imageUrl: string;
}

export interface ITrendingArtistsType extends MusicItemType {
  imageUrl: string;
}

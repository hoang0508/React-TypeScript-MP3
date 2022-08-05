const {
  getSong,
  //... and many other services
} = require("nhaccuatui-api-full");

export const FetchMusicKey = async (keyData: any, indexSong: number) => {
  if (!keyData) return null;
  const res = await getSong(keyData[indexSong]);
  console.log(
    "🚀 ~ file: FetchMusicKey.tsx ~ line 9 ~ FetchMusicKey ~ res",
    res
  );
  return res;
};

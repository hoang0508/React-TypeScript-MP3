const {
  getSong,
  //... and many other services
} = require("nhaccuatui-api-full");

export const FetchMusicKey = (keyData: any, indexSong: number) => {
  if (!keyData) return null;

  const res = new Promise((resolve, reject) => {
    getSong(keyData[indexSong]);
    resolve(res);
  });
  return {
    res,
  };
};

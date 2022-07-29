import axiosClient from "./axiosClient";

export const MusicApi = {
  getAll(params: any) {
    const url = "/LATEST";
    return axiosClient.get(url, {
      params: {
        ...params,
      },
    });
  },
};

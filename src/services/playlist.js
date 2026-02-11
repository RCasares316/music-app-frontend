import api from "./apiConfig.js";

export const getPlaylist = async (playlistId) => {
  try {
    const { data } = await api.get(`/playlist/${playlistId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

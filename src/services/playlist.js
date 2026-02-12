import api from "./apiConfig.js";

export const getPlaylist = async (playlistId) => {
  try {
    const { data } = await api.get(`/playlist/${playlistId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylists = async () => {
  try {
    const { data }= await api.get("/playlist")
    return data
  } catch (error) {
    console.log(error)
  }
}
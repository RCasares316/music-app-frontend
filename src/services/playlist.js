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
    const { data } = await api.get("/playlist");
    console.log("Playlist: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPlaylist = async (playlistData) => {
  try {
    const { data } = await api.post("/playlist", playlistData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
//playlistID and track ID

export const addTrackToPlaylist = async (playlistId, trackId) => {
  try {
    const { data } = await api.put(`/playlist/${playlistId}/track/${trackId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const removeTrackToPlaylist = async (playlistId, trackId) => {
  try {
    const { data } = await api.delete(
      `/playlist/${playlistId}/track/${trackId}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePlaylist = async (playlistId, playlistData) => {
  try {
    const { data } = await api.put(`/playlist/${playlistId}`, playlistData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePlaylist = async (playlistId) => {
  try {
    const { data } = await api.delete(`/playlist/${playlistId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

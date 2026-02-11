import api from "./apiConfig.js";

export const getTracks = async () => {
  try {
    const { data } = await api.get("/tracks");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrack = async (trackId) => {
  try {
    const { data } = await api.get(`/tracks/${trackId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

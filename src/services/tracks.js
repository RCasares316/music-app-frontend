import api from "./apiConfig.js";

export const getTracks = async (req, res) => {
  try {
    const { data } = await api.get("/tracks");
    return data;
  } catch (error) {
    console.log(error);
  }
};

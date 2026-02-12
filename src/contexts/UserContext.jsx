import { createContext, useState, useEffect } from "react";
import { getPlaylist } from "../services/playlist.js";

const UserContext = createContext();

const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  return JSON.parse(atob(token.split(".")[1])).payload;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromToken());
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const playlistsData = await getPlaylist();
      setPlaylists(playlistsData);
    };
    fetchPlaylists();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, playlists }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

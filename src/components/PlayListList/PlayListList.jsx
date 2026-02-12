import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
// import { getPlaylists } from "../../services/playlist.js";

const PlayListList = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    const loadPlaylists = async () => {
      try {
        const data = await getPlaylists();
        setPlaylists(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadPlaylists();
  }, []);

  /////////////////////////////the Link can go back to Dashboard instead of tracks, but will we need the PlaylistCreate page?

  return (
    <main>
      {playlist.length === 0 ? (
        <Link to="/tracks">                 
          <button>Create Playlist</button>
        </Link>
      ):(

      playlists.map((playlist) => (
        <Link key={playlist._id} to={`/playlists/${playlist._id}`}>
          <article>
            <h2>{playlist.name}</h2>
            {playlist.img && (
              <img src={playlist.img} alt={playlist.name} />
            )}
          </article>
        </Link>
      ))

    )}
  </main>
);
};

export default PlayListList;

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPlaylists} from "../../services/playlist.js";
import "./PlayListList.css";

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
    <main className="playlist-page">
      <div className="playlist-header">
      <h1>Your Playlists</h1>

      <Link to="/playlist/new">
        <button className="create-btn">+ Create Playlist</button>
      </Link>
    </div>

    <div className="playlist-grid">
      {playlists.length === 0 ? (
        <p className="empty-message">
          No playlists yet. Create your first one 🎵
        </p>
      ) : (
        playlists.map((playlist) => (
          <Link
            key={playlist._id}
            to={`/playlist/${playlist._id}`}
            className="playlist-card"
          >
            {playlist.img && (
              <div className="playlist-image">
                <img src={playlist.img} alt={playlist.name} />
              </div>
            )}
            <h2>{playlist.name}</h2>
          </Link>
        ))
      )}
    </div>
      {playlists.length === 0 ? (
        <Link to="/playlist/new">
          <button>Create Playlist</button>
        </Link>
      ) : (
        playlists.map((playlist) => (
          <Link key={playlist._id} to={`/playlist/${playlist._id}`}>
            <article>
              <h2>{playlist.name}</h2>
              {playlist.img && <img src={playlist.img} alt={playlist.name} />}
            </article>
          </Link>
        ))
      )}
    </main>
  );
};

export default PlayListList;

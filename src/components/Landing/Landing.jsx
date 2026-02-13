import SignInForm from "../SignInForm/SignInForm.jsx";
import "./Landing.css";
import { getPlaylists } from "../../services/playlist.js";
import { getTracks } from "../../services/tracks.js";
import { useState, useEffect } from "react";

const Landing = () => {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const playlistData = await getPlaylists();
      playlistData.length = 6; // Cut array down to certain number of elements
      const tracksData = await getTracks();
      tracksData.length = 10; // Cut array down to certain number of elements
      setPlaylists(playlistData);
      setTracks(tracksData);
    };

    fetchData();
  }, []);

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section className="hero">
        {/* GLOBAL MUSIC BACKGROUND */}
        <div className="music-bg-hero">
          <span className="note g-note1">♪</span>
          <span className="note g-note2">♫</span>
          <span className="note g-note3">♬</span>
          <span className="headphones g-headphones">🎧</span>
          <span className="mic g-mic1">🎤</span>
          <span className="mic g-mic2">🎤</span>
        </div>

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>Feel The Music</h1>
          <p>
            Stream your favorite tracks, discover new sounds, and vibe all day.
          </p>
          <button className="cta-btn">Start Listening</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <SignInForm />
        </div>
      </section>

      {/* RECENT PLAYLISTS */}
      <section className="section">
        <h2 className="section-title">Preview a List of Playlists</h2>
        <div className="playlist-grid">
          {playlists.map((playlist) => (
            <div
              className="playlist-card"
              key={playlist._id}
              style={{
                backgroundImage: `url(${playlist.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="playlist-cover"></div>
              <h3>Playlist {playlist.title}</h3>
              <p>{playlist.tracks.length} Songs</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP 10 SONGS */}
      <section className="section">
        <h2 className="section-title">Top 10 Songs</h2>
        <div className="songs-list">
          {tracks.map((track, index) => (
            <div className="song-row" key={track._id}>
              <span className="song-number">{index + 1}</span>
              <div className="song-info">
                <h4>{track.title}</h4>
                <p>{track.artist}</p>
              </div>
              <span className="song-duration">
                {Math.floor(Math.floor(track.duration / 1000) / 60)}:
                {Math.floor(track.duration / 1000) % 60}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Your Music App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;

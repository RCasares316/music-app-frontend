import SignInForm from "../SignInForm/SignInForm.jsx";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section className="hero">
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
        <h2 className="section-title">Preview a List of Songs</h2>
        <div className="playlist-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="playlist-card" key={item}>
              <div className="playlist-cover"></div>
              <h3>Playlist {item}</h3>
              <p>25 Songs</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOP 10 SONGS */}
      <section className="section">
        <h2 className="section-title">Top 10 Songs</h2>
        <div className="songs-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div className="song-row" key={num}>
              <span className="song-number">{num}</span>
              <div className="song-info">
                <h4>Song Title {num}</h4>
                <p>Artist Name</p>
              </div>
              <span className="song-duration">3:45</span>
            </div>
          ))}
        </div>

        <div className="landing">

  {/* GLOBAL MUSIC BACKGROUND */}
  <div className="music-bg-global">
    <span className="note g-note1">♪</span>
    <span className="note g-note2">♫</span>
    <span className="note g-note3">♬</span>
    <span className="headphones g-headphones">🎧</span>
    <span className="mic g-mic1">🎤</span>
    <span className="mic g-mic2">🎤</span>
  </div>

  {/* HERO + REST OF PAGE */}
  ...
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

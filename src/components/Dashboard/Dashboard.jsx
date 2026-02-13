import { useContext, useState, useEffect } from "react";
import { Link } from "react-router";
import { UserContext } from "../../contexts/UserContext.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, playlists } = useContext(UserContext);

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, {user.username}</h1>
        <p>Manage your playlists and start creating new vibes 🎵</p>
      </div>

      <div className="dashboard-content">
        <h2>Recent Playlists</h2>
        <div className="dashboard-card-container">
          {playlists?.map((playlist) => (
            <div className="dashboard-card" key={playlist._id}>
              <Link to={`/playlist/${playlist._id}`}>
                <h1>{playlist.name}</h1>
                <img src={playlist.img} alt={playlist.name} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

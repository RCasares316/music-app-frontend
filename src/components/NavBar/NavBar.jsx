import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext.jsx";
import "./NavBar.css";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav>
      {user ? (
        <ul className="nav-links">
          <li className="welcome">Welcome, {user.username}</li>

          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/playlist">All Playlists</Link>
          </li>

          <li>
            <Link to="/tracks">Tracks</Link>
          </li>

          <li className="signout" onClick={handleSignOut}>
            Sign Out
          </li>
        </ul>
      ) : (
        <></>
        // <ul>
        //   <li>
        //     <Link to="/">Home</Link>
        //   </li>
        //   <li>
        //     <Link to="/sign-in">Sign In</Link>
        //   </li>
        //   <li>
        //     <Link to="/sign-up">Sign Up</Link>
        //   </li>
        // </ul>
      )}
    </nav>
  );
};

export default NavBar;

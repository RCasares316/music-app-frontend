import { useContext } from "react";
import { Routes, Route } from "react-router";
import { UserContext } from "./contexts/UserContext.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import PlayListCreate from "./components/PlayListCreate/PlayListCreate.jsx";
import PlayListDetail from "./components/PlayListDetail/PlayListDetail.jsx";
import PlayListEdit from "./components/PlayListEdit/PlayListEdit.jsx";
import PlayListList from "./components/PlayListList/PlayListList.jsx";
import MusicLibrary from "./components/MusicLibrary/MusicLibrary.jsx";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/playlist" element={<PlayListList />} />
        <Route path="/playlist/new" element={<PlayListCreate />} />
        <Route path="/playlist/:playlistId" element={<PlayListDetail />} />
        <Route path="/playlist/:playlistId/edit" element={<PlayListEdit />} />
        <Route path="/tracks" element={<MusicLibrary />} />
      </Routes>
    </>
  );
};

export default App;

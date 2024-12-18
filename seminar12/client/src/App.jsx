import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Login from "./Login";
import { useSelector } from "react-redux";
import useCheckToken from "./hooks/useCheckToken";
import Profile from "./Profile";

function App() {
  const { checkTokenLoading, loggedIn } = useSelector((state) => state.global);

  useCheckToken();

  return (
    <div>
      <Router>
        <Routes>
          {checkTokenLoading ? (
            <Route path="*" element={<div>Spinner</div>} />
          ) : (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={loggedIn ? <Profile /> : <Navigate to='/login'/>} />
              <Route path="*" element={<div>Page not found</div>} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

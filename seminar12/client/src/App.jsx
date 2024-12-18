import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Login from "./Login";
// import { useEffect, useState } from "react";

function App() {
  // const [redirected, setRedirected] = useState(false)

  // useEffect(() => {
  //   if (!redirected) {
  //     window.location.href = '/login'
  //     setRedirected(true);
  //   }
  // }, [])

  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  </div>;
}

export default App;

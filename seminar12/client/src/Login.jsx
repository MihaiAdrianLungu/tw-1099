import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn, setToken } from "./store/slices/globalSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })

    const json = await response.json();

    if(!json.success) {
        setError(json.message);
    } else {
        localStorage.setItem('token', json.data.token);
        dispatch(setLoggedIn(true));
        dispatch(setToken(json.data.token));
        
        navigate('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          required
          id="username"
          name="username"
          placeholder="Your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <br/>
        {error.length > 0 && <span style={{color: "red"}}>{error}</span>}
      </form>
    </div>
  );
}

export default Login;

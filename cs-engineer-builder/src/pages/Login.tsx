import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Placeholder for Firebase login logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // TODO: Add Firebase Auth login logic here
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div className="auth-links">
        <Link to="/signup">Create Account</Link> | <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login; 
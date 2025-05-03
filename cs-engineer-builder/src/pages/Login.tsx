import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.AOS) window.AOS.refresh();
  }, []);

  // Placeholder for Firebase login logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // TODO: Add Firebase Auth login logic here
  };

  return (
    <div className="auth-container" data-aos="fade-up">
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sign In to Your Account</h2>
      <form onSubmit={handleLogin} className="space-y-4">
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
        <button type="submit" className="">Login</button>
      </form>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-2 text-gray-400">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-white text-gray-900 border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
        <button className="bg-gray-900 text-white flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-800 transition">
          <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
          Continue with GitHub
        </button>
      </div>
      <div className="auth-links mt-6 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/signup" className="hover:underline">Create Account</Link>
        <Link to="/forgot-password" className="hover:underline">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login; 
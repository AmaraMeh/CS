import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [interests, setInterests] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.AOS) window.AOS.refresh();
  }, []);

  // Placeholder for Firebase signup logic
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    // TODO: Add Firebase Auth signup logic here
  };

  return (
    <div className="auth-container" data-aos="fade-up">
      <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Create Your Account</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <select
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="professional">Professional</option>
          <option value="hobbyist">Hobbyist</option>
        </select>
        <input
          type="text"
          placeholder="Interests (comma separated)"
          value={interests}
          onChange={e => setInterests(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Sign Up</button>
      </form>
      <div className="auth-links mt-6 flex flex-col sm:flex-row justify-between items-center">
        <Link to="/login" className="hover:underline">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default Signup; 
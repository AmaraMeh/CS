import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to CS Engineer Builder</h1>
      <p>Empowering future engineers in Computer Science, Programming, Cybersecurity, and AI.</p>
      <div className="home-links">
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/profile">Profile</Link>
      </div>
      {/* TODO: Add animated topic cards and beautiful design here */}
    </div>
  );
};

export default Home; 
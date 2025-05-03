const Profile = () => {
  // TODO: Fetch user data from Firebase Auth
  const user = {
    name: 'User Name',
    email: 'user@example.com',
    // Add more fields as needed
  };

  const handleLogout = () => {
    // TODO: Add Firebase Auth logout logic here
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user info here */}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile; 
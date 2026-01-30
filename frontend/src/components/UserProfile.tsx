import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, avatar }) => (
  <div className="user-profile">
    {avatar && <img src={avatar} alt={name} className="avatar" />}
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default UserProfile;

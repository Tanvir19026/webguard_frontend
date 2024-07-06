import React, { useContext } from 'react';
import './Profile.css';
import { AuthContext } from '../../providers/AuthProviders';

  

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="profile-card mt-5">
        <h2><span style={{color:'blue'}}>Welcome <br /></span> <span style={{color:'orange'}}>{user.displayName}</span> </h2>
        <p>{user.email}</p>
      </div>
    );
};

export default Profile;
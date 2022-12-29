import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { CgProfile } from 'react-icons/cg';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            
            {
                user?.photoURL ?
                    <><img src={user.photoURL} alt="" /></>
                    :
                    <p><CgProfile /></p>
            }
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default Profile;
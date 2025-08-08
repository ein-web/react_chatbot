import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <div>사용자 정보가 없습니다.</div>;
  }

  return (
    <div>
      <h2>사용자 ID: {user.id}</h2>
    </div>
  );
}

export default UserProfile;

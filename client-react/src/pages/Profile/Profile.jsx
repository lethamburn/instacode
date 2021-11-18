import React, {useContext} from "react";
import { UserContext } from "../../App";
const Profile = () => {
    const { user } = useContext(UserContext)
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Description: {user.description}</p>
      <p>Emoji: {user.emoji}</p>
      <p>E-mail: {user.email}</p>
    </div>
  );
};

export default Profile;

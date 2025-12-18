import React from 'react';
const UserProfile = (props) => {
return (
<div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
<h2>{props.name}</h2>
<p>Email: {props.email}</p>
<p>Age: {props.age}</p>
</div>
);
};
export default UserProfile;

app.jsx


import React from "react";
import UserProfile from "./core concepts/helloworld/UserProfile";

export default function App() {
  return (
    <>
      <h1>User Profiles</h1>

      <UserProfile
        name="name"
        email="name@example.com"
        age={20}
      />

      <UserProfile
        name="name"
        email="name@example.com"
        age={22}
      />

      <UserProfile
        name="name"
        email="name@example.com"
        age={21}
      />
    </>
  );
}

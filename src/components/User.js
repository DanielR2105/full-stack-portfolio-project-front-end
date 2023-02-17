import React from "react";

export default function User({ user }) {
  return (
    <div>
      <h4>
        {user.name} {user.age} Years old
      </h4>
    </div>
  );
}

import React, { Component } from 'react';

const UserCard = props => {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <img src={props.data.avatar_url} alt="" />
    </div>
  )
}

export default UserCard
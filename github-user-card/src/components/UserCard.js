import React, { Component } from 'react';
import Followers from './Followers';

const UserCard = props => {
  console.log(props)
  return (
    <div>
      <h1>{props.data.name}</h1>
      <img src={props.data.avatar_url} alt="" />
      {props.followerData.map(follower => (
        <Followers follower={follower} key={follower.id} />
      ))}
    </div>
  )
}

export default UserCard
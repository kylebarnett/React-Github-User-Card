import React, { Component } from 'react';
import Followers from './Followers';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Followers</h1>
      <div className="card-container">
        {props.followerData.map(follower => (
          <Followers follower={follower} key={follower.id} />
        ))}
      </div>
    </div>
  )
}

export default UserCard
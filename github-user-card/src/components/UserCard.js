import React, { Component } from 'react';
import Followers from './Followers';
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = props => {
  console.log(props)
  return (
    <div>
      <Card>
        <Image src={props.data.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.data.name}</Card.Header>
        </Card.Content>
      </Card>
      {props.followerData.map(follower => (
        <Followers follower={follower} key={follower.id} />
      ))}
    </div>
  )
}

export default UserCard
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div>
      <div className="app-container">
        <h1>Welcome, {props.data.login}</h1>
      </div>
      <div className="header-followers-container">
        <p>Followers</p>
        <Link to="/followers">{props.followerData.length}</Link>
      </div>
      {props.loading ? "Loading Data..." :
        <Card>
          <Image src={props.data.avatar_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
          </Card.Content>
          <Card.Description>
            Bio: <a href={`${props.data.bio}`}>{props.data.bio}</a>
          </Card.Description>
          <Card.Content extra>
            <a href="https://google.com">
              <Icon name='user' />
              {props.followerData.length} Followers
            </a>
          </Card.Content>
        </Card>
      }
    </div>
  );
}

export default Home;
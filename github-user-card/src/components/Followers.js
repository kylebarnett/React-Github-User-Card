import React from 'react';

const Followers = props => {
  return (
    <div>
      <h1>{props.follower.login}</h1>
      <img src={props.follower.avatar_url} />
    </div>
  )
}

export default Followers
import React from 'react';

const Followers = props => {
  return (
    <div>
      <h1>{props.follower.login}</h1>
      {console.log(props.follower.avatar_url)}
      <img src={props.follower.avatar_url} />
    </div>
  )
}

export default Followers
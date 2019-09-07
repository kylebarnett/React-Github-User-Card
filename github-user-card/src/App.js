import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      followerData: [],
      loading: false
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/kylebarnett')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .then(res => this.setState({ loading: true }))
  }
  componentDidMount() {
    fetch('https://api.github.com/users/kylebarnett/followers')
      .then(res => res.json())
      .then(res => this.setState({ followerData: res }))
  }

  render() {
    console.log(this.state.data)
    console.log(this.state.followerData)
    return (
      <div className="App">
        {!this.state.loading ? "Loading Data..." :
          <UserCard
            data={this.state.data}
            followerData={this.state.followerData}
          />
        }
      </div>
    );
  }
}

export default App;

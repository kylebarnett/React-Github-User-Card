import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: false
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/kylebarnett')
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .then(res => this.setState({ loading: true }))
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        {!this.state.loading ? "Loading Data..." :
          <UserCard data={this.state.data} />
        }
      </div>
    );
  }
}

export default App;

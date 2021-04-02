import React from 'react';
import './App.scss';


import CustomRoutes from './config/CustomRoutes';

// import store from './store';
// import { Provider } from 'react-redux';
// import Login from './screens/Login';
// import Profile from './screens/Profile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  componentDidMount(){
     this.setState({location:window.location})
   }
   componentDidUpdate(){

    // if (this.state.location!== window.location.pathname) this.setState({location:window.location.pathname});
    console.log('aaa');
   }
  
  // afterLogin() {
  //   this.setState({ showProfile: true });
  // }

  render() {
    console.log(this.state.location);

    return (      
      <div className="App">
        <CustomRoutes path={this.state.location}/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native';

import Loading from '../components/Loading';
import initStore from '../store/initStore';

class StartUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if(this.props.user.token) {
      console.log(2)
        await initStore(this.props.dispatch);
        console.log(3)
        this.props.navigation.navigate('AppRouter');
    }
    else this.props.navigation.navigate('SignInRouter');
  }

  render() {
    console.log(1)
    return (
        <Loading></Loading>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(StartUpScreen)
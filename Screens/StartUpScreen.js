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
    // Already logged in
    console.log(this.props.user)
    if(this.props.user.token) {
        await initStore(this.props.dispatch);
        this.props.navigation.navigate('AppRouter');
    }
    else this.props.navigation.navigate('SignInRouter');
  }

  render() {
    return (
        <Loading></Loading>
    );
  }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps)(StartUpScreen)
import React from 'react';
import { connect } from 'react-redux';
import { Button, Text } from "native-base";


const onLogout = (props) => {
    props.navigation.navigate('SignInRouter');
    props.onLogout();
}

const Logout = (props) => (
    <Button
        full
        danger
        onPress={() => onLogout(props)}
    >
        <Text>Logout</Text>
    </Button>
)

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => dispatch({ type: 'USER_LOGOUT' })
});

export default connect(null, mapDispatchToProps)(Logout);
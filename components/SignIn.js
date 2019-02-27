// import React from 'react';
// import { Button, Text, TextInput, View } from 'react-native';
//
// //SUMMARY OF WHAT DANIEL AND I DISCUSSED:
// //the server will be the middle man between the client and Microsoft Graph API
// //All Microsoft Graph API does is authenticate whether the user is a real user from the school
// //Our server/db will create users for our app!
// //The user should make an account with us ONCE - their info and InFridge Profile is stored on db
// //  Add on to the "ONCE": need to look into storing access token on local storage so logon Microsoft Graph API too?
// //If they delete the app on their phone and redownload,
// //  they should login and the server checks if they have made and account with us or if they are a new InFridge user
//
// //QUESTIONS:
// //What will the server/db store?
// //  the user's access token or refresh token???
//
// class SignIn extends React.Component {
//   constructor(props) {
//       super(props);
//
//       this.state = {
//           email: '',
//           password: ''
//       }
//   }
//
//   render() {
//     return (
//       <View>
//         <Button
//             title="Sign In"
//             onPress={() => this.onSignIn()}
//         />
//       </View>
//     )
//   }
// }
//
// export default SignIn

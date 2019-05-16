// import React, { Component } from "react";
// import { 
//   View,
//   Text,
//   StyleSheet,
//   Button
// } from "react-native";

// import { createStackNavigator,createAppContainer } from 'react-navigation'
// import HomeScreen from "./src/screens/HomeScreen";
// import LoginScreen from "./src/screens/LoginScreen";



// class HomePage extends Component {
//   handleButton =() => {
//     this.props.navigation.navigate('loginRoute')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HomePage</Text>
//         <Button title='ke Halaman Login' onPress={this.handleButton}/>
//       </View>
//     );
//   }
// }

// class LoginPage extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>LoginPage</Text>
//       </View>
//     );
//   }
// }

// const stack = createStackNavigator({
//   home : {
//     screen : HomeScreen,
//     navigationOptions : {
//       title : "HOME"
//     }
//   },
//   loginRoute : LoginScreen
// }, {
//   initialRouteName : 'home',
// })

// const stackContainer = createAppContainer(stack)


// export default stackContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

import {StackContainer} from './src/routes/StackRoot'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './src/1.reducers'
import React,{Component} from 'react'
import ReduxThunk from 'redux-thunk'

const store = createStore(Reducer,{},applyMiddleware(ReduxThunk))

class App extends Component{
  render(){
    return(
      <Provider store={store}>
          <StackContainer/>
      </Provider>
    )
  }
}

export default App;
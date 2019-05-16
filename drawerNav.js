// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Image
// } from "react-native";

// import HomeScreen from './src/screens/HomeScreen'
// import LoginScreen from './src/screens/LoginScreen'

// import { createDrawerNavigator ,createAppContainer, DrawerItems} from 'react-navigation'


// // class CustomDrawer extends Component{
// //     constructor(props){
// //         super(props);
// //     }
// //     render(){
// //         return(
// //             <View style={{flex : 1}}>
// //             <View>
// //                 <Text>Ini Custom Drawers</Text>
// //                 <Image style={{height : 40,width:40}} source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
// //             </View>
// //             <DrawerItems {...props}/>
// //         </View>
// //         )
// //     }
// // }

// const CustorDrawer = (props) => {
//     return(
//         <View style={{flex : 1}}>
//             <View>
//                 <Text>Ini Custom Drawers</Text>
//                 <Image style={{height : 40,width:40}} source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
//             </View>
//             <DrawerItems {...props}/>
//         </View>
//     )
// }

// const Drawer = createDrawerNavigator({
//     home : HomeScreen,
//     login : LoginScreen
// } ,{
//     contentComponent : CustorDrawer
// })

// const DrawerContainer = createAppContainer(Drawer)


// class Hello extends Component {
//     render() {
//         return (
//             <DrawerContainer/>
//         );
//     }
// }
// export default Hello;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
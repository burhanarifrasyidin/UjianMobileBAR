import React,{Component} from 'react'

import { createStackNavigator,createAppContainer,createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/RegisterPage';
import EmployeeDetail from '../screens/EmployeeDetailScreen';
import MenuAccountSetting from '../screens/MenuAccountSetting'
import EditEmployee from '../screens/EditEmployeeScreen';
import Menu from '../screens/MenuStack';
import AddEmployee from '../screens/AddEmployeeScreen';
import ListEmployee from '../screens/ListEmployeeScreen';

const AccountSetting = createStackNavigator({
    menu : MenuAccountSetting
})

const StackBeranda = createStackNavigator({
    MenuStack : Menu,
    Add : AddEmployee,
    Edit : EditEmployee,
    Detail : EmployeeDetail,
    List : ListEmployee
},{
    headerMode:'none'
})

const HomeTab = createMaterialTopTabNavigator({
    Home : StackBeranda,
    Account : AccountSetting
},{
    tabBarPosition :'bottom',
    swipeEnabled:false
}) 

StackBeranda.navigationOptions=({navigation})=>{
    let tabBarVisible = false

    let routeName = navigation.state.routes[navigation.state.index].routeName
    if(routeName == 'MenuStack'){
        tabBarVisible = true
    }
    return{
        tabBarVisible
    }
}

const StackRoot = createStackNavigator({
    login : LoginScreen,
    register : Register,
    home : HomeTab
},{
    headerMode : 'none',
    // initialRouteName:'home'
})

export const StackContainer = createAppContainer(StackRoot)
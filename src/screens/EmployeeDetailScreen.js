import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    TouchableHighlight
} from "react-native";
import Communications from 'react-native-communications'
import {connect} from 'react-redux'
import { Fire } from '../support/firebase'

class EmployeeDetail extends Component {
    state = {data:{}, idkey : null}

    componentDidMount(){
        this.setState({idkey : this.props.navigation.getParam("idk")})
    }

    onBtnDelete = () => {
        Alert.alert('Delete Data', 'Are You Sure to Delete ' + this.props.navigation.getParam('nama'), [
            {text : 'Yes', onPress: () => Fire.database().ref('manager/users/'+this.props.user.id+'/employee/'+ this.state.idkey).remove()
            .then((res) => {
                this.props.navigation.navigate('List')
            })
            .catch((err) => console.log(err))
            }, {text : 'Cancel'}
        ])
    
    }
    
    render() {
        const {getParam} = this.props.navigation
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Detail Employee</Text>
                <View style={{alignSelf: 'center', flexDirection: 'row',marginTop:30 }}>
                    <View style={{ flex: 1,marginLeft:50}}>
                        <Text style={{fontSize:14}}>{getParam('nama')}</Text>
                    </View> 
                    <View style={{ flex: 1 }}>
                        <Text style={{fontSize:14}}>{getParam('shift')}</Text>
                    </View>
                    <View style={{ flex: 1,marginRight:12 }}>
                        <Text style={{fontSize:14}}>{getParam('phone')}</Text>
                    </View>
                </View>
                <View style={{justifyContent:"center", marginTop:100, marginHorizontal:20}}>
                    <TouchableHighlight onPress={this.onBtnDelete}
                    style={{height : 50, width : 100 , backgroundColor : 'blue', justifyContent : "center",marginLeft:25,borderRadius:50}}>
                    <Text style={{alignSelf : "center", color : 'white'}}>Delete</Text> 
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => Communications.textWithoutEncoding(getParam('phone'), `Hello ${getParam('nama')}, Your upcoming shift is on ${getParam('shift')}`)}
                    style={{height : 50, width : 150 ,backgroundColor : 'green', justifyContent : "center",borderRadius:50,marginTop:20}}>
                    <Text style={{alignSelf : "center", color : 'white'}}>Send SMS</Text> 
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.auth
    }
}


export default connect(mapStateToProps)(EmployeeDetail);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    }
});
















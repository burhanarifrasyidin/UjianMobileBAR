import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from "react-native";

class Menu extends Component {
    render() {
        console.disableYellowBox = true
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:100,marginHorizontal:20}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Add')} style={{height:100,width:100,borderWidth:3,borderColor:'blue',backgroundColor:'blue',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center'}}>ADD</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('Edit')} style={{height:100,width:100,borderWidth:3,borderColor:'green',backgroundColor:'green',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center'}}>EDIT</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('List')} style={{height:100,width:100,borderWidth:3,borderColor:'yellow',backgroundColor:'yellow',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center'}}>LIST</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
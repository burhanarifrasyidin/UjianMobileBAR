import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>
            </View>
        );
    }
}
export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
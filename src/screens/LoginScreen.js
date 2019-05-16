import React, { Component } from 'react';
import {View,ActivityIndicator} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label ,Button,Text,Body,Title, Row,Icon} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome'
import {Fire} from './../support/firebase'
import {connect} from 'react-redux'
import {onLoginSuccess} from './../2.actions'
import {StackActions,NavigationActions} from 'react-navigation'


class LoginScreen extends Component {
  state = {loading:true,error:''}

  componentDidUpdate(){
    if(this.props.user){
      const stackReset = StackActions.reset({
        index:0,
        actions :[NavigationActions.navigate({routeName:'home'})]
      })
      this.props.navigation.dispatch(stackReset)
      this.setState({loading:false})
    }
  }

  componentDidMount(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.onLoginSuccess(user.email,user.uid)
      }else{
        this.setState({loading:false})
      }
    })
  }

  onBtnLogin=()=>{
    if(this.inputEmail && this.inputPassword){
      this.setState({loading:true})
          const auth = Fire.auth()
          auth.signInWithEmailAndPassword(this.inputEmail,this.inputPassword)
          .then((val)=>{
            var {uid,email} = val.user
            console.log(uid)
            this.props.onLoginSuccess(email,uid)
          })
          .catch((err)=>{
            this.setState({error:err.message,loading:false})
          })
    }else{
      this.setState({error : 'Isi Semua !!'})      
    }
  }

  render() {
    if(this.state.loading){
      return(
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator size='large' color='black'/>
        </View>
      )
    }
    return (
      <Container>
        <Header>
                <Body style={{marginLeft:12}}>
                    <Title>{this.props.user}</Title>
                </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text)=>this.inputEmail=text}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text)=>this.inputPassword=text}/>
            </Item>
            <Button block onPress={this.onBtnLogin} style={{marginTop:20,marginHorizontal:15,borderRadius:20}}>
                {
                  this.state.loading ?
                  <ActivityIndicator size='small' color='white'/>
                  : 
                  <Text>Login</Text>
                }
            </Button>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:12}}>
                <View style={{height:60,width:60}}>
                    <Icons name='facebook' size={40}></Icons>
                </View>
                <View style={{height:60,width:60}}>
                    <Icons name='google' size={40}></Icons>
                </View>
                <View style={{height:60,width:60}}>
                    <Icons name='twitter' size={40}></Icons>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                <Text onPress={()=>this.props.navigation.navigate('register')}>Belum Punya Akun ? Register Now</Text>
            </View>
            {this.state.error ? 
            <View style={{paddingVertical:15,backgroundColor:'red',marginHorizontal:15,borderRadius:30,marginTop:15}}>
                <View style={{position:'absolute',top:3,right:3}}>
                <Icon name='close-circle' fontSize={10} onPress={()=>this.setState({error:''})}/>
                </View>
                <Text style={{color:'white',alignSelf:'center'}}>{this.state.error}</Text>
            </View>
            : null
            }
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    user : state.auth.email
  }
}

export default connect(mapStateToProps,{onLoginSuccess})(LoginScreen);
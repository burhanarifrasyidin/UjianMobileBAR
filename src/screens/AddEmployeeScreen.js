import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Picker,Left,Right,Button,Text,Body,Title} from 'native-base';
import {Fire} from './../support/firebase';
import {connect} from 'react-redux'


class FloatingLabelExample extends Component {
  state={selected:'',textInputNama : '',textInputPhone : ''}

  onAddBtnClick = () => {
    if(this.state.textInputNama && this.state.textInputPhone){
      var nama = this.state.textInputNama
      var phone = this.state.textInputPhone
      var shift = this.state.selected
      var id = this.props.uid
      Fire.database().ref('manager/users/'+ id +'/employee').push({
        nama,phone,shift
      })
      .then((val)=>{
        alert('data masuk')
      })
      .catch((err)=>console.log(err))

    }else{
      alert('Data Harus Disi Semua')
    }
}

  render() {
    return (
      <Container>
        <Header>
                <Body style={{marginLeft:12}}>
                    <Title>ADD DATA</Title>
                </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text) => this.setState({textInputNama : text}) }/>
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input onChangeText={(text) => this.setState({textInputPhone : text}) }/>
            </Item>
            <Item>
                <Left>
                    <Label style={{justifyContent:'flex-end'}}>Select Day</Label>
                </Left>
                <Right>
                    <Picker style={{width:120}} 
                    mode='dropdown' 
                    selectedValue={this.state.selected} 
                    onValueChange={(value)=> this.setState({selected:value})}>
                        <Picker.Item label='Monday' value='Monday'/>
                        <Picker.Item label='Tuesday' value='Tuesday'/>
                        <Picker.Item label='Wednesday' value='Wednesday'/>
                        <Picker.Item label='Thursday' value='Thursday'/>
                        <Picker.Item label='Friday' value='Friday'/>
                        <Picker.Item label='Saturday' value='Saturday'/>
                        <Picker.Item label='Sunday' value='Sunday'/>
                    </Picker>
                </Right>
            </Item>
            <Button block onPress={this.onAddBtnClick} style={{marginTop:20,marginHorizontal:15,borderRadius:20}}>
                <Text>Add Employee</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    uid : state.auth.id
  }
}

export default connect(mapStateToProps)(FloatingLabelExample);
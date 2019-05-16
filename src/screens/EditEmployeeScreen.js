import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label,Picker,Left,Right,Button,Text,Body,Title} from 'native-base';
import {Fire} from './../support/firebase';
import {connect} from 'react-redux'


class FloatingLabelExample extends Component {
    state={selected:'',data:{},isEdit:null,textInputNama:'',textInputPhone:''}

    componentDidMount(){
        var id = this.props.uid
        Fire.database().ref('manager/users/'+id+'/employee').on('value' , items => {
            this.setState({data : items.val()})
            console.log(items.val())
        })
    }

    onSaveBtn = () => {
        var id = this.props.uid
        Fire.database().ref('manager/users/'+id+'/employee/'+this.state.isEdit).set({
            nama : this.state.textInputNama,
            phone : this.state.textInputPhone,
            shift : this.state.selected
        })
        .then((res)=>{
            alert('data berhasil di edit')
        })
    }

  render() {
    return (
      <Container>
        <Header>
                <Body style={{marginLeft:12}}>
                    <Title>EDIT DATA</Title>
                </Body>
        </Header>
        <Content>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{paddingTop:15,paddingLeft:15}}>
                    <Text>Select Data</Text>
                </View>
                <View>
                    <Picker 
                    style={{width:200}}
                    mode='dropdown' 
                    selectedValue={this.state.isEdit}
                    onValueChange={(val)=>this.setState({isEdit:val})}>
                    <Picker.Item label='Select Name' value={null}/>
                        {   this.state.data ?
                            Object.keys(this.state.data).map(val=>{
                                return(
                                    <Picker.Item label={this.state.data[val].nama} value={val}/>
                                )
                            })
                            : 
                            <Picker.Item label='Data Tidak Ada Di Database' value={null}/>
                        }
                    </Picker>
                </View>
            </View>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text) => this.setState({textInputNama : text})} defaultValue={this.state.isEdit ? this.state.data[this.state.isEdit].nama:null}/>
            </Item>
            <Item stackedLabel last>
              <Label>Phone</Label>
              <Input onChangeText={(text) => this.setState({textInputPhone : text})} defaultValue={this.state.isEdit ? this.state.data[this.state.isEdit].phone:null}/>
            </Item>
            <Item>
                <Left>
                    <Label style={{justifyContent:'flex-end'}}>Select Day</Label>
                </Left>
                <Right>
                    <Picker style={{width:120}} 
                    mode='dropdown' 
                    selectedValue={(this.state.isEdit && this.state.selected )? this.state.selected:(this.state.isEdit && this.state.selected === ""? this.state.data[this.state.isEdit].shift:null)} 
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
            {
                this.state.isEdit ?
                <Button block onPress={this.onSaveBtn} style={{marginTop:20,marginHorizontal:15,borderRadius:20}}>
                    <Text>Save</Text>
                </Button>
                : 
                <Button disabled block onPress={this.onSaveBtn} style={{marginTop:20,marginHorizontal:15,borderRadius:20}}>
                    <Text>Save</Text>
                </Button>
            }
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
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text ,Left,Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire} from './../support/firebase'
import {connect} from 'react-redux'


class ListEmployee extends Component {
  state={data:[]}

  componentDidMount(){
    var id = this.props.uid
    Fire.database().ref('manager/users/'+id+'/employee').on('value' , items => {
        this.setState({data : items.val()})
        console.log(items.val())
    })
}

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
              {Object.keys(this.state.data).map(val => {
                  return(
                    <ListItem onPress={()=>this.props.navigation.navigate('Detail',{
                      nama : this.state.data[val].nama,
                      shift : this.state.data[val].shift,
                      phone : this.state.data[val].phone,
                      idk : val
                    })}>
                    <Left>
                        <Text>{this.state.data[val].nama}</Text>
                    </Left>
                    <Right>
                        <Icon name='chevron-right' size={20}></Icon>
                    </Right>
                    </ListItem>
                  )
              })         
              }
          </List>
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

export default connect(mapStateToProps)(ListEmployee);
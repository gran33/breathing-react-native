import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {View, Card, Text} from 'react-native-ui-lib';
// import {connect} from 'remx';


class HomeScreen extends Component {

  static options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'buttonOne',
            systemItem: 'refresh'
          }
        ],
      }
    };
  }


  renderItem = ({item}: {item: object}): object => {
    return (
      <View flex>
        <Card marginH-30 marginB-20 enableShadow>
          <Card.Image height={120} imageSource={{uri: 'https://images.unsplash.com/photo-1524401352324-73cdbc09acd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400'}}/>
          <View>
            <Text center text10>{item}</Text>
          </View>
        </Card>
      </View>
    );
  }

  keyExtractor = (item: string): string => '' + item;

  render() {
    return (
      <View flex>
        <FlatList
          data={['a', 'b', 'c', 'd', 'e', 'f']}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default HomeScreen;

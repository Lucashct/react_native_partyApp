import React, { Component } from 'react'
import { View } from 'react-native'
import { Tab, TabView, Text } from 'react-native-elements'

class Menu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  setIndex = (e) => {
    this.state.index = e
  }
  
  render() {
    return (
      <View>
        <Tab value={this.state.index} onChange={(e) => {this.setIndex(e)}}
          indicatorStyle={{ backgroundColor: 'white' }} variant=''
        >
          <Tab.Item title="feed" titleStyle={{ fontSize: 12, color: 'white' }} icon={{ name: 'home', type: 'ionicon', color: 'white' }}/>
        </Tab>

        <TabView>
          <TabView.Item>
            <Text h1>Meu Feed</Text>
          </TabView.Item>
        </TabView>
      </View>
    );
  }
}

export default Menu
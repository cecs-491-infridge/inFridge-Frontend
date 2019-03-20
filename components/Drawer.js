import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Drawer} from 'native-base';

import AppHeader from './AppHeader';
// import AppBody from './appBody';
// import AppFooter from './appFooter';

import Sidebar from './sidebar';

export default class Main extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar/>}
                onClose={() => this.closeDrawer()} >

                <AppHeader
                    openDrawer={this.openDrawer.bind(this)}
                />
                <AppBody/>
                </Drawer>
    );
  }
}

module.exports = Main;
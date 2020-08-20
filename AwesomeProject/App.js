/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TVEventHandler,
  TouchableOpacity
} from 'react-native';
import KeyEvent from 'react-native-keyevent';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  _tvEventHandler;

  _enableTVEventHandler() {
    
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, function(cmp, evt) {
      alert("key"+ evt.eventType);
      
      if (evt && evt.eventType === 'right') {
       // cmp.setState({board: cmp.state.board.move(2)});
        alert("right");
      } else if(evt && evt.eventType === 'up') {
        //cmp.setState({board: cmp.state.board.move(1)});
        alert("up");
      } else if(evt && evt.eventType === 'left') {
       // cmp.setState({board: cmp.state.board.move(0)});
        alert("left");
      } else if(evt && evt.eventType === 'down') {
        //cmp.setState({board: cmp.state.board.move(3)});
        alert("down");
      } else if(evt && evt.eventType === 'playPause') {
        //cmp.restartGame();
        alert("playPause");
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  componentDidMount() {
    KeyEvent.onKeyDownListener((keyEvent) => {
      console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
    });
 
    // if you want to react to keyUp
    KeyEvent.onKeyUpListener((keyEvent) => {
      console.log(`onKeyUp keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
    });
 
    // if you want to react to keyMultiple
    KeyEvent.onKeyMultipleListener((keyEvent) => {
      console.log(`onKeyMultiple keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Characters: ${keyEvent.characters}`);
    });
    //this._enableTVEventHandler();
  }

  componentWillUnmount() {
    console.log('keyListenerRemoved');
    KeyEvent.removeKeyDownListener();
 
     // if you are listening to keyUp
    KeyEvent.removeKeyUpListener();
 
     // if you are listening to keyMultiple
    KeyEvent.removeKeyMultipleListener();
    //this._disableTVEventHandler();
  }
  render () {
    return (
    <TouchableOpacity>
      <Text>Hello</Text>
    </TouchableOpacity>);
  }
}
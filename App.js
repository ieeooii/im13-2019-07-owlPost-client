import React, { Component } from "react";
import { View } from "native-base";
import SignIn from "./src/Screen/SignIn";
import Home from "./src/Screen/Home";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import NaviApp from "./src/Screen/NaviApp";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      logInStatus: true // using for seperate TH(false) / HS(true)
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({
      loading: true
    });
  }

  render() {
    const { logInStatus } = this.state;

    if (this.state.loading) {
      return <AppLoading />;
    }

    return logInStatus === false ? <SignIn /> : <NaviApp />;
  }
}

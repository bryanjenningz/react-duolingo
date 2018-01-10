import React, { Component } from "react";
import AppBar from "./AppBar";
import BottomNav from "./BottomNav";
import PracticeButton from "./PracticeButton";

class Learn extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <PracticeButton />
        <BottomNav />
      </div>
    );
  }
}

export default Learn;

import React, { Component } from "react";

const ProgressBar = ({ percent }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ flex: 1, color: "#ccc", fontSize: 50, cursor: "pointer" }}>
      ×
    </div>
    <div
      style={{
        flex: 9,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          height: 5,
          background: "#ccc",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: 10,
            background: "#13c713",
            borderRadius: 100
          }}
        />
      </div>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 1em" }}>
        <ProgressBar percent={50} />
        <div style={{ textAlign: "center" }}>Hello</div>
      </div>
    );
  }
}

export default App;

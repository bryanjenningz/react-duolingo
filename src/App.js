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

const SelectedBlocks = ({ blocks }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {blocks.map(block => (
      <div key={block.id} style={{ background: "white", padding: 5 }}>
        {block.text}
      </div>
    ))}
  </div>
);

const UnselectedBlocks = ({ blocks }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {blocks.map(block => (
      <div key={block.id} style={{ background: "white", padding: 5 }}>
        {block.text}
      </div>
    ))}
  </div>
);

const CheckButton = () => (
  <div
    style={{
      width: "100%",
      color: "#888",
      background: "#ccc",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100
    }}
  >
    CHECK
  </div>
);

class App extends Component {
  state = { blocks: [], selectedBlockIds: [] };

  render() {
    const { blocks, selectedBlockIds } = this.state;
    const selectedBlocks = blocks.filter(block =>
      selectedBlockIds.includes(block.id)
    );
    const unselectedBlocks = blocks.filter(
      block => !selectedBlockIds.includes(block.id)
    );
    return (
      <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 1em" }}>
        <ProgressBar percent={50} />
        <SelectedBlocks blocks={selectedBlocks} />
        <UnselectedBlocks blocks={unselectedBlocks} />
        <CheckButton />
      </div>
    );
  }
}

export default App;

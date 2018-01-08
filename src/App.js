import React, { Component } from "react";
import questions from "./mockQuestions.json";

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

const Line = () => (
  <div
    style={{ background: "#ccc", width: "100%", height: 2, margin: "50px 0" }}
  />
);

const SelectedBlocks = ({ blocks, selectedBlockIds, unselectBlock }) => {
  const selectedBlocks = selectedBlockIds.map(blockId =>
    blocks.find(b => b.id === blockId)
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "30%",
        position: "relative",
        alignItems: "flex-start",
        alignContent: "flex-start"
      }}
    >
      <div style={{ position: "absolute", width: "100%" }}>
        <Line />
        <Line />
        <Line />
      </div>
      {selectedBlocks.map(block => (
        <div
          key={block.id}
          style={{
            background: "white",
            color: "black",
            padding: 10,
            margin: 5,
            cursor: "pointer"
          }}
          onClick={() => unselectBlock(block.id)}
        >
          {block.text}
        </div>
      ))}
    </div>
  );
};

const UnselectedBlocks = ({ blocks, selectedBlockIds, selectBlock }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignContent: "center",
      height: "30%"
    }}
  >
    {blocks.map(block => {
      const isSelected = selectedBlockIds.includes(block.id);
      return (
        <div
          key={block.id}
          style={{
            background: isSelected ? "#aaa" : "white",
            color: isSelected ? "#aaa" : "black",
            padding: 10,
            margin: 5,
            cursor: "pointer"
          }}
          onClick={() => {
            if (!isSelected) {
              selectBlock(block.id);
            }
          }}
        >
          {block.text}
        </div>
      );
    })}
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
      borderRadius: 100,
      cursor: "pointer"
    }}
  >
    CHECK
  </div>
);

const selectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.concat(blockId)
});

const unselectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.filter(id => id !== blockId)
});

class App extends Component {
  state = {
    correctAnswers: 5,
    blocks: questions[0].blocks,
    selectedBlockIds: []
  };

  render() {
    const { correctAnswers, blocks, selectedBlockIds } = this.state;
    return (
      <div
        style={{
          maxWidth: 500,
          margin: "0 auto",
          padding: "0 1em",
          height: "100vh"
        }}
      >
        <ProgressBar percent={correctAnswers / 10 * 100} />
        <SelectedBlocks
          blocks={blocks}
          selectedBlockIds={selectedBlockIds}
          unselectBlock={id => this.setState(unselectBlock(id))}
        />
        <UnselectedBlocks
          blocks={blocks}
          selectedBlockIds={selectedBlockIds}
          selectBlock={id => this.setState(selectBlock(id))}
        />
        <CheckButton />
      </div>
    );
  }
}

export default App;

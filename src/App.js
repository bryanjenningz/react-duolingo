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
      <div style={{ position: "absolute", width: "100%", zIndex: -1 }}>
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

const buttonState = {
  cannotAnswer: 1,
  canAnswer: 2,
  answered: 3
};

const CheckButton = ({ state }) => (
  <div
    style={{
      width: "100%",
      color: state === buttonState.cannotAnswer ? "#888" : "white",
      background: state === buttonState.cannotAnswer ? "#ccc" : "#13c713",
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      cursor: "pointer"
    }}
  >
    {state === buttonState.answered ? "CONTINUE" : "CHECK"}
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
    sentence: questions[0].sentence,
    blocks: questions[0].blocks,
    selectedBlockIds: [],
    answered: false
  };

  render() {
    const {
      correctAnswers,
      sentence,
      blocks,
      selectedBlockIds,
      answered
    } = this.state;
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
        <h1 style={{ textAlign: "center" }}>Translate this sentence</h1>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          {sentence.map(({ text }, i) => (
            <span
              key={i}
              style={{
                margin: 5,
                borderBottom: "1px dashed",
                paddingBottom: 5,
                cursor: "pointer"
              }}
            >
              {text}
            </span>
          ))}
        </div>
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
        <CheckButton
          state={
            answered
              ? buttonState.answered
              : selectedBlockIds.length === 0
                ? buttonState.cannotAnswer
                : buttonState.canAnswer
          }
        />
      </div>
    );
  }
}

export default App;

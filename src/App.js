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

const CheckButton = ({ state, checkAnswer, nextQuestion }) => (
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
    onClick={() => {
      if (state === buttonState.canAnswer) {
        checkAnswer();
      } else if (state === buttonState.answered) {
        nextQuestion();
      }
    }}
  >
    {state === buttonState.answered ? "CONTINUE" : "CHECK"}
  </div>
);

const Results = ({ answered, isCorrect, solution }) =>
  answered ? (
    <div
      style={{
        position: "absolute",
        left: "10%",
        width: "80%",
        top: "60%",
        height: 100,
        padding: 20,
        boxSizing: "border-box",
        color: isCorrect ? "green" : "red",
        background: isCorrect ? "lime" : "pink",
        textAlign: "center"
      }}
    >
      {isCorrect ? (
        <div style={{ fontSize: 24 }}>You are correct</div>
      ) : (
        <div>
          <div style={{ fontSize: 24 }}>Oops that's not correct.</div>
          <div>{solution}</div>
        </div>
      )}
    </div>
  ) : null;

const selectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.concat(blockId)
});

const unselectBlock = blockId => ({ selectedBlockIds }) => ({
  selectedBlockIds: selectedBlockIds.filter(id => id !== blockId)
});

const checkAnswer = ({
  correctAnswers,
  blocks,
  selectedBlockIds,
  solutions
}) => ({
  correctAnswers:
    correctAnswers +
    (solutions.includes(
      selectedBlockIds.map(id => blocks.find(b => b.id === id).text).join("")
    )
      ? 1
      : 0),
  answered: true
});

const nextQuestion = () => ({
  selectedBlockIds: [],
  answered: false
});

class App extends Component {
  state = {
    correctAnswers: 5,
    sentence: questions[0].sentence,
    solutions: questions[0].solutions,
    blocks: questions[0].blocks,
    selectedBlockIds: [],
    answered: false
  };

  render() {
    const {
      correctAnswers,
      sentence,
      solutions,
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
          checkAnswer={() => this.setState(checkAnswer)}
          nextQuestion={() => this.setState(nextQuestion)}
        />
        <Results
          answered={answered}
          isCorrect={solutions.includes(
            selectedBlockIds
              .map(id => blocks.find(b => b.id === id).text)
              .join("")
          )}
          solution={solutions[0]}
        />
      </div>
    );
  }
}

export default App;

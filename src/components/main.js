import Button from "react-bootstrap/Button";
import { useState } from "react";

function Main() {
  const [allValues, setAllValues] = useState({
    question: "",
    category: "",
    value: "",
    answer: "",
    answerVisible: false,
  });
  const [score, setScore] = useState(0);

  function watermelon(increment) {
    setScore(score + increment);
  }
  function reset (){
    window.location.reload();
  }

  async function getData() {
    fetch("http://jservice.io/api/random")
      .then((res) => res.json())
      .then((data) =>
        setAllValues({
          ...allValues,
          question: data[0].question,
          value: data[0].value,
          category: data[0].category.title,
          answer: data[0].answer,
          answerVisible: false,
        })
      )

      .catch((error) => console.log(error));
  }
  function showAnswer() {
    setAllValues({ ...allValues, answerVisible: true });
  }

  return (
    <div>
      <h1> Jeopardy </h1>
      <h3> Score:{score} </h3>
      <br />
      {/** The line below is ther because of the error react provided "Uncaught Invariant Violation: Too many re-renders. React limits the number of renders to prevent an infinite loop" */}
      <Button
        onClick={() => watermelon(1)}
        id="increaseButton"
        variant="primary"
        size="lg"
        active
      > Increase Score</Button>{" "}
      <Button
        onClick={() => watermelon(-1)}
        id="decreaseButton"
        variant="primary"
        size="lg"
        active
      > Decrease Score </Button>{" "}
      <Button onClick={reset} id="resetButton" variant="primary" size="lg" active>
        Reset Game
      </Button>{" "}
      <div id="jeopardyResults"></div>
      <div>
        <br />
        <h1> Question:{allValues.question} </h1>
        <br />
        <h2> Category:{allValues.category} </h2>
        <br />
        <h2> Points: {allValues.value} </h2>
        <br />
        <h2>
          {" "}
          Answer:{" "}
          {!allValues.answerVisible ? (
            <div> </div>
          ) : (
            <div>
              <div>{allValues.answer}</div>
            </div>
          )}{" "}
        </h2>
      </div>
      <Button
        onClick={getData}
        id="fetchButton"
        variant="primary"
        size="lg"
        active
      >
        Click Me, Or Don't
      </Button>{" "}
      <Button
        onClick={showAnswer}
        id="answerButton"
        variant="primary"
        size="lg"
        active
      >
        Giving Up?
      </Button>{" "}
    </div>
  );
}

export default Main;

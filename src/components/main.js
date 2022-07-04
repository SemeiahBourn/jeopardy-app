import Button from "react-bootstrap/Button";
import { useState } from "react";

function Main() {
  const [allValues, setAllValues] = useState({
    question: "",
    category: "",
    value: "",
    answer: "",
    answerVisible:false
  });
  
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
          answerVisible : false
        })
        
      )

      .catch((error) => console.log(error));

     
  }
  function showAnswer (){
setAllValues({...allValues, answerVisible: true})
   }

  return (
    <div>
      <h1> Jeopardy </h1>
      <br/>
      <div id="jeopardyResults"></div>
   
      
      <div>
       <h1> Question:{allValues.question} </h1> 
       <br/>
       <h2> Category:{allValues.category} </h2> 
       <br/>
        <h2> Points: {allValues.value} </h2>
        <br/>
        <h2> Answer: {!allValues.answerVisible ? (
        <div> </div> )
        :(
            <div>
                <div>{allValues.answer}</div>
            </div>
        )} </h2>
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


import Button from 'react-bootstrap/Button';
import {useState} from "react"



function Main () {
var [question, setQuestion]= useState("click the button for funzies")


 async function getData(){
    fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(data => setQuestion(data[0].question)
    )
    .catch(error => console.log(error))
}

    return(
<div>
    <h1> Jeopardy </h1>
    <div id="jeopardyResults"></div>
    <Button onClick={getData} id="fetchButton" variant="primary" size="lg" active>
        Click Me, Or Don't
      </Button>{' '}
      <div>
        {question}
      </div>

</div>

    )
}



export default Main;
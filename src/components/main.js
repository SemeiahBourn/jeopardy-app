
import Button from 'react-bootstrap/Button';
import {useState} from "react"



function Main () {
    const [allValues, setAllValues] = useState({
        question: '',
        category: '',
        value: '',
        answer: '',
       
    });




 async function getData(){
    fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(data => 
        setAllValues({...allValues, question :data[0].question,value :data[0].value, category :data[0].category.title, answer :data[0].answer}) 
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
        {allValues.question}{allValues.category}{allValues.value}{allValues.answer}
      </div>

</div>

    )
}



export default Main;

import Button from 'react-bootstrap/Button';

function Main (){

const getData = ()=>{
   
  fetch('http://jservice.io/api/random')
    .then(res => res.json())
    .then(data => {
      console.log(data[0].question)
    })
    .catch(error => console.log(error))
}

    return(
<div>
    <h1> Jeopardy </h1>
    <div id="jeopardyResults"></div>
    <Button onClick={getData}id="fetchButton" variant="primary" size="lg" active>
        Click Me, Or Don't
      </Button>{' '}
</div>
    )
}

export default Main;

import Button from 'react-bootstrap/Button';
import {component} from "react"

class Main extends component {
state = {
  answer: '',
  question:'',
  value:'',
  title:''  
}
    

render(){
    async function getData () {
        const url = "http://jservice.io/api/random";
      const response = await fetch (url);
      const data = await response.json();
      this.setState({answer: data[0]})
       
       
      }
    return(
<div>
    <h1> Jeopardy </h1>
    <div id="jeopardyResults"></div>
    <Button onClick={getData}id="fetchButton" variant="primary" size="lg" active>
        Click Me, Or Don't
      </Button>{' '}
     <div>{this.state.answer}</div>
     
</div>
    )
}

}

export default Main;
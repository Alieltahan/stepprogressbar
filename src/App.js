import { Component } from 'react';
import './App.css';


class App extends Component {
  state = { 
    step: 1
   } 

   stepMap = [1,2,3,4]
   handleNext=()=> {
     this.setState({step: this.state.step + 1})
   }
   
   handlePrev=()=> {
     this.setState({step: this.state.step - 1})
   }
   
   handleStyles=(i)=>{
     const {step} = this.state;
     return (step > i) ? 'step active complete  container' : (step<i)? 'step container' : 'step active  container';
   }
   handleProress = () =>{
    const {step} = this.state
    
    return ((step -1) / (this.stepMap.length-1)) * 100 ;
   }

    render() {
      const {step} = this.state;


    return (<>
      <div id="progress">
    <div 
    style={{width: `${this.handleProress()}%`}} 
    id="progress-bar"></div>
    <ul id="progress-num">
      {this.stepMap.map((s,i) => <div className='container'> <li key={s} className={this.handleStyles(i+1)}>
        {step <= s ? s : '✓'}
      </li></div> )}

    </ul>
  </div>
  <button  onClick={this.handlePrev} className="btn" disabled={step === 1}>Prev</button>
  <button onClick={this.handleNext} className="btn">Next</button>
    </>);
  }
}
 
export default App;
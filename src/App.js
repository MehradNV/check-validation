import React from 'react';
import './App.css';

class App extends React.Component {


  state={
    number:'',
    floatingpoint:'',
    valid:true,
    show:false,
    numbers:[]
  };

  OnChange=(e)=>{
    const number=e.target.value;
    const check=number.split('.');
    this.setState({number:check[0]});
    this.setState({floatingpoint:check[1]});

    if(check[0]<1000)
      this.setState({valid:false});
    else
      this.setState({valid:true})

    if(number===''){
      this.setState({valid:true});
    }

    if(check[1]===undefined)
      this.setState({floatingpoint:0})

    if(check[1]>100)
      this.setState({valid:false})
  };

  Submit=(e)=>{
    e.preventDefault();
    if(this.state.valid){}
      const numbers=this.state.numbers;
      numbers.push(this.state.number+'.'+this.state.floatingpoint);
      this.setState(numbers)
  };

  render() {
    return (
        <div>
          <p>number:</p>
          <input type='number' onChange={this.OnChange} autoFocus='true'/>
          <button onClick={this.Submit}>submit</button>
          {this.state.valid === false && <p color='red'>number must be biger than 1000 and with 2 floating point at most</p>}
          <hr/>
          <p>numbers added so far:</p>
          <ul>{this.state.numbers.map((number)=>(<li>{number}</li>))}</ul>
        </div>
    );
  }
}

export default App;

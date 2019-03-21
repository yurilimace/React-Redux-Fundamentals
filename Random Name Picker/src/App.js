import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './grid.jsx'
import Nav from './navbar.jsx'



const sound = require('./Assets/Sad.mp3')



class App extends Component {
 constructor(props){
   super(props)
   this.state = {value:'' , lucky:''}

   this.handleChange = this.handleChange.bind(this)
   this.handleClick = this.handleClick.bind(this)
 } 
 
 handleChange(event){
   this.setState({value:event.target.value})
 }

 handleClick(){
   const change = this.state.value.toString().split(' ')
   const number = Math.floor(Math.random() * change.length)
   this.setState({lucky:change[number]})  
 }

 //criar um componente botão onde o a props do componente botão vai ser o state do App.js
// ou pode criar o metodo e alterar o estado novamente mudando somente o valor do lucky e printar ele na tela 

  render() {
    const list = this.state.lucky
    let gag
    if(list !== '')
    {
       gag =  <img src = "https://j.gifs.com/5QQAOx.gif"></img>
       this.green.play()

    }
    return (
      <div>
        <Grid>
          <Nav />
          <h2 className = "Center-text"> Put the names divided by the space </h2>
          <input className = "Center" onChange ={this.handleChange}></input>
        </Grid>
        <Grid>
          <button  className = "btn btn-danger offset-3.3 button" onClick = {this.handleClick}> <h4>Papoca</h4> </button>
          <h1 className = "Center-text label  ">{this.state.lucky}</h1>
          <audio ref={(green) => { this.green = green; }}>
			      <source src={sound} type="audio/mpeg" ></source>
		      </audio>
          {gag}
        </Grid>
      </div>
    );
  }
}

export default App;

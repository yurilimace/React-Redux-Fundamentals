import React, { Component } from 'react';
import './App.css';
import Grid from './Components/grid'
import Button from './Components/buttons'
import Navbar from './Components/navbar'
import Table from './Components/table'
class App extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(){
    console.log("Clickado")
  }

  render() {
    return (
      <div>
        <Grid columns = 'col-xl-12'>
          <Navbar/>
        </Grid>
        <Grid columns = 'col-xl-12 offset-4'>
          <input className='col-xl-4'  placeholder ="Add a title that you gonna reading"></input>
          <Button btn= 'btn btn-primary btn-sm'  icon ='plus' handleClick = {this.handleClick} ></Button>
          <Button btn='btn btn-danger btn-sm' icon = 'search'></Button>
        </Grid>
        <Grid>
          <Table style = "col-xl-6 offset-3"/>
        </Grid> 
      </div>

      
     
    );
  }
}

export default App;

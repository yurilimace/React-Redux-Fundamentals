import React,{Component} from 'react'
import Grid from '../template/grid.jsx'
import Iconbutton from '../template/iconbutton.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeDescription,search,add} from './todoActions'


class todoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if(e.key ==='Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        }
        else if(e.key ==='Escape'){
            this.props.handleClear
        }

    }

    render(){
        const{add,description} = this.props
        return(
            <div role ='form' className = 'todoForm'>
                <Grid cols = '12 9 8 ' >
                    <input id = 'descpription' className = 'form-control' placeholder = 'Add a task' 
                    value ={this.props.description} onChange = {this.props.changeDescription} onKeyUp={this.keyHandler}></input>
                </Grid>


                <Grid cols = '12 3 2'>
                    <Iconbutton style = 'primary' icon ='plus' onClick = {()=>add(description)}></Iconbutton>
                    <Iconbutton style = 'info' icon = 'search' onClick ={this.props.handleSearch} ></Iconbutton>

                </Grid>
            </div>

        )
    }
}



const mapStatetoProps = state =>({description:state.todo.description})

const mapDispatchtoProps = dispatch =>
    bindActionCreators({changeDescription,search,add},dispatch)

export default connect(mapStatetoProps,mapDispatchtoProps)(todoForm)
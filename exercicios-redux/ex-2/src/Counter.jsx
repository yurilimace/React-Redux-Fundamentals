import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Inc,Dec,Change} from './counterActions'

class App extends Component{
    render(){
        return(
            <div>
               <h2>{this.props.number}</h2>
               <input type='number' value={this.props.step} onChange={this.props.Change}></input>
               <button onClick={this.props.Inc} >INC + {this.props.step}</button>
               <button onClick={this.props.Dec} >DEC - {this.props.step}</button>
            </div>
        )
    }
}
//map state values to component props

const mapStatetoProps = (state) => ({
    number:state.counter.number,
    step:state.counter.step
})

//map actions to component props
const mapDispatchToProps = (dispatch) => (
    bindActionCreators({Inc,Dec,Change},dispatch)
)

 



export default connect(mapStatetoProps,mapDispatchToProps)(App)

import React from 'react'
import {Route,Redirect} from 'react-router'
import {HashRouter,Switch} from 'react-router-dom'
import App from '../App'
import About from '../Components/About'

export default props =>(
   <HashRouter>
       <Switch>
         <Route path = '/home' component = {App}/>    
         <Route path ='/about' component = {About}/>
         <Redirect from ='*' to ='/home'/>
       </Switch>
   </HashRouter>
)

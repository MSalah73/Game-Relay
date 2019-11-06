import React, {Component} from 'react'
import Creators from'./Creators'
import Developers from './Developers'
import Home from './Home'
import Library from './Library'
import Error from './Error'
import {
  Route,
  BrowserRouter as BRouter,
  Switch
} from 'react-router-dom'
export default class Router extends Component {
	render() {
		return (
			<div>
		    <BRouter>
		      <Switch>
		        <Route exact path="/gamelibrary" component={Library}/>
		        <Route exact path="/developers" component={Developers}/>
		        <Route exact path="/creators" component={Creators}/>
		        <Route exact path="/" component={Home}/>
		        <Route path="*" component={Error}/>
		      </Switch>
		    </BRouter>		
			</div>
		)
	}
}
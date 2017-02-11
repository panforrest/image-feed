import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Feed } from './Components'

class App extends Component {

    render() {
    	return (
    		<div>
    		     React App
    		     <Feed />

    		</div>

    	)
    }

} 

ReactDOM.render(<App />, document.getElementById('root'))
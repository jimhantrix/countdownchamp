import React, { Component } from 'react';
import './App.css';


class App extends Component {
	 
	 constructor(props) {

	 	super(props);
	 	this.state = {

	 	deadline: 'December 25, 2018'

	 	}

	 }
	
	render() {

	return(
			<div className="App">

			
<div className='App-title'> Count down to {this.state.deadline}</div>

				<div>
					<div className="Clock-days"> 14 Days </div>
					<div className="Clock-hours"> 30 hours</div>
					<div className="Clock-Minutes"> 15 minutes</div>
					<div className="Clock-seconds"> 20 seconds</div>
				</div>

				<div>

					<input placeholder='new date' />

					<button>Submit</button> 

				</div>
			</div>
		)

	}
}
export default App;

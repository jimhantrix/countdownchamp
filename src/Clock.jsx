import React, { Component } from 'react';

import './App.css';

class Clock extends Component {

	
	constructor(props) {

	super(props);

	this.state = {

		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 



	  }
	}


	
	render() {

	<div> 
		<div className="Clock-days">{this.state.days} 14 Days </div>
		<div className="Clock-hours">{this.state.hours} 30 hours</div>
		<div className="Clock-minutes">{this.state.minutes} 15 minutes</div>
		<div className="Clock-seconds">{this.state.seconds}20 seconds</div>
	</div>


	}

}

export default Clock; 
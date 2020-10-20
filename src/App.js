import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Counters from './components/Counters';

class App extends Component {
	state = {
		counter: [
			{ id: 1, val: 3 },
			{ id: 2, val: 0 },
			{ id: 3, val: 0 },
			{ id: 4, val: 0 },
		],
	};

	handleIncrement = (counters) => {
		const counter = [...this.state.counter]; //copy the counter array in counter const
		const index = counter.indexOf(counters); //get the index of counter that is passed as an argument
		counter[index] = { ...counters }; // set the value of the counter at that index
		counter[index].val++; //update the value of counter
		this.setState({ counter });
	};

	handleDecrement = (counters) => {
		const counter = [...this.state.counter]; //copy the counter array in counter const
		const index = counter.indexOf(counters); //get the index of counter that is passed as an argument
		counter[index] = { ...counters }; // set the value of the counter at that index
		counter[index].val--; //update the value of counter
		this.setState({ counter });
	};

	handleReset = () => {
		const count = this.state.counter.map((c) => (c.val = 0));
		this.setState({ count });
	};
	handleDelete = (id) => {
		const counter = this.state.counter.filter((c) => c.id !== id);
		this.setState({ counter });
	};

	render() {
		return (
			<>
				<Navbar value={this.state.counter.filter((c) => c.val > 0).length} />
				<main className="container">
					<Counters
						 onDecrement={this.handleDecrement}
						counter={this.state.counter}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</>
		);
	}
}

export default App;

import React, { Component } from 'react';

class Counter extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClass()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-secondary btn-sm">
						+
					</button>

					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						className="btn btn-secondary btn-sm m-2"
						disabled={this.props.counter.val == 0 ? 'disabled' : ''}>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm m-2">
						Delete
					</button>
				</div>
			</div>
		);
	}
	getBadgeClass() {
		let classes = 'badge m-2 badge-';
		classes += this.props.counter.val === 0 ? 'warning' : 'primary';
		return classes;
	}
	formatCount() {
		const { val } = this.props.counter;
		return val === 0 ? 'zero' : val;
	}
}
export default Counter;

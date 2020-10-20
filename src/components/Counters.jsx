import React from 'react';
import Counter from './Counter';
 

const Counters = ({ onReset, onDelete, onIncrement, counter, onDecrement }) => {
	return (
		<div>
			<button className="btn btn-primary btn-sm m-2" onClick={onReset}>
				Reset
			</button>
			{counter.map((counter) => (
				<Counter
					onDecrement={onDecrement}
					key={counter.id}
					onDelete={onDelete}
					counter={counter}
					onIncrement={onIncrement}
				/>
			))}
		</div>
	);
};
export default Counters;

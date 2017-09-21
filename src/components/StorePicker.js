import React from 'react';
import PropTypes from 'prop-types';

class StorePicker extends React.Component{

	goToStore(event){
		event.preventDefault();
		const id = this.storeInput.value;
		this.context.router.history.push(`/store/${id}`);
	}

	render(){
		return (
			<form action="" className="store-selector" onSubmit={(e) => this.goToStore(e)}>
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store Name" ref={(input) => {this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
			</form>	
		)
	}
}

StorePicker.contextTypes = {
	router: PropTypes.object
}

export default StorePicker;
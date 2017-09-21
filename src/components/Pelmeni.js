import React from 'react';
import PropTypes from 'prop-types';
import { Item, Dimmer, Header, Button, Icon } from 'semantic-ui-react';

class Pelmeni extends React.Component{

    state = {
        pelmeni: 0
    }

	goToStore(event){
		event.preventDefault();
		const id = this.storeInput.value;
		this.context.router.history.push(`/store/${id}`);
    }
    
    eat(){
        let p = this.state.pelmeni;
        p++;
        this.setState({ pelmeni: p });
    }

	render(){
		return (

            <div>
                <Button onClick={this.eat.bind(this)}><Icon name="add circle" size="large"/></Button>  
                <h1>Съедено пельменей: {this.state.pelmeni}</h1>
            </div>
			
		)
	}
}

export default Pelmeni;
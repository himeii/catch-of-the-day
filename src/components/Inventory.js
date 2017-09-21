import React from 'react';
import AddFishForm from "./AddFishForm";
import { Header, Button } from 'semantic-ui-react';


class Inventory extends React.Component{

    render(){
        return (
            <div className="inventory">
                <Header as="h1" className = "section">
                    Inventory
                </Header>
                <AddFishForm addFish = {this.props.addFish}/>
                <Button onClick={this.props.loadDefaults}>Load defaults</Button>
            </div>
        )
    }

}

export default Inventory;
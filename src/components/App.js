import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import base from '../base';

import samples from "../sample-fishes.js";

import { Container, Grid, ItemGroup } from 'semantic-ui-react';

class App extends React.Component{

    constructor(){
        super();

        this.addFish = this.addFish.bind(this);
        this.loadDefaults = this.loadDefaults.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteItem = this.deleteItem.bind(this);


        this.state = {
            fishes: {},
            order: {}
        }
    }

    componentWillMount(){
        const localStorageOrder = localStorage.getItem(`order-${this.props.match.params.storeId}`);
        const localStorageFishes = localStorage.getItem(`fishes-${this.props.match.params.storeId}`);
        if (localStorageOrder && localStorageFishes){
            console.log('Component will mount');
            
            this.setState({ fishes: JSON.parse(localStorageFishes) ,order: JSON.parse(localStorageOrder)});
        }


        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
            {
                context: this,
                state: 'fishes'
            })

        
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order))
        localStorage.setItem(`fishes-${this.props.match.params.storeId}`, JSON.stringify(nextState.fishes))
    }

    addFish(fish){
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        this.setState({ fishes });
    }

    loadDefaults(){
        this.setState({fishes : samples});
    }

    addToOrder(key){
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        // const fishes = {...this.state.fishes};
        // fishes[key].status = order[key] > 10 ?  "unavailable" : "available";
        this.setState({ order });
    }

    deleteItem(item){
        const order = {...this.state.order};
        delete order[item];
        this.setState({ order });
    }

    render(){
        return (
            <Container>
                <Grid columns={3}>
                    <Grid.Column>
                        <div className="menu">
                            <Header/> 
                            <ItemGroup>

                            {
                                Object
                                    .keys(this.state.fishes)
                                    .map(key => <Fish key={key} details={this.state.fishes[key]}
                                    addToOrder = {this.addToOrder} index={key} deleteItem = {this.deleteItem}/>)
                            }
                            </ItemGroup>
                        </div>

                    </Grid.Column>
                    <Grid.Column>
                        <Order 
                        fishes = {this.state.fishes} 
                        order={this.state.order} 
                        deleteItem = {this.deleteItem}
                        params = {this.props.match.params}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Inventory addFish={this.addFish} 
                                   loadDefaults = {this.loadDefaults}
                                   />
                    </Grid.Column>
                </Grid>
            </Container>
            
        )
    }

}

export default App;
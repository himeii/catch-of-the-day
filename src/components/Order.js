import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { formatPrice } from '../helpers.js';


class Order extends React.Component{

    renderOrder(key){
        console.log(key);
        console.log(this.props);
        console.log(this.props.fishes);
        console.log(this.props.fishes[key]);
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if (isAvailable){
            return (<li key={key}>
                {`${count}lbs ${fish.name}`} 
                <Icon name="remove" className="delete" onClick={() => this.deleteFromOrder(key)}/>
                <span className = "right">
                    {formatPrice(fish.price * count)}
                </span>
                
            </li>)
        }
        return(<li>
            Sorry, not available
        </li>)
        
    }

    deleteFromOrder(e){
        this.props.deleteItem(e);
    }

    render(){
        
        const { fishes, order } = this.props;
        
        const total_price = Object.keys(order).reduce((prevTotal, key) => {
            const fish = fishes[key];
            const count = order[key];
            const isAvailable = fish && fish.status === 'available';
            if (isAvailable) {
                return prevTotal + fish.price * count;
            }

            return prevTotal;
        }, 0);
        console.log(order);
        return (
            <div className="order">
                <Header as="h1" className="section">
                    Order
                </Header>
                <ul>
                    {
                        Object.keys(order).map((key) => this.renderOrder(key))
                    }
                </ul>
                    
                <div className="total">
                    Total: 
                    <span className="right">
                        <b>
                             {formatPrice(total_price)} 
                        </b>
                    </span>  
                </div>        
            </div>
        )
    }

}

export default Order;
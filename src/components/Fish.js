import React from 'react';
import { Item, Dimmer, Icon } from 'semantic-ui-react';



class Fish extends React.Component{

    formatPrice(cents) {
        return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }   

    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    render(){
        const { active } = this.state;
        const { details, index } = this.props;
        
        let present = details.status === "available";

        let content = present ?
        (
          <div>
            <Icon name="add circle" size='huge'/>
          </div>
        ) : 
        (
          <div>
            <Icon name="delete" size='huge'/>
          </div>
        );
     
        
        return (
            <Item>
                 <Dimmer.Dimmable as={Item.Image} 
                dimmed = {active} 
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                onClick = {() => {
                    if (present)
                    this.props.addToOrder(index);
                    else this.props.deleteItem(this.props.index);
                    }}
                
                blurring
                shape = "rounded"
                fluid
                src={details.image}/>

                <Item.Content>
                    
                    <Item.Header as='a'>
                        {details.name}
                    </Item.Header>
                    <Item.Meta>
                        <span className={details.status + "-span"}>
                            {details.status === 'available' ? this.formatPrice(details.price) : "SOLD OUT"}
                        </span>
                    </Item.Meta>
                    <Item.Description>
                        <p>
                            {details.description}
                        </p>
                    </Item.Description>
                </Item.Content>
                
            </Item>
        )
    }

}

export default Fish;
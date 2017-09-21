import React from 'react';
import { Button, Form, FormGroup } from 'semantic-ui-react';

class AddFishForm extends React.Component{

    constructor(){
        super();
        this.state = 
        {
                name: "",    
                price: "",    
                status: "",    
                description: "",
                image: "",
        }
    }

    createFish(event){
        event.preventDefault();
        const fish = {
            name: this.state.name,
            price: this.state.price,
            status: this.state.status,
            description: this.state.description,
            image: this.state.image,
        }
        this.props.addFish(fish);
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        this.createFish(event);
        this.setState({ name: "", price: "", status: "", description: "", image: "", })
    }

    render(){

        const {
            name,price,status,description,image,
        } = this.state;

        const options = [
                {
                    key: "available",
                    value: "available",
                    text: "Available"
                },
                {
                    key: "unavailable",
                    value: "unavailable",
                    text: "Sold Out"
                },
            ]

        return (
            <Form className="fish-edit" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Form.Input type="text" width={8} onChange={this.handleChange} name="name" value={name} label="Fish Name" placeholder="Enter Fish Name"/>
                    <Form.Input type="text" width={8} onChange={this.handleChange} name="price" value={price}  label="Fish Price" placeholder="Enter Fish Price"/>
                </FormGroup>

                   
                
                    <Form.Select name="status" onChange={this.handleChange} value={status} options={options}  label="Fish Status" placeholder="Enter Fish Status"/>
                

                
                    <Form.TextArea name="description" onChange={this.handleChange} value={description}  label="Fish Description" placeholder="Enter Fish Description"/>
                
                    <Form.Input name="image" onChange={this.handleChange} value={image} type="text"  label="Fish Image Link" placeholder="Enter Fish Image Link"/>
                    
                
                <Button className="submit">+ Add fish</Button>
                
            </Form>
        )
    }

}

export default AddFishForm;
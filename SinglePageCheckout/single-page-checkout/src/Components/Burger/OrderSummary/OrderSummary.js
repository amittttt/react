import React from 'react';
import Auxiliary from '../../../Container/hoc/Auxiliary';
import Button from '../../../Container/UI/Button/Button'

class OrderSummary extends React.Component {
    componentWillUpdate(){
        console.log("Update the Order Summary Component!!!!")
    }
    render(){
        const ingredientSummary =Object.keys(this.props.ingredients).map(igKey=>{
            return(
                <li>
                    <span style={{testTrasnform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            );
            });
            return(
                <Auxiliary>
                    <h3>Your Order</h3>
                    <p>A delicious burger with the following ingredients:</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p>Total Price: <strong>{this.props.price.toFixed(2)}</strong></p>
                    <p>Continue to Checkout?</p>
                    <Button btnType="Danger" clicked={this.props.modalClosed}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.Continue}>CONTINUE</Button>
                </Auxiliary>
            );
    }
    
    
}
export default OrderSummary;
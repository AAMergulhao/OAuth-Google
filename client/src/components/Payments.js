import React, {Component} from "react";
import StripeCheckout from "react-stripe-checkout";
import * as actions from "../actions";
import {connect} from "react-redux";

class Payments extends Component {
    render(){
        return(
            <StripeCheckout 
                name="Nexus"
                description="$5 for email credits"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                >
                <a class="waves-effect waves-light btn">
                <i class="material-icons left">credit_card</i>
                ADD CREDITS</a>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
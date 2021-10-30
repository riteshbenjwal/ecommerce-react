import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JqCXmSC5H2qgNdlSt4HoDpFmtbUulvnJbKq1HO3DicaczKB0VN2LSA2Pw3ymhbGEEBDmlnsFKVlCtGgmEfac1jM00nYBqZtQP';
    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'   
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={token => console.log(token)}
        stripeKey={publishableKey}      

        
       


        
        
        />
    )
}

export default StripeCheckoutButton;

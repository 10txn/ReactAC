import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51RQUc9RTSoBLRmapi8M8ONV7wCKRkCcaOxX23NeImFvxNBVdQyzlUYBPhP7Qo0Gl11jWJYdh7dJ6Rf88xe9ySfzs00bIWtwnAp');

function Checkout(){

    const handleCheckout = async () => {
        try{
            const response = await fetch('http://localhost:3001/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const {id} = await response.json();

            // load stripe and redirect user to checkout
            const stripe = await stripePromise;
            await stripe.redirectToCheckout({ sessionId: id});
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <h1>Buy a Tier 1 monthly subscription.</h1>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
    )
}

export default Checkout;
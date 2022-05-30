import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';

const CheckoutForm = ({order}) => {
    const stripe =useStripe();
    const elements = useElements();
    const{_id,price, name,email}=order;
    const [cardError,setCardError]=useState('');
    const [success,setSuccess]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransactionId]=useState('');
    const [clientSecret,setClientSecret] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify({price})
           
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    },[price])


    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card= elements.getElement(CardElement);
        if(card == null){
            return;
        }
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
        });
        
            setCardError(error?.message || '');
            setSuccess('');
            setProcessing(true);

            const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
                clientSecret ,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: name,
                      email:email
                    },
                  },
                },
              );
              if(intentError){
                  setCardError(intentError?.message);
                  setProcessing(false);
              }
              else{
                  setCardError('');
                  setTransactionId(paymentIntent.id);
                  console.log(paymentIntent)
                  setSuccess('Congrats! your payment is success.');
                  
                  const payment = {
                      appointment:_id,
                      transactionId: paymentIntent.id
                  }
                  fetch(`http://localhost:5000/order/${_id}`,{
                      method:'PATCH',
                      headers:{
                        'content-type':'application/json',
                        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                      },
                      body: JSON.stringify(payment)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    setProcessing(false);
                  })
              }
       
    }

    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button className=' mt-4 btn btn-xs btn-success' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
          cardError && <p className='text-red-500'>{cardError}</p>
      }
       {
          success && <div className='text-green-500'>
              <p>{success}</p>
              <p>Your transaction Id : <span className='text-yellow-600'>{transactionId}</span> </p>
          </div>
      }
       </>
    );
};

export default CheckoutForm;
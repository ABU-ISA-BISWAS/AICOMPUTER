// import React from 'react';
// import {loadStripe} from '@stripe/stripe-js';
// import { useQuery } from 'react-query';
// import { useParams } from 'react-router-dom';
// import Loading from '../Shared/Loading';

// import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js';

  
// const stripePromise = loadStripe('pk_test_51L3wRuDyuXL0kAMD3cphavXLnw1gEqOUigSPpw6ZD6JG6Hy9zaKWenWK6gDsLc9uEyaPaikbDsO412aTUvdIJayU00Leok4N8P');
// const Payment = () => {
//     const {id}=useParams();
//     const url = `http://localhost:5000/order/${id}`;
//     const {data: order, isLoading}=useQuery(['order',id], () => fetch(url,{
//         method:'GET',
//         headers:{
//           'authorization':`Bearer ${localStorage.getItem('accessToken')}`
//         }
//     }).then(res=>res.json()));
//     if(isLoading){
//         return <Loading></Loading>
//     }
//     return (
        
//   <div>
//   <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
//   <div class="card-body">
//       <p className='text-secondary'>Hello, {order.name}</p>
//     <h2 class="card-title">Please Pay for {order.productName}</h2>
//     <p>Pay : ${order.price} </p>
//   </div>
// </div>
//     <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
//       <div class="card-body">
//       <Elements stripe={stripePromise}>
//     <CheckoutForm order={order} />
//   </Elements>
      
        
//       </div>
//     </div>
//   </div>

//     );
// };

// export default Payment;
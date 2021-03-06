import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';


const PlaceOrderModal = ({ order, setOrder }) => {
    const { _id, name, price } = order;
    const [user, loading] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    
        fetch('https://sheltered-bayou-65908.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    toast(`successfully order has been placed`);
                }
                else {

                }

                setOrder(null);
            })


    };

    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle ">
                <div class="modal-box bg-slate-900 w-10/12">
                    <label htmlFor="order-modal" class="btn text-red-500 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Order for:{name}</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <label className='text-white'>Product Name: </label>
                    <br />
                    <input {...register("productName", { required: true })} type="text" readOnly  value={name} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label className='text-white'>Your Name: </label>
                    <br />
                    <input {...register("name", { required: true })} type="text" readOnly value={user.displayName} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label className='text-white'>Your Email: </label>
                    <br />
                    <input {...register("email", { required: true })} type="email" readOnly value={user.email} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label className='text-white'>Price: </label>
                    <br />
                    <input {...register("price", { required: true })} type="number" readOnly value={price} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <label className='text-white'>Order Quantity: </label>
                    <br />
                    <input {...register("orderAmount", {
                                min: {
                                    value: order.minOrderQuantity,
                                    message: 'Order quantity Must be 50 or more'
                                },

                                max: {
                                    value: order.quantity,
                                    message: 'Order quantity Must be less than or equal available Quantity'
                                }
                            })} type="number" placeholder="Order Quantity must be 50 or more" class="input input-bordered w-full max-w-xs mb-2" />
                            <label class="label">
                                {errors.orderAmount?.type === 'min' && <span class="font-serif text-red-500">{errors.orderAmount.message}</span>}
                                {errors.orderAmount?.type === 'max' && <span class="font-serif text-red-500">{errors.orderAmount.message}</span>}
                            </label>
                    
                    <div>
                    <label className='text-white'>Phone: </label>
                    <br />
                    <input {...register("phone", { required: true })} type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label className='text-white'>Your Address: </label>
                    <br />
                    <input {...register("address", { required: true })} type="text" placeholder="Your address" class="input input-bordered w-full max-w-xs mb-2" />
                    </div>


                    <input type="submit" value="Place Order"  class="btn btn-secondary w-1/3 mr-1 max-w-xs" />
                    <input type="reset" value="Reset" class="btn text-white bg-red-500 w-1/3  max-w-xs"/>

                    </form>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PlaceOrderModal;
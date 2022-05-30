import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../firebase.init';


const PlaceOrderModal = ({ order, setOrder }) => {
    const { _id, name, price } = order;
    const [user, loading] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    
        fetch('http://localhost:5000/order', {
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
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Order for:{name}</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                    <label>Product Name: </label>
                    <input {...register("productName", { required: true })} type="text"  value={order.name} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label>Your Name: </label>
                    <input {...register("name", { required: true })} type="text" value={user.displayName} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label>Your Email: </label>
                    <input {...register("email", { required: true })} type="email" value={user.email} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label>Price: </label>
                    <input {...register("price", { required: true })} type="number" value={order.price} class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <label>Order Quantity: </label>
                    <input {...register("orderAmount", {
                                min: {
                                    value: order.minOrderQuantity,
                                    message: 'Order quantity Must be 50 or more'
                                },

                                max: {
                                    value: order.quantity,
                                    message: 'Order quantity Must be less than or equal available Quantity'
                                }
                            })} type="number" class="input input-bordered w-full max-w-xs mb-2" defaultValue={order.minOrderQuantity} />
                            <label class="label">
                                {errors.orderAmount?.type === 'min' && <span class="font-serif text-red-500">{errors.orderAmount.message}</span>}
                                {errors.orderAmount?.type === 'max' && <span class="font-serif text-red-500">{errors.orderAmount.message}</span>}
                            </label>
                    
                    <div>
                    <label>Phone: </label>
                    <input {...register("phone", { required: true })} type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-2" />
                    </div>
                    <div>
                    <label>Your Address: </label>
                    <input {...register("address", { required: true })} type="text" placeholder="Your address" class="input input-bordered w-full max-w-xs mb-2" />
                    </div>


                    <input type="submit" value="Submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />

                    </form>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default PlaceOrderModal;
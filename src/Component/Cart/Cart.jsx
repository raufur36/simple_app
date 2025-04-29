import React from 'react';
import { toast } from 'react-toastify';
const Cart = ({ item, removeItem }) => {


    const { img, product_name, product_price, id } = item;
    const notify = () => toast("🌟 Item Removed to your Lists!");
    return (
        <div>
            <div className='mt-[10px] ' >
                <div className='' >
                    <div className='flex items-center gap-3 p-2 border-2 mx-2 my-2'>
                        <div>
                            <img className='w-20 h-20 rounded border-2' src={img} alt="" />
                        </div>
                        <div className='w-48 text-start' >
                            <h1 className='font-bold' >{product_name}</h1>
                            <h1 className='font-bold' ><span>$</span> {product_price}</h1>
                            <h1 className='' ><span>Bid Count:</span> { }</h1>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    removeItem(id);
                                    notify();
                                }}

                                type="button"
                                className="text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none ml-20"
                                aria-label="Close"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
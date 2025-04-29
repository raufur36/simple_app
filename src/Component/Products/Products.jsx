import React, { useState } from 'react';
import { IoHeartSharp } from "react-icons/io5";
const Products = ({ item, AddToCart, notify }) => {
    const [isDisabled, setIsdisabled] = useState(false);
    const addCart = () => {
        AddToCart(item);
        notify();
        setIsdisabled(true);

    }
    return (


        <>
            <div className='flex relative bg-white mr-[500px] justify-between gap-6 ms-10 mr-10  border-b-2 border-gray-200' >
                <div className='' >
                    <table className="flex ">
                        <tbody className="flex">
                            <tr className="flex gap-10 text-black ">
                                <td className="flex gap-10 justify-center items-center">
                                    <img className="w-30 my-2 h-20 pl-5" src={item.img} alt="" />
                                    <h1 className='w-[430px]' >{item.product_name}</h1>
                                </td>
                                <td className='flex justify-center items-center text-center ml-[90px] w-[200px]  ' >{item.product_price}</td>
                                <td className='flex justify-center items-center text-center ml-[60px]  w-[80px] ' >{item.time_left}</td>
                                <td className=' flex justify-center items-center text-center ml-[110px] w-[30px]' >
                                    <button
                                        onClick={addCart}
                                        disabled={isDisabled}
                                        className={`${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} other-class`}
>
                                        <IoHeartSharp
                                            size={24}
                                            className={isDisabled ? "text-gray-400" : "text-red-500"}
                                        />
                                    </button>



                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >

        </>


    );
};

export default Products;

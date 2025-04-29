import { Suspense, TotalPrice, useEffect, useState } from 'react'
import './App.css'
import Basket from './Component/Basket/Basket'
import Carosoule from './Component/Carosoule'
import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import { IoIosHeartEmpty } from "react-icons/io";
import Footer from './Footer/Footer'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Component/Cart/Cart'


function App() {
  const [AddData, setAddItems] = useState([]);
  const [ProductValue, setProductValue] = useState(0);
  const [items, setItems] = useState([]);
  const notify = () => toast("🦄 Item Added to Your Favorite Lists!");
  useEffect(() => {
    fetch('Products.json')
      .then(response => response.json())
      .then(data => setItems(data))
  }, []);

  const AddToCart = (item) => {
    const { product_price } = item;
    const ProductAddItems = [...AddData, item];
    setAddItems(ProductAddItems);
    const sum = parseFloat(product_price) + ProductValue;
    setProductValue(Number(sum.toFixed(2)));

  };

  const removeItem = (id) => {
    const newCart = AddData.filter(item => item.id !== id);
    setAddItems(newCart);
  }



  return (
    <>
      <Navbar></Navbar>
      <Carosoule></Carosoule>
      <Basket></Basket>
      <Suspense fallback={<h1>Loading...</h1>} >
        <div>
          {
            items.map((item) => <Products key={item.id} item={item} AddToCart={AddToCart} TotalPrice={TotalPrice} notify={notify} Products={Products}  ></Products>)
          }
        </div>

      </Suspense>
      {/* <Cart></Cart> */}
      <div className='h-auto rounded-2xl bg-white text-black  text-center w-[24%] relative bottom-[770px] left-[1420px]' >
        <div className='border-b-2 border-gray-200 py-3 flex justify-center items-center gap-4' >
          <button > <IoIosHeartEmpty color="blue" size={30} /></button>
          <h1 className='text-3xl font-semibold' >Favorite Items</h1>

        </div>
        <div>
          {AddData.length > 0 ? (
            AddData.map((item) => (
              <Cart key={item.id} removeItem={removeItem} item={item} />
            ))
          ) : (
            <>
              <h1 className='pt-10 text-[26px] font-medium' >No Favorite Yet</h1>
              <p className='text-lg text-gray-400 mt-6 mb-5' >Click the heart icon on any item <br /> to add it to your favorites</p>

            </>
          )}
        </div>


        <div className='flex items-center justify-between px-10 py-3 border-t-2 border-gray-300' >
          <div className='' >
            <h1 className='text-xl font-semibold' >Total bids Amount</h1>
          </div>
          <div>
            <h1 className='text-2xl font-bold' >${ProductValue}</h1>
          </div>
        </div>
      </div>
      <div style={{ padding: '50px' }}>
        <ToastContainer />
      </div>

      <Footer></Footer>

    </>
  )
}

export default App

import React from 'react';
import data from '../../data.json';
import Card from '../components/Card';
import Cart from '../components/Cart';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
export default function ProductList() {
  const dispatch = useDispatch();
  const data_state = useSelector(state => state.menu.value)
  const modal_status = useSelector(state=> state.modal.value); 
  return (
    <>
    <div className="h-full w-full flex flex-col lg:flex-row p-[20px] sm:p-[80px] bg-Rose-50">
      <div className='h-full lg:w-[70%] flex flex-col justify-between'>
        <h1 className="text-4xl   font-[700] text-Rose-900">Desserts</h1>  
        {`${modal_status}`} 
        <div className='w-full flex flex-wrap justify-between gap-2 mt-2'>
          {data.map((Item, index)=>(
            <Card key={index} data={Item} index={index}   /> 
          ))}
        </div>
      </div>

      <div className='lg:w-[30%] lg:ml-[20px]'>
        <Cart />
      </div>
     
    </div>
    {modal_status &&
     <Modal />
    }
    </>
  );
}

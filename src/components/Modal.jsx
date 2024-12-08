import { useDispatch, useSelector } from "react-redux";
import ItemCart from "./ItemCart";
import { toggle } from "../features/modalStatusSlice";
import { newOrder } from "../features/menuSlice";

export default function Modal() {
    const dispatch = useDispatch();
    const data = useSelector(state=> state.menu.value);
    const sumPrice = data.reduce((total, val)=> total += (val.price*val.qty), 0) 

    const new_order = () => {
        dispatch(toggle());
        dispatch(newOrder());
    }
return(
    <div className="h-full w-full fixed top-0 bg-[rgba(0,0,0,0.5)] flex justify-end items-end md:justify-center md:items-center">
         <div className="w-[550px] h-[42rem]  bg-white p-[20px] overflow-auto rounded-lg rounded-b-none md:rounded-b-lg">
            <img src="./assets/images/icon-order-confirmed.svg" alt="" />
    
    <h1 className="text-5xl md:text-3xl mt-4 text-Rose-900 font-[700] mb-[20px]">Oder Confirmed</h1>
    <p className="text-Rose-400 text-sm leading-[0px] mb-[30px]">We hope you enjoy your food</p>


    <div className="overflow-auto bg-Rose-50 p-4 rounded-sm h-[23rem] my-8">
        {data.map((value, key) => (
            <ItemCart index={key} key={key} data={value} />
        ))
        }
    <div className="flex justify-between items-center py-2">
                <p className="text-Rose-500">Order Total</p>
                <p className="text-Rose-900 font-[700] text-xl">{sumPrice.toFixed(2)}</p>
    </div>
    </div>
    <button 
    onClick={new_order}
    className='w-full flex justify-center my-4 p-4 rounded-full font-[500] text-white bg-Red hover:bg-[#952C0C]'
    >
                Start New Order
    </button>

        </div>
    </div>
)
}
import { useDispatch, useSelector } from "react-redux";
import ItemCart from "./ItemCart";
import { toggle } from "../features/modalStatusSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const data = useSelector(state=> state.menu.value);
    const total = useSelector(state=> state.menu.total);
    const sumPrice = data.reduce((total, val)=> total += (val.price*val.qty), 0) 
    return (
    <div className="w-full min-h-[20rem] bg-white p-[10px]">
    <h1 className="text-2xl text-Red font-[700] mb-[20px]">Your Cart ({total})</h1>
    {data.length < 1 && 
        <div className="h-full flex flex-col justify-center items-center">
            <img src="./assets/images/illustration-empty-cart.svg" alt="" />
            <p className="text-sm text-Rose-500 font-[500]">Your added items will appear here</p>
            </div>
    }

{data.length >= 1 && 
<>


    <div>
        {data.map((value, key) => (
            <ItemCart index={key} key={key} data={value} />
        ))
        }
    </div>
    <div className="flex justify-between items-center py-8">
                <p className="text-Rose-500">Order Total</p>
                <p className="text-Rose-900 font-[700] text-xl">{sumPrice.toFixed(2)}</p>
    </div>
    <div className="bg-Rose-50 text-Rose-500 rounded-md flex justify-center items-center gap-2 p-4 font-[500]">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
        <p>
            This i a <span className="font-[700]">carbon-neutral</span> delivery
        </p>
    </div>

    <button 
    onClick={()=>{dispatch(toggle())}}
    className='w-full flex justify-center my-8 p-4 rounded-full font-[500] text-white bg-Red hover:bg-[#952C0C]'
    >
                Confirm Order
    </button>
</>
}
    </div>
    )
}
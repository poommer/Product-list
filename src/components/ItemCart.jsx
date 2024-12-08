import { useDispatch } from "react-redux"
import { remove } from "../features/menuSlice";

export default function ItemCart({data, index}) {
    const dispatch = useDispatch();
    return (
        <div className="w-full flex justify-between items-center py-4 border-b-[1px] border-b-Rose-100">
            <div>
                <p className="font-[700] text-lg text-Rose-900">{data.name}</p>
                <p className="flex gap-2 font-[500] text-lg text-Rose-500">
                    <span className="text-Red">{data.qty}x</span> 
                    <span className="font-[300]">@ ${data.price}</span> 
                    ${data.qty * data.price}
                    </p>
            </div>
            <button 
            onClick={()=>{console.log(index);
             dispatch(remove(data.name))}}
            className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-Rose-400 hover:border-Rose-900 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path className="group-hover:fill-Rose-900" fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
        </div>
    )
}
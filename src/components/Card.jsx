import { useDispatch, useSelector } from "react-redux"
import { add, decrement, increment, remove } from "../features/menuSlice";

export default function Card({data, index}) {
    const dispatch = useDispatch();
    const data_state = useSelector(state=> state.menu.value); 
    const menuInCart = data_state.find(val=>val.name == data.name) ;
    return (
        <div className="relative w-full h-[370px] sm:w-[250px] 2xl:h-[500px] 2xl:w-[380px] mt-[10px]">
            
            <img src={data.image.desktop} alt="" className={`h-[250px] 2xl:h-[380px] w-full object-cover object-center rounded-[10px] ${menuInCart ? 'border-[2px] border-Red' : ''}`} />
            <div className="w-full flex justify-center ">
                { !menuInCart &&
            <button 
            onClick={()=>{dispatch(add({name:data.name, price:data.price, qty:1, thumbnail:data.image.thumbnail}))}}
            className={`
            absolute bottom-[6.25rem]  transition-all
            hover:border-Red  hover:text-Red
            flex items-center w-[10rem] p-2 rounded-full font-[500] 
            ${!menuInCart ? 'border-[1px] border-Rose-300 text-Rose-900 bg-white justify-center gap-2' : 'bg-Red text-white justify-between'}
            `}>
               
                    <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                    Add to Cart
               
            </button>
            }
                 { menuInCart &&
                <div
                className={`
                    absolute bottom-[6.25rem]  transition-all
                    
                    flex items-center w-[10rem] p-2 rounded-full font-[500] 
                     bg-Red text-white justify-between`}>
                   <button 
                   onClick={()=>{ dispatch(menuInCart.qty === 1 ? remove(data.name) : decrement(data.name)) }   }
                   className="
                   w-6 h-6 flex justify-center items-center rounded-full border-[1px] border-white group hover:bg-white hover:border-Red
                   ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                            <path className="group-hover:fill-Red fill-white" d="M0 .375h10v1.25H0V.375Z"/>
                        </svg>
                   </button>
                    {menuInCart.qty}
                   <button 
                   onClick={()=>{dispatch(increment(data.name))}}
                   className="w-6 h-6 flex justify-center items-center rounded-full border-[1px] border-white hover:bg-white hover:border-Red group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                            <path  className="group-hover:fill-Red fill-white" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                        </svg>
                   </button>
                </div>
                }
            </div>
            <div className="mt-[40px]">
            <p className="text-sm text-Rose-500">{data.category}</p> 
            <p className="text-Rose-900  font-[700]">{data.name}</p> 
            <p className="text-Red font-[500]">${data.price}</p> 
            </div>
        </div>
    )
}
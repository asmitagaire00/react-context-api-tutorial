import { createContext, useState } from "react"

export const CartContext = createContext();

export default function Context({children}) {
    const [cart, setCart] = useState([])
  return (
    <div>
        <CartContext.Provider value ={{cart,setCart}} >{children}</CartContext.Provider>
    </div>
  )
}

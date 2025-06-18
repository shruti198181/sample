import { createContext, useContext, useReducer } from "react";

const initialStates = {
    cartItems : [],
};

function cartReducer(state,action) {
    switch (action.type) {
        case "Add To Cart" :
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
            case "Remove From Cart" :
                return {
                    ...state,
                    cartItems : state.cartItems.filter(item=> item.id !== action.payload),
                };
              case "Clear Cart" :
                return {
                    ...state,
                    cartItems : []
                }
                default :
                return state;
    };
}

const cartContext = createContext();

export const CartProvider = ({children}) => {
     const [state,dispatch] = useReducer(cartReducer, initialStates);

     return(
        <cartContext.Provider value={{cartItems : state.cartItems, dispatch}}>
            {children}
        </cartContext.Provider>
     )
};
export const useCart = () => useContext(cartContext)
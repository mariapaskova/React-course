interface ICartItem {
  pizzaId: string;
  count: number;
}

type ICart = ICartItem[];

const CART_ADD = 'cart/add';
const CART_REMOVE = 'cart/remove';

export default function cartReducer(state: ICart = [], action: any) {

  if(action.type === CART_ADD) {
    if(state.find(item => item.pizzaId === action.payload)) {
      return state.map(item => 
        item.pizzaId === action.payload 
        ? {
          ...item,
          count: item.count + 1
        }
        : item)
    } else {
      return [...state, {pizzaId: action.payload, count: 1}]
    }
  }

  return state;
}


export function addToCart (pizza: any) {
  return {
    type: CART_ADD,
    payload: pizza.id
  }
}

export function removeFtomToCart (pizza: any) {
  return {
    type: CART_REMOVE,
    payload: pizza.id
  }
}
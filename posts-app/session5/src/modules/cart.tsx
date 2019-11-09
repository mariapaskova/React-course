import { IPizza } from "./pizzas";

export interface ICartItem {
  pizzaId: string;
  count: number;
}

type ICart = ICartItem[];

const CART_ADD = 'cart/add';
const CART_REMOVE = 'cart/remove';

export default function cartReducer(state: ICart = [], action: any) {

  if(action.type === CART_ADD) {
    if(state.find((item: ICartItem) => item.pizzaId === action.payload)) {
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

  if(action.type === CART_REMOVE) {
    if(state.find(item => item.pizzaId === action.payload)) {
      return state.map((item: ICartItem) => 
        item.pizzaId === action.payload && item.count > 0
        ? {
          ...item,
          count: item.count - 1
        } 
        : item)
        .filter((item: ICartItem) => item.count > 0);
    } else {
      return [...state]
    }
  }

  return state;
}


export function addToCart (pizza: IPizza) {
  return {
    type: CART_ADD,
    payload: pizza.id
  }
}

export function removeFromCart (pizza: IPizza) {
  return {
    type: CART_REMOVE,
    payload: pizza.id
  }
}
export interface IPizza {
  id: string;
  name: string;
  price: number;
  likes: number;
  viewerLiked: boolean;
}

const pizzaFetch = 'pizzas/FETCH'

export default function pizzasReducer(state = [], action: any) {
  if(action && action.type === pizzaFetch) {
    return action.payload;
  }
  return state;
}

export function fetchPizzas(pizzas: IPizza[]) {
  return {
    type: pizzaFetch,
    paylocas: pizzas
  }
}

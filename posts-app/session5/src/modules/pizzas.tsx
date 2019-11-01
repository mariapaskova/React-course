export interface IPizza {
  id: string;
  name: string;
  price: number;
  likes: number;
  viewerLiked: boolean;
}

const ACTION_FETCH = 'pizzas/FETCH'

export default function pizzasReducer(state = [], action: any) {
  if(action && action.type === ACTION_FETCH) {
    return action.payload;
  }
  return state;
}

export function fetchPizzas(pizzas: IPizza[]) {
  return {
    type: ACTION_FETCH,
    payload: pizzas
  }
}

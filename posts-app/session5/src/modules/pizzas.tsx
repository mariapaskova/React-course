export interface IPizza {
  id: string;
  name: string;
  price: number;
  likes: number;
  viewerLiked: boolean;
}

const ACTION_FETCH = 'pizzas/FETCH';
const ACTION_UPVOTE = 'pizzas/upvote';
const ACTION_DOWNVOTE = 'pizzas/downvote';

export default function pizzasReducer(state = [], action: any) {
  if(action && action.type === ACTION_FETCH) {
    return action.payload;
  }

  if(action && action.type === ACTION_UPVOTE) {
    return state.map((pizza: IPizza) => pizza.id === action.payload.id ? {
      ...pizza, likes: pizza.likes + 1 , viewerLiked: true
    } : pizza);
  }

  if(action && action.type === ACTION_DOWNVOTE) {
    return state.map((pizza: IPizza) => pizza.id === action.payload.id ? {
      ...pizza, likes: pizza.likes - 1, viewerLiked: false
    } : pizza);
  }

  return state;
}

export function fetchPizzas(pizzas: IPizza[]) {
  return {
    type: ACTION_FETCH,
    payload: pizzas
  }
}

export function upvote(pizza: IPizza) {
  return {
    type: ACTION_UPVOTE,
    payload: pizza
  }
}

export function downvote(pizza: IPizza) {
  return {
    type: ACTION_DOWNVOTE,
    payload: pizza
  }
}

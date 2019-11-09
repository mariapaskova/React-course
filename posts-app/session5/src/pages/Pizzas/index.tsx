import React from 'react';
import { IPizza, fetchPizzas, upvote, downvote } from '../../modules/pizzas';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../modules/cart';

interface IProps {pizzas: IPizza[]}

export default function Page() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    api.listPizzas().then((pizzas:any) => {
      dispatch(fetchPizzas(pizzas));
    } );
  }, []);


  return <div>  
    <PizzaList/> 
    <Cart />
  </div> ;
}


function PizzaList() {
  const pizzas: IPizza[] = useSelector((state:any)=> state.pizzas);

  if(pizzas.length === 0) {
    return null;
  }

  return (
    <ul>
      {pizzas.map(pizza => {
        return (
          <li key={pizza.id}>
          <VoteButton pizza={pizza}/>
          {pizza.name} (${pizza.price}) Likes: {pizza.likes}
          <AddToCart pizza={pizza}/>
          </li>)
      })}
    </ul>
  )
}

function VoteButton({pizza}: {pizza: IPizza}) {
  const dispatch = useDispatch();

  if(pizza.viewerLiked) {
    return (
      <button 
        className="btn btn-warning"
        onClick={() => dispatch(downvote(pizza))}>
        {pizza.likes}
      </button>
    )
  }
  return (
    <button 
      className="btn btn-primary"
      onClick={() => dispatch(upvote(pizza))}>
      {pizza.likes}
    </button>
  )
}

function AddToCart({pizza}: {pizza: IPizza}) {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-primary"
      onClick={() => dispatch(addToCart(pizza))}>
      Add to Cart
    </button>
  )
}

function RemoveFromCart({pizza}: {pizza: IPizza}) {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-secondary"
      onClick={() => dispatch(removeFromCart(pizza))}>
      Remove from Cart
    </button>
  )
}


function Cart() {
  const items = useSelector(getCart);

  return (
    <>
      <h2>Cart ({items.length})</h2>
      <ul>
        {items.map((item: {count: number, pizza: IPizza}) => (<li key={item.pizza.id}>
          {item.pizza.name} = {item.count}
          ($ {item.pizza.price * item.count})
          <RemoveFromCart pizza={item.pizza} />
        </li>))}
      </ul>
    </>
  )
}

function getCart(store: any) {
  return store.cart.map((item: any) => ({
    count: item.count,
    pizza: store.pizzas.find((pizza:any) => pizza.id === item.pizzaId)
  }))
}

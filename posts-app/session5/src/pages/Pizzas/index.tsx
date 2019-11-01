import React from 'react';
import { IPizza, fetchPizzas, upvote, downvote } from '../../modules/pizzas';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';

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

import React from 'react';
import { IPizza, fetchPizzas } from '../../modules/pizzas';
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
          <button className="btn btn-primary">{pizza.likes}</button>
          {pizza.name} (${pizza.price})
          </li>)
      })}
    </ul>
  )
}

import React from 'react';
import { IPizza } from '../../modules/pizzas';
import api from '../../utils/api';

interface IProps {pizzas: IPizza[]}

export default function Page() {
  const [data, setData] = React.useState<IPizza[] | null>(null);

  React.useEffect(() => {
    api.listPizzas().then(setData as any);
  }, []);


  return <div> {data && 
  <PizzaList pizzas = {data}/> }
  </div> ;
}


function PizzaList({pizzas}: IProps ) {
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

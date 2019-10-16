import React from "react";
import data from "../../pizzasData";
import Pizza from "./pizza/pizza";

export default function List() {
  return (
    <div>
      {data.map(pizza => {
        return (
          <Pizza
            key={pizza.id}
            title={pizza.title}
            tagline={pizza.tagline}
            votesCount={pizza.votesCount}
          ></Pizza>
        );
      })}
    </div>
  );
}

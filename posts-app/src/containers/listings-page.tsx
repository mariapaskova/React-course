import React from "react";
import data from "../pizzasData";
import Pizza from "../components/pizza/pizza";

export default function ListingsPage() {
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

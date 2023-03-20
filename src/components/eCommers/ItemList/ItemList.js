import "./ItemList.scss";
import ItemCard from "../ItemCard/ItemCard";
/* import { TextInput } from 'flowbite-react'; */

import React from "react";

export const ItemList = ({ productsToShow }) => {
  return (
    <main>
      <section className="prod-galery">
        {productsToShow.map((product) => (
          <ItemCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
};

export default ItemList;

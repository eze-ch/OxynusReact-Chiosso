import "./ItemListContainer.scss";

//import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { allProducts } from "../requestSim/dataAcquisition";
import ItemList from "../ItemList/ItemList";

import Spinner from "../../Tools/Spinner/Spinner";
import { Link, useLocation, NavLink } from 'react-router-dom';


export const ItemListContainer = () => {
  // productos actuales a mostrar
  const [actualProducts, setActualProducts] = useState([]);

  //Estado Spinner
  const [loading, setLoading] = useState(true);

  //Parametros de ruta por genero
  const { category } = useParams();


  // captura de datos y llenado de datos en el estado
  useEffect(() => {
    setLoading(true);
    allProducts()
      .then((res) => {
        if (category) {
          const filterProducts = res.filter(
            (product) => product.category === category
          );
          setActualProducts(filterProducts);
        } else {
          setActualProducts(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);


  return (
    <div className="prod-central">
     
      <ul className="prod-category">
          <li><Link to={'/productos'}>Todos</Link></li>
          <li><Link to={'/productos/Electronica'}>Electronica</Link></li>
          <li><Link to={'/productos/Iluminacion'}>Iluminacion</Link></li>
          <li><Link to={'/productos/Riego'}>Riego</Link></li>
      </ul>
     
      <div>
        {loading ? (
          <Spinner />
        ) : actualProducts.length === 0 ? (
          {
            /* <NoProducts /> */
          }
        ) : (
          <div className="prod-galery">
            <ItemList productsToShow={actualProducts} />

          </div>
        )}
      </div>
    </div>
  );
};


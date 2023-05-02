import './ItemDetailContainer.scss'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productById } from '../requestSim/dataAcquisition';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../../Tools/Spinner/Spinner'
import { Test } from "../../test/test";

export const ItemDetailContainer = () => {

	//estado producto por id
	const [product, setProduct] = useState(null);

	const [loading, setLoading] = useState(true);

	
	//Parametro de ruta por id
	const { productId } = useParams()

	useEffect(() => {
		setLoading(true);
		
		productById(productId)
		.then(res => {
			setProduct(res)
		})
		.finally(() =>{
			setLoading(false);
		}
		)
	},[])


	//console.log(product)
	return (

		<div>
            {
                loading
                    ? <Spinner/>
					/* : <Test/> */
                    : <ItemDetail item={product}/>
            }
        </div>

		)
};



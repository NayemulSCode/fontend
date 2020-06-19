import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props){

    // hooks start
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispactch = useDispatch();

    useEffect(() =>{
        dispactch(listProducts());
        return () =>{

        }
    }, [])
    // hook end

    return loading ? <div>Loading...</div>:
    error ? <div>{error}</div>:
      <ul className="products">
      {
        products.map(product =>
          <li key={product._id}>
            <div className="product">
              <Link to={'/product/' + product._id}>
                <img className="product-image" src={product.image} alt="product" />

              </Link>
              <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">&#x09F3;{product.price}</div>
              <div className="product-rating">{product.ratting} Stars ({product.numReviews} Reviews)</div>
            </div>
          </li>)
      }
    </ul>
}
export default HomeScreen;
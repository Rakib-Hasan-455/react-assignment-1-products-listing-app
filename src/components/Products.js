/* eslint-disable react/prop-types */
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map(product =>  {
              console.log(product)
      return (
        <Product key={uuidv4()} product={product} />
      )})}
    </div>
  );
}

export default Products;
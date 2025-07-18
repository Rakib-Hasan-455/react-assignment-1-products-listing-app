/* eslint-disable react/prop-types */

const Product = (prop) => {
  const { title, price, description, image, rating } = prop.product;
  return (
      <article className="product">
      <img src={image} alt={title} />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p>Price: $ {price}</p>
        <p>Rating: {rating.rate}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;

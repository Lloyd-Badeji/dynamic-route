import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


let url = "https://fakestoreapi.com/products"

const Fetch = () => {
  const [api, setApi] = useState([]);
  
  useEffect(() => {
    fetch(url) 
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
        console.log(data);
      });
  }, []);
  
  return (
    <>
      {api.map((product) => (
        <div key={product.id}>
          {product.category}
          {product.description}
          {product.id}
          <img src={product.image} alt={product.title} />
          {product.price}
          {product.title}
          <Link to={`/product/${product.id}`}><button className="btn">Learn More</button></Link>
        </div>
      ))}
    </>
  );
}

export default Fetch;







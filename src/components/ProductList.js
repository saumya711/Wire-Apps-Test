import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import products from '../data/product';
import { Link, useParams } from 'react-router-dom';

const ProductList = () => {
    const { category } = useParams(); 
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log(category)
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
    console.log(filteredProducts)
  }, [category]);

  return (
    <div className='container'>
      <Link to="/">Home</Link>
      {category === 'mens-clothing' ? (
        <h2 className="text-right mt-5" >Men's Clothing</h2>
        ) : (
        <h2 className="text-right mt-5" >Women's Clothing</h2>
        )
      }
      <div className='row'>
        {filteredProducts.map((product) => (
          <div className='col-md-4 mt-5' key={product.id}>
            <Card className="d-flex flex-column justify-content-center align-items-center h-100">
              <Card.Title className="mt-3">{product.title}</Card.Title>
              <Card.Img 
                style={{ height: "50%", width: "50%"}} 
                src={Object.values(product.image)[0]} 
              />
              <Card.Body 
                className="text-center mt-3 pb-10" 
                style={{ backgroundColor: product.category === 'mens-clothing' ? '#4ff0ba' : '#eb4261', width: "100%", borderRadius: "10px"}}
              >
                <Card.Title style={{ color: "#161687", fontWeight: "bold"}}>Rs. {product.price}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

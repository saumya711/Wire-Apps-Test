import React, { useEffect, useState } from 'react';
import products from '../data/product';
import Card from 'react-bootstrap/Card';
import categories from './../data/categories';
import { useNavigate  } from 'react-router-dom';

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    setProductList(products);
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => setProductList(data))
    //   .catch(error => console.log('Error fetching products:', error));
      console.log(productList);
  },[]);

  useEffect(() => {
    setCategoryList(categories);
    // fetch('https://fakestoreapi.com/products/categories')
    //   .then(res => res.json())
    //   .then(data => setCategoryList(data))
    //   .catch(error => console.log('Error fetching products:', error));
      console.log(categoryList);
  },[]);

  const handleCategoryClick = (categoryName) => {
    navigate(`/product-list/${categoryName}`);
  };

  return (
    <div className='container'>
      <h2 className="text-right mt-5" >Flash Sale</h2>
      <div className='row d-flex align-items-stretch'>
        {productList.map((product) => (
          <div className='col-md-4 mt-5' key={product.id}>
            <Card className="d-flex flex-column justify-content-center align-items-center h-100">
            <Card.Title  className="mt-3" >{product.title}</Card.Title>
            <Card.Img 
              style={{ height: "50%", width: "50%"}} 
              //variant="bottom" 
              // src={product.image}  // for remote api
              src={Object.values(product.image)[0]} // for dummy data
            />
            <Card.Body 
              className="text-center mt-3 pb-10" 
              style={{ backgroundColor: product.category === 'mens-clothing' ? '#4ff0ba' : '#eb4261' , width: "100%", borderRadius: "10px"}} // for dummy data
              //style={{ backgroundColor: product.category === 'men's clothes' ? '#4ff0ba' : '#eb4261' , width: "100%", borderRadius: "10px"}} 
            >
            <Card.Title style={{ color: "#161687", fontWeight: "bold"}}>Rs. {product.price}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        ))}
      </div>

      <h2 className="text-right mt-5">Categories</h2>
     
      <div className='row'>
        {categories.map((category) => (
          <div 
            className='col-md-6 mt-5 mb-5 d-flex justify-content-center align-items-center' 
            key={category.id} 
            onClick={() => handleCategoryClick(category.name)}
          >
            <div 
              className="d-flex justify-content-center align-items-center"
              style={{ 
                backgroundColor: category.name === 'mens-clothing' ? '#4ff0ba' : '#eb4261', 
                height: "100px", 
                borderRadius: "15px",
                width: "100%",
              }}
              onClick={() => handleCategoryClick(category.name)}
            >
            <Card.Title style={{ fontSize: '24px', color: '#fff' }}>
              {category.name === 'mens-clothing' ? (
                <h4>Men's Clothing</h4>
              ) : (
                <h4>Women's Clothing</h4>
              )}
            </Card.Title>
          </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default HomePage

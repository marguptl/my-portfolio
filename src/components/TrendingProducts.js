import React from 'react';
import '../style/TrendingProducts.css';
import Slider from 'react-slick';
import dog_food from '../images/pedigree_food.png'; 
import pet_feeder from '../images/Pets-Automatic-Pet-Feeder.png'; 
import ball_launcher from '../images/ball_launcher.jpg';

const TrendingProducts = () => {
    const products = [
    { id: 1, name: "Pet Ball Launcher", imgSrc: ball_launcher, price: "$29.99" },
    { id: 2, name: "Automatic Pet Feeder", imgSrc: pet_feeder, price: "$59.99" },
    { id: 3, name: "Pedigree", imgSrc: dog_food, price: "$19.99" }
    ];



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: true,
      };
      return (
        <div className="trending-products">
          <h2>Trending Products</h2>
          <Slider {...settings}>
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button className="buy-now">Buy Now</button>
              </div>
            ))}
          </Slider>
        </div>
      );
};

export default TrendingProducts;

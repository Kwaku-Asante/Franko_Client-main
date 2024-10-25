import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';
import franko from "../../assets/franko.jpeg";
import { FaCartArrowDown } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Skyworth Air Condition (2.5hp) 24V",
    price: 6500.00,
    image: franko
  },
  {
    id: 2,
    title: "Skyworth Air Condition (1.5hp) 12v",
    price: 3700.00,
    image: franko
  },
  {
    id: 3,
    title: "Skyworth Air condition (2.0hp) 18v",
    price: 5150.00,
    image: franko
  },
  {
    id: 4,
    title: "Franko ac 2.0 hp (shb-02)",
    price: 4800.00,
    image: franko
  }
];

const ProductCard = ({ title, price, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        hoverable
        className="w-full relative"
        cover={
          <div className="relative">
            <img
              alt={title}
              src={image}
              className="w-full h-auto"
            />
          </div>
        }
      >
        <div className="space-y-2 sm:space-y-2">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 line-clamp-2">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-red-500 font-semibold text-sm sm:text-base">
              ₵ {price.toFixed(2)}
            </span>
            <div className={`transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <button 
                className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  // Add your cart functionality here
                  console.log('Added to cart:', title);
                }}
              >
                <FaCartArrowDown className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ProductGrid = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
    <Row gutter={[16, 16]}>
      {products.map((product) => (
        <Col 
          key={product.id}
          xs={12}
          md={12}
          lg={6}
        >
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
          />
        </Col>
      ))}
    </Row>
  </div>
);

export default ProductGrid;
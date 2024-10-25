import React from 'react';
import { Card, Tag } from 'antd';
import franko  from "../assets/franko.jpeg"

const products = [
  {
    id: 1,
    title: "Skyworth Air Condition (2.5hp) 24V",
    price: 6500.00,
    image:  franko,
    tag: "Best Selling"
  },
  {
    id: 2,
    title: "Skyworth Air Condition (1.5hp) 12v",
    price: 3700.00,
    image: franko,
    tag: "Best Selling"
  },
  {
    id: 3,
    title: "Skyworth Air condition (2.0hp) 18v",
    price: 5150.00,
    image: franko,
    tag: "Best Selling"
  },
  {
    id: 4,
    title: "Franko ac 2.0 hp (shb-02)",
    price: 4800.00,
    image: franko,
    tag: "Best Selling"
  }
];

const ProductCard = ({ title, price, image, tag }) => (
  <Card
    hoverable
    className="w-full max-w-sm mx-auto"
    cover={
      <img
        alt={title}
        src={image}
        className="w-full h-auto"
      />
    }
  >
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-red-500 font-semibold">₵ {price.toFixed(2)}</span>
        <Tag color="red">{tag}</Tag>
      </div>
    </div>
  </Card>
);

const ProductGrid = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold mb-6">Phones & Tablets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          tag={product.tag}
        />
      ))}
    </div>
  </div>
);

export default ProductGrid;
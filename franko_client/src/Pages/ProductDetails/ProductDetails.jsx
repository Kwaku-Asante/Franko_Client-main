import React, { useState } from 'react';
import { Card, Button, InputNumber, Tabs, Tag } from 'antd';
import { HeartOutlined, BarChartOutlined, MailOutlined, ShoppingCartOutlined, TruckOutlined, DollarOutlined, CustomerServiceOutlined, CheckCircleFilled } from '@ant-design/icons';
import frankoimage  from "../../assets/franko.jpeg"
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    frankoimage,
    '/api/placeholder/400/600',
    '/api/placeholder/400/600'
  ];

  const productDetails = {
    name: "SAMSUNG GALAXY A065F/DS A06 64GB 4GB RAM + FREE REMAX RB-T1 BLUETOOTH EARPHONE",
    price: 1499.00,
    sku: "SAM GAL A06 64GB",
    availability: "In stock"
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Images */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src={productImages[selectedImage]} 
              alt="Product" 
              className="w-full rounded-lg shadow-lg"
            />
            <div className="flex mt-4 gap-2 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-4">{productDetails.name}</h1>
            <div className="flex flex-wrap gap-4 items-center">
              <Tag color="blue" className="text-sm px-3 py-1">New Arrival</Tag>
              <Tag color="green" className="text-sm px-3 py-1">Free Earphone</Tag>
              <Tag color="purple" className="text-sm px-3 py-1">Limited Offer</Tag>
            </div>
          </div>

          <div className="space-y-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircleFilled className="text-green-500" />
              <span className="font-medium">Availability:</span>
              <span className="text-green-500">{productDetails.availability}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">SKU:</span>
              <span>{productDetails.sku}</span>
            </div>
          </div>

          <div className="text-3xl font-bold mb-6 bg-blue-50 p-4 rounded-lg inline-block">
            ${productDetails.price.toFixed(2)}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="font-medium">Quantity:</span>
              <InputNumber
                min={1}
                value={quantity}
                onChange={value => setQuantity(value)}
                className="w-20"
              />
            </div>
            <Button 
              type="primary" 
              icon={<ShoppingCartOutlined />} 
              size="large"
              className="bg-green-500 hover:bg-green-600"
            >
              Add to Cart
            </Button>
            <Button 
              icon={<HeartOutlined />} 
              size="large"
              className="hover:text-red-500 hover:border-red-500"
            />
            <Button 
              icon={<BarChartOutlined />} 
              size="large"
              className="hover:text-blue-500 hover:border-blue-500"
            />
            <Button 
              icon={<MailOutlined />} 
              size="large"
              className="hover:text-purple-500 hover:border-purple-500"
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <TruckOutlined className="text-2xl text-blue-500" />
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-gray-500">On all orders</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <DollarOutlined className="text-2xl text-blue-500" />
              <div>
                <div className="font-semibold">Best Price</div>
                <div className="text-sm text-gray-500">Guaranteed</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <CustomerServiceOutlined className="text-2xl text-blue-500" />
              <div>
                <div className="font-semibold">Online Support</div>
                <div className="text-sm text-gray-500">24/7 available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8">
        <Tabs
          items={[
            {
              key: '1',
              label: 'Details',
              children: <div className="p-4">Product details content</div>,
            },
            {
              key: '2',
              label: 'Specifications',
              children: <div className="p-4">Specifications content</div>,
            }
          ]}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
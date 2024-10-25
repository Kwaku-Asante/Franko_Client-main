import React from 'react';
import { Button, InputNumber, Card } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'HP Laptop i7',
      description: '(8/1tb) with accessories',
      price: 8090.00,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Air Conditioner',
      description: '2.0HP 18v',
      price: 5150.00,
      quantity: 1,
      image: '/api/placeholder/80/80'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card>
 <div className="max-w-6xl mx-auto p-4" style={{marginTop:"5%"}}>
      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-4 gap-4 p-3 bg-white text-green-700 font-semibold hidden md:grid">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {cartItems.map((item) => (
          <Card key={item.id} className="shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Product Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="md:text-left">
                <span className="md:hidden font-medium mr-2">Price:</span>
                GHC {item.price.toFixed(2)}
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-2">
                <Button 
                  icon={<MinusOutlined />} 
                  className="flex items-center justify-center"
                />
                <InputNumber
                  min={1}
                  value={item.quantity}
                  className="w-16"
                />
                <Button 
                  icon={<PlusOutlined />}
                  className="flex items-center justify-center"
                />
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <div>
                  <span className="md:hidden font-medium mr-2">Subtotal:</span>
                  GHC {(item.price * item.quantity).toFixed(2)}
                </div>
                <Button 
                  danger
                  icon={<DeleteOutlined />}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Cart Total */}
      <Card className="max-w-md ml-auto">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total:</span>
            <span className="text-xl font-semibold">GHC {total.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
          <Button 
            type="primary"
            className="w-full bg-green-700 hover:bg-green-800"
          >
            Proceed to checkout
          </Button>
          </Link>
        
        </div>
      </Card>
    </div>
    </Card>
   
  );
};

export default ShoppingCart;
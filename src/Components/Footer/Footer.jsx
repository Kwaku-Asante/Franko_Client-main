import React from 'react';
import { Input, Button } from 'antd';
import { MailOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="w-full">
      {/* Newsletter Section */}
      <div className="bg-green-500 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="text-white">
            <div className="flex items-center gap-2">
              <MailOutlined className="text-lg" />
              <h3 className="font-bold text-base">Get Special Offers and Savings</h3>
            </div>
            <p className="text-xs">Get all the latest information on Events, Sales and Offers.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input 
              placeholder="Email Address" 
              className="max-w-xs h-8"
            />
            <Button type="primary" className="bg-white text-blue-500 hover:bg-gray-100 h-8 flex items-center">
              GO!
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-800 text-white py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="text-xl font-bold mb-2">
                Franko 
              </div>
              <p className="text-gray-300 text-sm">
                Your premier retail outlet for I.T. products, services and accessories,
                all under one roof.
              </p>
              {/* Questions Section */}
              <div className="mt-2">
                <div className="text-xs font-bold">QUESTIONS?</div>
                <div className="text-blue-400 text-sm font-bold">+233302225651</div>
                <Button type="primary" size="small" className="bg-blue-500 mt-1">
                  Chat Online
                </Button>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Company */}
              <div>
                <h4 className="font-bold text-sm mb-2">COMPANY</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/About" className="text-gray-300 hover:text-white text-sm">
                    About us
                    </Link>
                    </li>
                  <li>
                    <Link to="/Contact"  className="text-gray-300 hover:text-white text-sm">
                    Contact Us
                    </Link>
                    </li>
                  <li>
                    <Link to="/Term" className="text-gray-300 hover:text-white text-sm">
                    Terms
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {/* Account */}
              <div>
                <h4 className="font-bold text-sm mb-2">ACCOUNT</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to="/order"  className="text-gray-300 hover:text-white text-sm">
                    Order history
                    </Link>
                    <a href="#"></a>
                    </li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Advanced search</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Login</a></li>
                </ul>
              </div>

              {/* Orders */}
              <div>
                <h4 className="font-bold text-sm mb-2">ORDERS</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Delivery Info</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Returns Policy</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Payment</a></li>
                </ul>
              </div>

              {/* Business */}
              <div>
                <h4 className="font-bold text-sm mb-2">BUSINESS</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Solutions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Corporate</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white text-sm">Support</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 pt-2 border-t border-gray-700">
            <div className="text-gray-400 text-xs">
              © Franko Trading Ltd 2024. All Rights Reserved
            </div>
            <div className="flex gap-3 mt-2 md:mt-0">
              <FacebookOutlined className="text-lg hover:text-blue-400 cursor-pointer" />
              <TwitterOutlined className="text-lg hover:text-blue-400 cursor-pointer" />
              <LinkedinOutlined className="text-lg hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Badge, Button, Drawer } from 'antd';
import { 
  MenuOutlined, 
  SearchOutlined, 
  HeartOutlined, 
  ShoppingCartOutlined, 
  CloseOutlined, 
  PhoneOutlined,
  UserOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  SettingOutlined
} from '@ant-design/icons';
import frankoLoge  from "../../assets/frankoIcon.png"
import { SiHp } from "react-icons/si";
import { FaBahai } from "react-icons/fa";
import { CgSmartphone } from "react-icons/cg";
import { MdLaptopChromebook } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { RiFridgeFill } from "react-icons/ri";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineConnectedTv } from "react-icons/md";

import { SiSamsung } from "react-icons/si";
import ai from "../../assets/ai.png"
const AccountDropdown = ({ isVisible, setIsVisible }) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsVisible]);

  return (
    <>
      <Button 
        ref={buttonRef}
        type="text" 
        icon={<UserOutlined />}
        className="hidden md:flex hover:text-blue-600"
        onClick={() => setIsVisible(!isVisible)}
      >
        My Account
      </Button>
      <div 
        ref={dropdownRef}
        className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <UserOutlined className="mr-2" />
          <span>My Profile</span>
        </Link>
        <Link to="/order" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <ShoppingOutlined className="mr-2" />
          <span>My Orders</span>
        </Link>
        {/* <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <SettingOutlined className="mr-2" />
          <span>Settings</span>
        </Link> */}
        <div className="border-t border-gray-100">
          <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <LogoutOutlined className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isAccountDropdownVisible, setIsAccountDropdownVisible] = useState(false);

  const menuItems = [
    { title: 'All Categories', icon: <MenuOutlined />, path: '/categories' },
    { title: 'AI Enabled', icon: <FaBahai />, path: '/AlEnabled' },
    { title: 'Phones & Tablets', icon: <CgSmartphone />, path: '/PhoneAndTablets' },
    { title: 'IT & Networking', icon: <MdLaptopChromebook />, path: '/NetWorking' },
    { title: 'Samsung Products', icon: <IoPhonePortrait />, path: '/SamsungProducte' },
    { title: 'HP Products', icon: <SiHp /> , path: '/hp' },
    { title: 'Fridge', icon: <RiFridgeFill />, path: '/LGProducts' },
    { title: 'AirConditioning ', icon:<TbAirConditioning />, path: '/HomeAppli' },
    { title: 'Televisions', icon: <MdOutlineConnectedTv />, path: '/small-appliances' },
    { title: 'Accessories', icon: '➕', path: '/more' },
  ];

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top bar */}
      <div className="bg-white py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            <Link to="/">
              <img
                src={frankoLoge}
                className="h-12 w-auto object-contain my-2"
                alt="Franko Trading"
              />
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-grow mx-8 max-w-2xl hidden md:block">
            <Input
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Enter Keyword or Item"
              prefix={<SearchOutlined className="text-gray-400" />}
              suffix={
                searchValue ? 
                <CloseOutlined 
                  className="text-gray-400 cursor-pointer" 
                  onClick={clearSearch}
                /> : null
              }
              className="w-full"
            />
          </div>

          {/* Contact and icons */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end">
              <div className="text-sm text-gray-500">Call Us Now</div>
              <div className="text-blue-600 font-semibold flex items-center gap-1">
                <PhoneOutlined />
                +233 302225651
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Account Button with Dropdown */}
              <div className="relative">
                <AccountDropdown 
                  isVisible={isAccountDropdownVisible} 
                  setIsVisible={setIsAccountDropdownVisible}
                />
              </div>
              <HeartOutlined className="text-xl cursor-pointer hover:text-blue-600" />
              <Badge count={3} className="cursor-pointer">
                <Link to="/cart">
                  <ShoppingCartOutlined className="text-xl hover:text-blue-600" />
                </Link>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="bg-white px-4 py-2 md:hidden">
        <Input
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Enter Keyword or Item"
          prefix={<SearchOutlined className="text-gray-400" />}
          suffix={
            searchValue ? 
            <CloseOutlined 
              className="text-gray-400 cursor-pointer" 
              onClick={clearSearch}
            /> : null
          }
          className="w-full"
        />
      </div>

      {/* Navigation menu */}
      <div className="bg-red-500 text-white items-start"   >
        <div className="max-w-7xl mx-auto">
          {/* Mobile menu button */}
          <div className="md:hidden p-4">
            <Button 
              type="text" 
              icon={<MenuOutlined className="text-white" />}
              onClick={() => setIsMenuOpen(true)}
              className="text-white"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-start overflow-x-auto" >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-4 py-3 hover:bg-red-600 cursor-pointer flex items-center gap-2 whitespace-nowrap text-white no-underline"
        
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
        width={280}
      >
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="py-3 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-gray-700 no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
import React from 'react'
import ProductCarousel from '../../Components/Carousel/ProductCarousel'
import { Card, Tag } from 'antd';

function Categories() {
    const categories = [
        {
          id: 1,
          name: 'Phones',
          image: '/api/placeholder/200/200',
        },
        {
          id: 2,
          name: 'Computers',
          image: '/api/placeholder/200/200',
        },
        {
          id: 3,
          name: 'Televisions',
          image: '/api/placeholder/200/200',
        },
        {
          id: 4,
          name: 'Fridges',
          image: '/api/placeholder/200/200',
        },
        {
          id: 5,
          name: 'Air Conditioners',
          image: '/api/placeholder/200/200',
        },
        {
          id: 6,
          name: 'Washing Machines',
          image: '/api/placeholder/200/200',
        },
        {
          id: 7,
          name: 'Speakers',
          image: '/api/placeholder/200/200',
        },
        {
          id: 8,
          name: 'Fans',
          image: '/api/placeholder/200/200',
        },
        {
          id: 9,
          name: 'Printers',
          image: '/api/placeholder/200/200',
        },
        {
          id: 10,
          name: 'Accessories',
          image: '/api/placeholder/200/200',
        },
      ];
  return (
    <>
    <ProductCarousel/>

    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Card 
            key={category.id}
            className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="p-4 flex flex-col items-center">
              <div className="w-32 h-32 mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}

export default Categories

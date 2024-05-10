"use client"

import React, { useState } from 'react';

type Product = {
  name: string;
  imageUrl: string;
};

type CategorySectionProps = {
  title: string;
  products: Product[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ title, products }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 flex flex-col items-center">
            <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover mb-2" />
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [
    'https://source.unsplash.com/random/1024x768?fashion',
    'https://source.unsplash.com/random/1024x768?clothing',
    'https://source.unsplash.com/random/1024x768?apparel'
  ];

  // Using random images for demonstration
  const createProducts = (category: string) => Array(8).fill(null).map((_, index) => ({
    name: `${category} Product ${index + 1}`,
    imageUrl: `https://source.unsplash.com/random/200x200?${category.toLowerCase()}${index}`
  }));

  const categories = {
    Men: createProducts('Men'),
    Women: createProducts('Women'),
    Kids: createProducts('Kids')
  };

  const handleCarousel = (direction: 'prev' | 'next') => {
    setCarouselIndex(prev => (direction === 'next' ? (prev + 1) % carouselImages.length : (prev + carouselImages.length - 1) % carouselImages.length));
  };

  return (
    <div>
      <nav className="bg-gray-400 text-black p-4">
        <ul className="flex justify-around">
          <li><a href="#men">Men</a></li>
          <li><a href="#women">Women</a></li>
          <li><a href="#kids">Kids</a></li>
        </ul>
      </nav>
      <div className="relative">
        <img src={carouselImages[carouselIndex]} alt="Carousel" className="w-full" />
        <button onClick={() => handleCarousel('prev')} className="absolute left-0 top-1/2 bg-black text-white p-2">Prev</button>
        <button onClick={() => handleCarousel('next')} className="absolute right-0 top-1/2 bg-black text-white p-2">Next</button>
      </div>
      <div className="container mx-auto px-4">
        {Object.entries(categories).map(([key, value]) => (
          <CategorySection key={key} title={`${key}'s Clothing`} products={value} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

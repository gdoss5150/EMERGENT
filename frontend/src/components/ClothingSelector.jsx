import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const ClothingSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handleClothingToggle = (item) => {
    setSelectedOptions(prev => ({
      ...prev,
      clothing: prev.clothing.includes(item.name) 
        ? prev.clothing.filter(c => c !== item.name)
        : [...prev.clothing, item.name]
    }));
  };

  const categories = {
    'High-End Streetwear': mockData.clothing.filter(c => c.category === 'streetwear'),
    'Luxury Fashion': mockData.clothing.filter(c => c.category === 'luxury'),
    'Footwear': mockData.clothing.filter(c => c.category === 'footwear'),
    'Accessories': mockData.clothing.filter(c => c.category === 'accessories')
  };

  const renderClothingGrid = (items) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Button
            key={item.id}
            variant={selectedOptions.clothing.includes(item.name) ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.clothing.includes(item.name) 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleClothingToggle(item)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{item.name}</span>
              <span className="text-sm text-gray-400 mb-2">{item.brand}</span>
              {item.price && (
                <span className="text-sm text-green-400 mb-2">{item.price}</span>
              )}
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {item.category}
                </Badge>
                {item.style && (
                  <Badge variant="outline" className="text-xs">
                    {item.style}
                  </Badge>
                )}
              </div>
            </div>
          </Button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-white">👕 Select Clothing</h2>
        {selectedOptions.clothing.length > 0 && (
          <Badge variant="secondary" className="bg-yellow-600 text-white">
            {selectedOptions.clothing.length} items
          </Badge>
        )}
      </div>

      {Object.entries(categories).map(([categoryName, items]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderClothingGrid(items)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ClothingSelector;
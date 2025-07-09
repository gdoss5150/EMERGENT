import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../data/mockData';

const RimsSelector = ({ selectedOptions, setSelectedOptions }) => {
  const handleRimsChange = (rims) => {
    setSelectedOptions(prev => ({
      ...prev,
      rims: prev.rims?.id === rims.id ? null : rims
    }));
  };

  const categories = {
    'Classic Style': mockData.rims.filter(r => r.category === 'classic'),
    'Modern Performance': mockData.rims.filter(r => r.category === 'modern' || r.category === 'performance'),
    'Luxury & Premium': mockData.rims.filter(r => r.category === 'luxury'),
    'Rugged & Off-Road': mockData.rims.filter(r => r.category === 'rugged')
  };

  const renderRimsGrid = (rims) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rims.map((rim) => (
          <Button
            key={rim.id}
            variant={selectedOptions.rims?.id === rim.id ? "default" : "outline"}
            className={`p-4 h-auto text-left transition-all duration-200 ${
              selectedOptions.rims?.id === rim.id 
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg transform scale-105' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border-gray-600'
            }`}
            onClick={() => handleRimsChange(rim)}
          >
            <div className="flex flex-col items-start w-full">
              <span className="text-lg font-bold mb-1">{rim.name}</span>
              <span className="text-sm text-gray-400 mb-2">{rim.brand}</span>
              <span className="text-xs text-gray-500 mb-2">{rim.aesthetic}</span>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">
                  {rim.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {rim.style}
                </Badge>
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
        <h2 className="text-xl font-bold text-white">🛞 Select Rims</h2>
        {selectedOptions.rims && (
          <Badge variant="secondary" className="bg-orange-600 text-white">
            {selectedOptions.rims.name}
          </Badge>
        )}
      </div>

      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
        <p className="text-red-300 text-sm">
          🔥 <strong>Wheel Game:</strong> Premium rims from classic hot rod to modern performance. 
          Each wheel selected for authentic car culture appeal and maximum visual impact.
        </p>
      </div>

      {Object.entries(categories).map(([categoryName, rims]) => (
        <Card key={categoryName} className="bg-gray-800/30 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-white">{categoryName}</CardTitle>
          </CardHeader>
          <CardContent>
            {renderRimsGrid(rims)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RimsSelector;